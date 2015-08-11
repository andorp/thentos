{-# LANGUAGE ConstraintKinds   #-}
{-# LANGUAGE FlexibleContexts  #-}
{-# LANGUAGE QuasiQuotes       #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeOperators     #-}

module Thentos.Test.Config
where

import Data.Acid (AcidState)
import Data.Configifier ((:*>)((:*>)), configify, Id(Id), Tagged(Tagged),
                         MaybeO(JustO), Source(YamlString))
import Data.Maybe (fromMaybe)
import Data.String.Conversions (ST)

import Thentos.Types
import Thentos.Config
import Thentos.Action.Core (Ex)
import Thentos (createDefaultUser)

import Thentos.Test.Utils


thentosTestConfig :: IO ThentosConfig
thentosTestConfig = configify [YamlString [strLit|

command: "run"

backend:
    bind_port: 7118
    bind_host: "127.0.0.1"

frontend:
    bind_port: 7119
    bind_host: "127.0.0.1"

smtp:
    sender_name: "Thentos"
    sender_address: "thentos@thentos.org"
    sendmail_path: "/bin/cat"
    sendmail_args: ["-t"]

proxy:
    service_id: "someid"
    endpoint: http://127.0.0.1:6541

default_user:
    name: "god"
    password: "god"
    email: "postmaster@localhost"
    roles: ["roleAdmin", "roleUser", "roleServiceAdmin", "roleUserAdmin"]

user_reg_expiration: "1800"
pw_reset_expiration: "1800"
email_change_expiration: "1800"
gc_interval: 1800

log:
    path: ./log/thentos.log
    level: DEBUG
|]]


godUid :: UserId
godUid = UserId 0

godName :: UserName
godName = "god"

godPass :: UserPass
godPass = "god"

createGod :: (db `Ex` DB) => AcidState db -> IO ()
createGod st = createDefaultUser st
    (Just . Tagged $
          Id (fromUserName godName)
      :*> Id (fromUserPass godPass)
      :*> Id (forceUserEmail "postmaster@localhost")
      :*> JustO (Id [RoleAdmin]) :: Maybe DefaultUserConfig)

-- | Force a Text to be parsed as email address, throwing an error if it fails.
forceUserEmail :: ST -> UserEmail
forceUserEmail t = fromMaybe (error $ "Invalid email address: " ++ show t) $ parseUserEmail t
