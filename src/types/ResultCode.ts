export enum ResultCode {
    OK,
    CONNECTION_ERROR,
    CONFIGURATION_ERROR,
    FAIL,

    // authorization exceptions
    INCORRECT_LOGIN_OR_PASSWORD = 4012,

    // password correctness exceptions
    LESS_THAN_8 = 4013,
    NOT_HAS_LOWER_LETTERS = 4014,
    NOT_HAS_UPPER_LETTERS = 4015,
    NOT_HAS_DIGIT = 4016,
    NOT_HAS_SPECIAL_SIGNS = 4017,
    HAS_WHITE_SPACES = 4018,

    // registration exceptions
    REGISTER_EXISTING_LOGIN = 4019,

    // token exceptions
    INCORRECT_TOKEN = 5001,
    EXPIRED_TOKEN = 5002,

    // input error
    INCORRECT_INPUT = 1101,
}
