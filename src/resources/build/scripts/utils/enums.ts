enum ENamespacesOfSocket {
    NOTE = 'note',
    NOTIFICATION = 'notification',
    ARTICLE = 'article',
}

enum EInitSocketEvents {
    CLIENT_CONNECTED = 'client_connected',
    CONNECT_ERROR = 'connect_error',
}

enum ENotifPagination {
    MAX_NOTIFS_PER_PAGE = 7,
}

enum EEditors {
    NORMAL = 'normal',
    RICH = 'rich',
}

enum EEditorModes {
    VIEW_MODE = 'view-mode',
    EDIT_MODE = 'edit-mode',
}

enum ENotificationTypes {
    SET_PASSWORD = 'password.set',
    REMOVE_PASSWORD = 'password.remove',
}

enum ELocalStorageKeys {
    REALTIME_MODE = 'realtime-mode',
    NOTE_CHANGES_DISPLAY_MODE = 'notify-note-edited-mode',
    EDITING_NOTIFY_STYLE = 'edited-notify-style',
    NIGHT_MODE = 'night-mode',
    NOTE_FORM_TEXT_FONT = 'note-form-text-font',
    NAV_BAR_POS = 'nav-bar-pos',
    CURRENT_NOTE = 'current-note',
    HEIGHT_OF_EDITOR = 'height-of-editor',
    CURRENT_EDITOR = 'current-editor',
}

enum ENoteLengths {
    MAX_LENGTH_NOTE_UNIQUE_NAME = 50,
    MIN_LENGTH_NOTE_UNIQUE_NAME = 1,
    MAX_LENGTH_PASSWORD = 50,
    MIN_LENGTH_PASSWORD = 4,
    MAX_LENGTH_NOTE_CONTENT = 50000,
    MAX_LENGTH_NOTE_HISTORY = 100,
}

enum EError {
    MAX_LENGTH_OF_API_ERROR_MESSAGE = 100,
}

enum EBroadcastTimeouts {
    EDIT_NOTE_TIMEOUT = 7000,
}

enum EArticleChunk {
    SIZE_PER_CHUNK = convertToBytes('3MB'),
}

enum EHttpStatuses {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLYHINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    FAILED_DEPENDENCY = 424,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}

enum EAudioFiles {
    MAX_FILE_SIZE = convertToBytes('10MB'),
    MAX_FILENAME_SIZE = convertToBytes('100B'),
}
