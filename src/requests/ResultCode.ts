export enum ResultCode {
    OK = 0,
    FAIL = 1,
    CONNECTION_ERROR = 2,
    CONFIGURATION_ERROR = 3,
    CANCEL_ERROR = 4,

    // registration exceptions
    REGISTER_EXISTING_LOGIN = 1000,

    // authorization exceptions
    INCORRECT_LOGIN_OR_PASSWORD = 1010,

    // password correctness exceptions
    LESS_THAN_8 = 1020,
    NOT_HAS_LOWER_LETTERS = 1030,
    NOT_HAS_UPPER_LETTERS = 1040,
    NOT_HAS_DIGIT = 1050,
    NOT_HAS_SPECIAL_SIGNS = 1060,
    HAS_WHITE_SPACES = 1070,

    // phone number correctness exceptions
    INVALID_PHONE_NUMBER = 1080,
    INVALID_EMAIL = 1090,

    // token exceptions
    INCORRECT_TOKEN = 2010,
    EXPIRED_TOKEN = 2020,

    INCORRECT_GRANT_TYPE = 3010,

    INCORRECT_NICHE = 4010,

    TIMEOUT = 5040,

    USER_FUCKS = 9090
}
