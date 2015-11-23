/* global exports */
"use strict";

// module Mula
exports.tr = function(key) {
    return table[lang][key];
};

var lang = "en";

var table = {};

table.en = {
    "TR__ACTIVATION_CLOSE_THIS_TAB_AND_PROCEED": "Thank you for your registration. Your account has been activated. You can now close this tab and go back to {{siteName}}.",
    "TR__ACTIVATION_ERROR_1": "We will send you a new authentification link within the next 24h. Please check your mail and SPAM meanwhile.",
    "TR__ACTIVATION_ERROR_2": "Please excuse the inconvience and make sure you activate your account within the next 6 days.",
    "TR__ACTIVATION_ERROR_3": "Thanks!",
    "TR__ACTIVATION_ERROR_SUPPORT": "To request a new link, please contact our support team, explicitly stating the email address you registered with, via",
    "TR__ACTIVATION_ERROR_TITLE": "Oops, error!",
    "TR__ACTIVATION_SUCCESS_TITLE": "Your account has been activated!",
    "TR__ADD_PARAGRAPH": "add paragraph",
    "TR__BACK_TO_TOP": "back to top",
    "TR__BADGE_ASSIGNMENT_UPDATED": "Badge assignments updated.",
    "TR__BADGE_MANAGEMENT_HELP": "Chose a badge for editing or create a new one.",
    "TR__BY": "by",
    "TR__CANCEL": "cancel",
    "TR__CHOOSE_BADGE": "Choose a badge",
    "TR__CLOSE": "close",
    "TR__COMMENTS": "comments",
    "TR__COMMENTS_TOTAL": "Total Comments",
    "TR__COMMENT_EMPTY_TEXT": "No comments yet.",
    "TR__CONTENT": "content",
    "TR__COUNTRY": "country",
    "TR__CREATE": "create",
    "TR__CREATE_DOCUMENT": "create document",
    "TR__CREATE_PASSWORD_RESET_PROCEED": "Your password has been set successfully. You have been redirected. Proceed back to [[link:{{siteName}}]] to continue participating.",
    "TR__CREATE_PASSWORD_RESET_SUCCESS": "Thank you for your password reset request. We will send you a link to reset your password within the next 24h. Please check your mail and SPAM meanwhile.",
    "TR__CREATE_PASSWORD_RESET_TITLE": "Reset Password",
    "TR__CREATION_DATE": "date",
    "TR__DELETE": "delete",
    "TR__DOCUMENT_EMPTY_TEXT": "No documents yet.",
    "TR__EDIT": "edit",
    "TR__EDITED": "edited",
    "TR__EMAIL": "email",
    "TR__EMAIL_OR_USERNAME": "email or username",
    "TR__ERROR_FORMAT_EMAIL": "Email format is incorrect.",
    "TR__ERROR_HTTP_BAD_REQUEST": "Bad Request",
    "TR__ERROR_HTTP_FORBIDDEN": "Forbidden",
    "TR__ERROR_HTTP_GONE": "Gone",
    "TR__ERROR_HTTP_NOT_FOUND": "Not Found",
    "TR__ERROR_INVALID_DATE": "Please enter a valid date (yyyy-mm-dd).",
    "TR__ERROR_INVALID_URL": "Please enter a valid URL (starting with https:// or http://)",
    "TR__ERROR_MATCH_PASSWORD": "Passwords do not match.",
    "TR__ERROR_MIN_NUMBER_0": "Please insert a number higher than 0",
    "TR__ERROR_MUST_BE_A_NUMBER": "Value must be a number",
    "TR__ERROR_REQUIRED_BADGE": "Please choose a badge",
    "TR__ERROR_REQUIRED_CHECKBOXES": "Please select one",
    "TR__ERROR_REQUIRED_COUNTRY": "Please select a country",
    "TR__ERROR_REQUIRED_DESCRIPTION": "Please enter a description",
    "TR__ERROR_REQUIRED_EMAIL": "Email is required.",
    "TR__ERROR_REQUIRED_EMAIL_OR_USERNAME": "Email or username is required.",
    "TR__ERROR_REQUIRED_FIRSTNAME": "Please enter your first name",
    "TR__ERROR_REQUIRED_IMAGE": "Image is required",
    "TR__ERROR_REQUIRED_LASTNAME": "Please enter your last name",
    "TR__ERROR_REQUIRED_MESSAGE": "Please enter a message",
    "TR__ERROR_REQUIRED_NEW_PASSWORD": "New Password is required.",
    "TR__ERROR_REQUIRED_PARAGRAPH": "Please enter some text.",
    "TR__ERROR_REQUIRED_PASSWORD": "Password is required.",
    "TR__ERROR_REQUIRED_RADIO": "Please select one",
    "TR__ERROR_REQUIRED_SUBJECT": "Please enter a subject",
    "TR__ERROR_REQUIRED_TERMS_AND_CONDITIONS": "You must agree to terms and conditions",
    "TR__ERROR_REQUIRED_TEXT": "Please enter some text",
    "TR__ERROR_REQUIRED_TITLE": "Please enter a title",
    "TR__ERROR_REQUIRED_USERNAME": "Username is required",
    "TR__ERROR_TOO_BIG_IMAGE": "Image must be smaller than {{maximumByteSize / 1000000}}MB.",
    "TR__ERROR_TOO_NARROW_IMAGE": "Image must be greater than {{minimumWidth}}px wide.",
    "TR__ERROR_TOO_SHORT_PASSWORD": "Password is too short.",
    "TR__ERROR_TYPE_IMAGE": "Image must be of type {{acceptedFileTypes | join}}.",
    "TR__FILTERS": "filters",
    "TR__FIRSTNAME": "first name",
    "TR__FORGOTTEN_PASSWORD": "forgotten password?",
    "TR__GUEST": "guest",
    "TR__IMAGE_CHANGE": "Change image",
    "TR__IMAGE_CHOOSE": "Choose image",
    "TR__IMAGE_CURRENT": "Current image",
    "TR__IMAGE_SELECTED": "Selected image",
    "TR__IMAGE_UPLOAD": "Upload image",
    "TR__I_ACCEPT_THE_TERMS_AND_CONDITIONS": "I accept the [[link:terms and conditions]].",
    "TR__LASTNAME": "last name",
    "TR__LIST": "list",
    "TR__LOAD_MORE": "load more",
    "TR__LOGIN": "login",
    "TR__LOGIN_SUPPORT": "Having trouble with login?",
    "TR__LOGOUT": "logout",
    "TR__MANAGE_BADGE_ASSIGNMENTS": "badges",
    "TR__MAP": "map",
    "TR__MAP_COORDINATES_CLEAR": "remove pin",
    "TR__MAP_COORDINATES_RESET": "undo",
    "TR__MAP_EXPLAIN_CLICK": "Click on map to set a location",
    "TR__MAP_EXPLAIN_DRAG": "Drag the pin to set a correct location",
    "TR__MAP_EXPLAIN_RESET": "The previous location was restored.",
    "TR__MAP_MARKER_ERROR": "Please set marker inside of the marked area",
    "TR__MAP_NO_ITEMS_IN_VIEW": "No item located in this section. Move back to standard view.",
    "TR__MAP_RESET": "Move back to standard view.",
    "TR__MAX_CHARS_100": "100 characters max.",
    "TR__MAX_CHARS_1000": "1000 characters max.",
    "TR__MAX_CHARS_300": "300 characters max.",
    "TR__MAX_CHARS_500": "500 characters max.",
    "TR__MAX_CHARS_800": "800 characters max.",
    "TR__MESSAGE_SEND": "send",
    "TR__MESSAGE_STATUS_OK": "Message was sent",
    "TR__MESSAGE_TO": "Message to",
    "TR__MESSAGING": "Write Message",
    "TR__NEWSLETTER": "newsletter",
    "TR__NEW_BADGE": "Add new",
    "TR__NEW_PASSWORD": "New Password",
    "TR__NEXT": "next",
    "TR__NO": "no",
    "TR__ON": "on",
    "TR__ONLINE": "online",
    "TR__OPTIONAL": "optional",
    "TR__OR": "or",
    "TR__OR_REGISTER_HERE": "or register [[link:here]]",
    "TR__OTHER": "other",
    "TR__PARAGRAPH_PLACEHOLDER": "Add text here.",
    "TR__PASSWORD": "password",
    "TR__PASSWORD_REPEAT": "password repeat",
    "TR__PASSWORD_RESET_CLOSE_THIS_TAB_AND_PROCEED": "Your password has been successfully set. You can now close this tab and go back to {{siteName}}.",
    "TR__PASSWORD_RESET_TITLE": "Set new password",
    "TR__PLEASE_SPECIFY": "Please specify",
    "TR__PREVIOUS": "previous",
    "TR__PRINT": "print",
    "TR__PROPOSALS": "proposals",
    "TR__PUBLISH": "submit and publish",
    "TR__RATES": "support",
    "TR__RATE_SUPPORT": "support",
    "TR__RATE_SUPPORTING": "supporting",
    "TR__RATE_UNSUPPORT": "unsupport",
    "TR__RATE_VOTE_DOWN": "vote down",
    "TR__RATE_VOTE_UP": "vote up",
    "TR__REGISTER": "register",
    "TR__REGISTER_SUCCESS": "Thank you for your registration. We sent you an email with an activation link. In case you do not recieve that email, please also check your spam folder.",
    "TR__REGISTRATION_ALREADY_LOGGED_IN": "You are already logged in, you must [[link:logout]] to create a new account.",
    "TR__REGISTRATION_CALL_FOR_ACTIVATION": "Once you have clicked on the activation link you can proceed using {{siteName}}.",
    "TR__REGISTRATION_LOGIN_INSTEAD": "I already have an account. Log in [[link:here]].",
    "TR__REGISTRATION_PROCEED": "Proceed back to [[link:{{siteName}}]].",
    "TR__REGISTRATION_SUPPORT": "Having trouble with the registration?",
    "TR__REGISTRATION_THANKS_FOR_REGISTERING": "Hi, {{userName}}! Thanks for registering with {{siteName}}.",
    "TR__REPLY": "reply",
    "TR__REPORT": "report",
    "TR__REPORT_COMMENT": "Report comment",
    "TR__REPORT_PLACEHOLDER": "Please explain why would you like to report this comment.",
    "TR__REPORT_HELP": "Please only use this form to report violations in [[linkNetiquette:Netiquette]]. To be a normal part of this discussion please [[link:close this overlay]] and use the regular reply functionality.",
    "TR__REPORT_ABUSE_STATUS_OK": "The moderators have been notified.",
    "TR__RESET": "Reset",
    "TR__SAVE": "save",
    "TR__SHARE": "share",
    "TR__SHOWING_LIMIT_TOTAL": "Showing {{currentLimit}}/{{totalCount}}.",
    "TR__SORT_BY": "sort by…",
    "TR__SPACE_CONTENT": "content",
    "TR__SPACE_USER": "user",
    "TR__SUBJECT": "subject",
    "TR__SUBMIT": "submit",
    "TR__SUPPORTERS": "supporters",
    "TR__TITLE_PLACEHOLDER": "Add a title here.",
    "TR__TOTAL_VOTES": "total votes",
    "TR__USERNAME": "username",
    "TR__VIEW_PROFILE": "view profile",
    "TR__VOTES": "votes",
    "TR__WEBSITE": "website",
    "TR__YES": "yes",
    "TR__YOU_VOTED": "You voted:"
};

table.de = {
    "TR__ACTIVATION_CLOSE_THIS_TAB_AND_PROCEED": "Danke für Deine Registrierung. Dein Account ist nun aktiviert. Du kannst diese Seite schließen und zurück gehen zu {{siteName}}.",
    "TR__ACTIVATION_ERROR_1": "Wir werden Dir innerhalb der nächsten 24 Stunden einen neuen Link zur Authentifizierung zusenden. Bitte überprüfe Deine E-Mails und schaue auch im Spam-Ordner nach.",
    "TR__ACTIVATION_ERROR_2": "Bitte entschuldige die Schwierigkeiten und aktiviere Deinen Account innerhalb der nächsten 6 Tage.",
    "TR__ACTIVATION_ERROR_3": "Danke!",
    "TR__ACTIVATION_ERROR_SUPPORT": "Um einen neuen Link zu erhalten, kontaktiere bitte unser Support-Team und gib dabei die E-Mail-Adresse an, mit der Du Dich registrierst hast.",
    "TR__ACTIVATION_ERROR_TITLE": "Hoppla, das ging schief!",
    "TR__ACTIVATION_SUCCESS_TITLE": "Dein Account ist nun aktiv!",
    "TR__ADD_PARAGRAPH": "Absatz hinzufügen",
    "TR__BACK_TO_TOP": "nach oben",
    "TR__BADGE_ASSIGNMENT_UPDATED": "Das Badge wurde aktualisiert.",
    "TR__BADGE_MANAGEMENT_HELP": "Wähle ein Badge, um es zu bearbeiten, oder erstelle ein neues.",
    "TR__BY": "von",
    "TR__CANCEL": "abbrechen",
    "TR__CHOOSE_BADGE": "Wähle ein Badge",
    "TR__CLOSE": "schließen",
    "TR__COMMENTS": "Kommentare",
    "TR__COMMENTS_TOTAL": "Kommentare (gesamt)",
    "TR__COMMENT_EMPTY_TEXT": "Noch keine Kommentare.",
    "TR__CONTENT": "Inhalt",
    "TR__COUNTRY": "Land",
    "TR__CREATE": "erstellen",
    "TR__CREATE_DOCUMENT": "Dokument erstellen",
    "TR__CREATE_PASSWORD_RESET_PROCEED": "Dein Passwort wurde erfolgreich gesetzt. Gehe zurück zu [[link:{{siteName}}]], um weiter zu machen.",
    "TR__CREATE_PASSWORD_RESET_SUCCESS": "Wir haben Deine Anfrage zum Zurücksetzen Deines Passworts erhalten und werden Dir innerhalb der nächsten 24 Stunden einen neuen Link zur Authentifizierung zusenden. Bitte überprüfe Deine E-Mails und schaue auch im Spam-Ordner nach.",
    "TR__CREATE_PASSWORD_RESET_TITLE": "Passwort zurücksetzen",
    "TR__CREATION_DATE": "Datum",
    "TR__DELETE": "löschen",
    "TR__DOCUMENT_EMPTY_TEXT": "Noch keine Dokumente",
    "TR__EDIT": "bearbeiten",
    "TR__EDITED": "bearbeitet",
    "TR__EMAIL": "E-Mail",
    "TR__EMAIL_OR_USERNAME": "E-Mail oder Benutzername",
    "TR__ERROR_FORMAT_EMAIL": "E-Mail-Format ist ungültig.",
    "TR__ERROR_HTTP_BAD_REQUEST": "Fehlerhafte Anfrage",
    "TR__ERROR_HTTP_FORBIDDEN": "Verboten",
    "TR__ERROR_HTTP_GONE": "Nicht mehr hier",
    "TR__ERROR_HTTP_NOT_FOUND": "Nicht gefunden",
    "TR__ERROR_INVALID_DATE": "Bitte ein gültiges Datum (jjjj-mm-tt) eingeben.",
    "TR__ERROR_INVALID_URL": "Bitte eine gültige URL eingeben (fängt mit https:// oder http:// an)",
    "TR__ERROR_MATCH_PASSWORD": "Passwörter stimmen nicht überein",
    "TR__ERROR_MIN_NUMBER_0": "Bitte eine Zahl größer als 0 eingeben.",
    "TR__ERROR_MUST_BE_A_NUMBER": "Wert muss eine Nummer sein",
    "TR__ERROR_REQUIRED_BADGE": "Bitte wähle ein Badge",
    "TR__ERROR_REQUIRED_CHECKBOXES": "Bitte etwas auswählen",
    "TR__ERROR_REQUIRED_COUNTRY": "Bitte ein Land auswählen",
    "TR__ERROR_REQUIRED_DESCRIPTION": "Bitte eine Beschreibung eingeben",
    "TR__ERROR_REQUIRED_EMAIL": "E-Mail erforderlich",
    "TR__ERROR_REQUIRED_EMAIL_OR_USERNAME": "E-Mail oder Nutzername erforderlich",
    "TR__ERROR_REQUIRED_FIRSTNAME": "Bitte Vornamen eingeben",
    "TR__ERROR_REQUIRED_IMAGE": "Bild erforderlich",
    "TR__ERROR_REQUIRED_LASTNAME": "Bitte Nachnamen eingeben",
    "TR__ERROR_REQUIRED_MESSAGE": "Bitte eine Nachricht eingeben",
    "TR__ERROR_REQUIRED_NEW_PASSWORD": "Neues Passwort erforderlich",
    "TR__ERROR_REQUIRED_PARAGRAPH": "Bitte gib etwas ein.",
    "TR__ERROR_REQUIRED_PASSWORD": "Passwort erforderlich",
    "TR__ERROR_REQUIRED_RADIO": "Bitte etwas auswählen",
    "TR__ERROR_REQUIRED_SUBJECT": "Bitte einen Betreff eingeben",
    "TR__ERROR_REQUIRED_TERMS_AND_CONDITIONS": "Bitte stimme den Nutzungsbedingungen zu.",
    "TR__ERROR_REQUIRED_TEXT": "Bitte Text eingeben",
    "TR__ERROR_REQUIRED_TITLE": "Bitte einen Titel eingeben",
    "TR__ERROR_REQUIRED_USERNAME": "Nutzername erforderlich",
    "TR__ERROR_TOO_BIG_IMAGE": "Das Bild muss kleiner als {{maximumByteSize / 1000000}}MB sein.",
    "TR__ERROR_TOO_NARROW_IMAGE": "Das Bild muss breiter als {{minimumWidth}}px sein.",
    "TR__ERROR_TOO_SHORT_PASSWORD": "Das Passwort ist zu kurz.",
    "TR__ERROR_TYPE_IMAGE": "Bild muss vom Typ {{acceptedFileTypes | join}} sein.",
    "TR__FILTERS": "Filter",
    "TR__FIRSTNAME": "Vorname",
    "TR__FORGOTTEN_PASSWORD": "Passwort vergessen?",
    "TR__GUEST": "Gast",
    "TR__IMAGE_CHANGE": "Bild ändern",
    "TR__IMAGE_CHOOSE": "Bild auswählen",
    "TR__IMAGE_CURRENT": "aktuelles Bild",
    "TR__IMAGE_SELECTED": "ausgewähltes Bild",
    "TR__IMAGE_UPLOAD": "Bild hochladen",
    "TR__I_ACCEPT_THE_TERMS_AND_CONDITIONS": "Ich akzeptiere die [[link:Nutzungsbedingungen]].",
    "TR__LASTNAME": "Nachname",
    "TR__LIST": "Liste",
    "TR__LOAD_MORE": "mehr laden",
    "TR__LOGIN": "anmelden",
    "TR__LOGIN_SUPPORT": "Du hast Probleme mit der Anmeldung?",
    "TR__LOGOUT": "abmelden",
    "TR__MANAGE_BADGE_ASSIGNMENTS": "Badges",
    "TR__MAP": "Karte",
    "TR__MAP_COORDINATES_CLEAR": "Pin entfernen",
    "TR__MAP_COORDINATES_RESET": "rückgängig",
    "TR__MAP_EXPLAIN_CLICK": "Klicke auf die Karte, um den Marker zu setzen.",
    "TR__MAP_EXPLAIN_DRAG": "Ziehe den Marker mit der Maus, um die Position verändern",
    "TR__MAP_EXPLAIN_RESET": "Der letzte Ort wurde wiederhergestellt.",
    "TR__MAP_MARKER_ERROR": "Bitte setze den Marker innerhalb des markierten Bereichs",
    "TR__MAP_NO_ITEMS_IN_VIEW": "In diesem Bereich wurde kein Eintrag gefunden. Bitte wechsle zurück zur Standardansicht.",
    "TR__MAP_RESET": "Zurück zur Standardansicht.",
    "TR__MAX_CHARS_100": "max. 100 Zeichen",
    "TR__MAX_CHARS_1000": "max. 1000 Zeichen",
    "TR__MAX_CHARS_300": "max. 300 Zeichen",
    "TR__MAX_CHARS_500": "max. 500 Zeichen",
    "TR__MAX_CHARS_800": "max. 800 Zeichen",
    "TR__MESSAGE_SEND": "senden",
    "TR__MESSAGE_STATUS_OK": "Die Nachricht wurde versendet.",
    "TR__MESSAGE_TO": "Nachricht an",
    "TR__MESSAGING": "Nachricht verfassen",
    "TR__NEWSLETTER": "Newsletter",
    "TR__NEW_BADGE": "Neues hinzufügen",
    "TR__NEW_PASSWORD": "Neues Passwort",
    "TR__NEXT": "weiter",
    "TR__NO": "nein",
    "TR__ON": "am",
    "TR__ONLINE": "online",
    "TR__OPTIONAL": "optional",
    "TR__OR": "oder",
    "TR__OR_REGISTER_HERE": "oder [[link:hier]] registrieren",
    "TR__OTHER": "etwas anderes",
    "TR__PARAGRAPH_PLACEHOLDER": "Hier Text eingeben.",
    "TR__PASSWORD": "Passwort",
    "TR__PASSWORD_REPEAT": "Passwort Wiederholung",
    "TR__PASSWORD_RESET_CLOSE_THIS_TAB_AND_PROCEED": "Dein Passwort wurde erfolgreich gesetzt. Du kannst diese Seite schließen und zurück gehen zu {{siteName}}.",
    "TR__PASSWORD_RESET_TITLE": "Neues Passwort setzen",
    "TR__PLEASE_SPECIFY": "Bitte angeben",
    "TR__PREVIOUS": "zurück",
    "TR__PRINT": "drucken",
    "TR__PROPOSALS": "Vorschläge",
    "TR__PUBLISH": "veröffentlichen",
    "TR__RATES": "Unterstützung",
    "TR__RATE_SUPPORT": "dafür stimmen",
    "TR__RATE_SUPPORTING": "dafür",
    "TR__RATE_UNSUPPORT": "zurückziehen",
    "TR__RATE_VOTE_DOWN": "dagegen",
    "TR__RATE_VOTE_UP": "dafür",
    "TR__REGISTER": "registrieren",
    "TR__REGISTER_SUCCESS": "Danke für Deine Registrierung. Wir haben Dir eine E-Mail mit einem Aktivierungslink gesendet. Falls Du diese E-Mail nicht erhältst, überprüfe bitte auch Deinen Spamordner.",
    "TR__REGISTRATION_ALREADY_LOGGED_IN": "Du bist bereits angemeldet. Bitte gehe auf [[link:logout]] um einen neuen Account anzumelden.",
    "TR__REGISTRATION_CALL_FOR_ACTIVATION": "Sobald Du auf den Aktivierungslink geklickt hast, kannst Du {{siteName}} benutzen.",
    "TR__REGISTRATION_LOGIN_INSTEAD": "Ich habe bereits einen Account. [[link:Hier]] anmelden.",
    "TR__REGISTRATION_PROCEED": "Gehe zurück zu [[link:{{siteName}}]].",
    "TR__REGISTRATION_SUPPORT": "Probleme mit der Registrierung?",
    "TR__REGISTRATION_THANKS_FOR_REGISTERING": "Hi, {{userName}}! Danke für Deine Anmeldung bei {{siteName}}.",
    "TR__REPLY": "antworten",
    "TR__REPORT": "melden",
    "TR__REPORT_COMMENT": "Kommentar melden",
    "TR__REPORT_HELP": "Nutzen Sie dieses Fenster, um Verstöße gegen die [[linkNetiquette:Netiquette]] zu melden. Wenn Sie einem Kommentar inhaltlich widersprechen möchten, [[link:schließen Sie bitte das Overlay]] und benutzen Sie den Antworte-Button.",
    "TR__REPORT_PLACEHOLDER": "Bitte erkläre, wieso du diesen Beitrag melden möchtest.",
    "TR__REPORT_ABUSE_STATUS_OK": "Die Moderator*innen wurden benachrichtigt.",
    "TR__RESET": "Zurücksetzen",
    "TR__SAVE": "speichern",
    "TR__SHARE": "teilen",
    "TR__SHOWING_LIMIT_TOTAL": "Zeige {{currentLimit}}/{{totalCount}} an.",
    "TR__SORT_BY": "sortieren nach…",
    "TR__SPACE_CONTENT": "Inhalt",
    "TR__SPACE_USER": "Nutzer*innen",
    "TR__SUBJECT": "Betreff",
    "TR__SUBMIT": "abschicken",
    "TR__SUPPORTERS": "Befürworter*innen",
    "TR__TITLE_PLACEHOLDER": "Hier einen Titel eingeben.",
    "TR__TOTAL_VOTES": "Anzahl der Stimmen (gesamt)",
    "TR__USERNAME": "Nutzername",
    "TR__VIEW_PROFILE": "Profil anzeigen",
    "TR__VOTES": "Stimmen",
    "TR__WEBSITE": "Webseite",
    "TR__YES": "ja",
    "TR__YOU_VOTED": "Deine Abstimmung:"
};
