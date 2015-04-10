{-# LANGUAGE DeriveDataTypeable  #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TupleSections       #-}
{-# LANGUAGE ViewPatterns        #-}

module Thentos.DB.Core
  ( ThentosClearance(..)
  , ThentosUpdate, ThentosUpdate'
  , ThentosQuery, ThentosQuery'
  , PermissionDenied(..)
  , runThentosUpdate
  , runThentosUpdateWithLabel
  , runThentosQuery
  , runThentosQueryWithLabel
  , liftThentosQuery
  , returnDb
  , throwDb
  , thentosPublic
  , thentosDenied
  , thentosLabeledPublic
  , thentosLabeledDenied
  , (=%%)
  , TLMode(TLRead, TLReadWrite)
  , createCheckpointLoop
  ) where

import Control.Applicative ((<$>))
import Control.Concurrent (threadDelay, forkIO, ThreadId)
import Control.Exception (Exception)
import Control.Monad (forever)
import Control.Monad.Identity (Identity, runIdentity)
import Control.Monad.Reader (ReaderT, runReaderT, ask)
import Control.Monad.State (StateT(StateT), runStateT, get, put)
import Control.Monad.Trans.Either (EitherT(EitherT), right, runEitherT)
import Data.Acid (AcidState, Update, Query, createCheckpoint)
import Data.EitherR (throwT)
import Data.SafeCopy (deriveSafeCopy, base)
import Data.Typeable (Typeable)
import LIO (canFlowTo, glb)
import LIO.DCLabel (ToCNF, (%%))

import Thentos.Types


-- * types

type ThentosUpdate e a = ThentosUpdate' (ThentosLabeled e) (ThentosLabeled a)
type ThentosQuery  e a = ThentosQuery'  (ThentosLabeled e) (ThentosLabeled a)

type ThentosUpdate' e a = EitherT e (StateT  DB Identity) a
type ThentosQuery'  e a = EitherT e (ReaderT DB Identity) a

data PermissionDenied = PermissionDenied String ThentosClearance ThentosLabel
  deriving (Eq, Ord, Show, Read, Typeable)

instance ThentosError PermissionDenied
instance Exception PermissionDenied
$(deriveSafeCopy 0 'base ''PermissionDenied)


-- * plumbing

liftThentosQuery :: forall e a . ThentosQuery' e a -> ThentosUpdate' e a
liftThentosQuery thentosQuery = EitherT $ StateT $ \ state ->
    (, state) <$> runEitherT thentosQuery `runReaderT` state


-- | Apply clearance and push 'ThentosUpdate' value down to
-- acid-state's own 'Update'.  Errors are returned as 'Left' values in
-- an 'Either'.
--
-- This makes it possible to implement transactions as 'ThentosUpdate'
-- rather than 'Update', which gives extra error handling and
-- authorization labelling.  The actual acid-state transactions
-- ('Update') are constructed in mechanically written transaction
-- wrappers (see section towards the end of "Thentos.DB.Trans" for
-- examples).
--
--
-- FUTURE WORK.  Returning errors as 'Either' has two drawbacks:
--
-- 1. it results in changelogs that contain 'Left' updates (even
--    though they do not change anything), and
-- 2. in the code that runs the transactions, we cannot make use of
--    monad transformers for error handling and propagation.
--
-- There may be ways to avoid this, but the most obvious
-- one would be to enhance the 'Update' monad with error handling, and
-- that would require changes new versions of acid-state's 'update',
-- 'update'', and others.
--
-- The benefit would be both in performance (smaller, less redundant
-- changelog) and in code quality (e.g., no need for 'SafeCopy'
-- instance for errors).
--
-- See also:
--
-- - http://www.reddit.com/r/haskell/comments/2re0da/error_handling_in_acidstate/
-- - http://petterbergman.se/aciderror.html.en
-- - http://acid-state.seize.it/Error%20Scenarios
-- - https://github.com/acid-state/acid-state/pull/38
--
runThentosUpdate :: forall e a . (ThentosError e, Show a)
      => ThentosClearance -> ThentosUpdate e a -> Update DB (Either SomeThentosError a)
runThentosUpdate = runThentosUpdateWithLabel thentosDenied

-- | This is to 'Query' what 'runThentosUpdate' is to 'Update'.
runThentosQuery :: forall e a . (ThentosError e, Show a)
      => ThentosClearance -> ThentosQuery e a -> Query DB (Either SomeThentosError a)
runThentosQuery = runThentosQueryWithLabel thentosDenied

-- | Like 'runThentosUpdate', but with override label.
--
-- Transactions ('ThentosUpdate', 'ThentosQuery', as in
-- "Thentos.DB.Trans") are currently the only place where labels can
-- be attached to where 'ThentosLabel's for authorization can be
-- assigned to code.  Actions, as in "Thentos.Api", should work
-- without authorization check if the transactions get the job done,
-- but sometimes, they need to be able to override the labels set by
-- transactions.
--
-- Example: 'checkPassword' takes a 'UserName' and 'UserPass', looks
-- up the user, and calls 'verifyPass'.  The user lookup transaction
-- certainly should be restricted to certain clearance levels, but in
-- this particular case, we certainly can't expect any clearance level
-- to be established yet.
--
-- Solution: This function takes an extra argument of type
-- 'ThentosLabel' and check clearance against the 'glb' of that label
-- and the one set by the transaction.
runThentosUpdateWithLabel :: forall e a . (ThentosError e, Show a)
      => ThentosLabel -> ThentosClearance -> ThentosUpdate e a -> Update DB (Either SomeThentosError a)
runThentosUpdateWithLabel overrideLabel clearance action = do
    state <- get
    case runIdentity $ runStateT (runEitherT action) state of
        (Left (ThentosLabeled label (err :: e)), _) ->
            checkClearance (show err) clearance (glb overrideLabel label) (return . Left . toThentosError $ err)
        (Right (ThentosLabeled label result), state') ->
            checkClearance (show result) clearance (glb overrideLabel label) (put state' >> return (Right result))

-- | This is to 'Query' what 'runThentosUpdateWithLabel' is to 'Update'.
runThentosQueryWithLabel :: forall e a . (ThentosError e, Show a)
      => ThentosLabel -> ThentosClearance -> ThentosQuery e a -> Query DB (Either SomeThentosError a)
runThentosQueryWithLabel overrideLabel clearance action = do
    state <- ask
    case runIdentity $ runReaderT (runEitherT action) state of
        Left (ThentosLabeled label (err :: e)) ->
            checkClearance (show err) clearance (glb overrideLabel label) (return . Left . toThentosError $ err)
        Right (ThentosLabeled label result) ->
            checkClearance (show result) clearance (glb overrideLabel label) (return $ Right result)

checkClearance :: Monad m => String -> ThentosClearance -> ThentosLabel
        -> m (Either SomeThentosError a) -> m (Either SomeThentosError a)
checkClearance msg clearance label result =
    if fromThentosLabel label `canFlowTo` fromThentosClearance clearance
        then result
        else return . Left . SomeThentosError $ PermissionDenied msg clearance label

returnDb :: Monad m => ThentosLabel -> a -> EitherT (ThentosLabeled e) m (ThentosLabeled a)
returnDb l a = right $ ThentosLabeled l a

throwDb :: (ThentosError e, Monad m) => ThentosLabel -> e -> EitherT (ThentosLabeled e) m (ThentosLabeled a)
throwDb l e = throwT $ ThentosLabeled l e


thentosPublic :: ThentosLabel
thentosPublic = True =%% False

thentosDenied :: ThentosLabel
thentosDenied = False =%% True

thentosLabeledPublic :: t -> ThentosLabeled t
thentosLabeledPublic = ThentosLabeled thentosPublic

thentosLabeledDenied :: t -> ThentosLabeled t
thentosLabeledDenied = ThentosLabeled thentosDenied

(=%%) :: (ToCNF a, ToCNF b) => a -> b -> ThentosLabel
(=%%) a b = ThentosLabel $ a %% b
infix 6 =%%

data TLMode = TLRead | TLReadWrite
  deriving (Eq, Ord, Show, Enum, Bounded)


-- * convenience

-- | Create a new thread that calls `createCheckpoint` synchronously,
-- then waits for @timeThreshold@ miliseconds, then repeats.
--
-- FIXME: If @sizeThreshold@ is `Just` a size, create checkpoint only
-- if the number of change log entries since the last checkpoint is
-- larger than that size.  (I think this is only possible inside
-- acid-state.)
createCheckpointLoop :: AcidState st -> Int -> Maybe Int -> IO ThreadId
createCheckpointLoop _ _ (Just _) = error "createCheckpointLoop: sizeThreshold not implemented."
createCheckpointLoop acidState timeThreshold Nothing = forkIO . forever $ do
      threadDelay $ timeThreshold * 1000

      -- when (isJust sizeThreshold) . assert False $
      --   print "createCheckpointLoop: sizeThreshold handling not implemented."

      createCheckpoint acidState
