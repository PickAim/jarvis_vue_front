export var ResultCode;
(function (ResultCode) {
    ResultCode[ResultCode["OK"] = 0] = "OK";
    ResultCode[ResultCode["CONNECTION_ERROR"] = 1] = "CONNECTION_ERROR";
    ResultCode[ResultCode["CONFIGURATION_ERROR"] = 2] = "CONFIGURATION_ERROR";
    ResultCode[ResultCode["FAIL"] = 3] = "FAIL";
    // authorization exceptions
    ResultCode[ResultCode["INCORRECT_LOGIN_OR_PASSWORD"] = 4012] = "INCORRECT_LOGIN_OR_PASSWORD";
    // password correctness exceptions
    ResultCode[ResultCode["LESS_THAN_8"] = 4013] = "LESS_THAN_8";
    ResultCode[ResultCode["NOT_HAS_LOWER_LETTERS"] = 4014] = "NOT_HAS_LOWER_LETTERS";
    ResultCode[ResultCode["NOT_HAS_UPPER_LETTERS"] = 4015] = "NOT_HAS_UPPER_LETTERS";
    ResultCode[ResultCode["NOT_HAS_DIGIT"] = 4016] = "NOT_HAS_DIGIT";
    ResultCode[ResultCode["NOT_HAS_SPECIAL_SIGNS"] = 4017] = "NOT_HAS_SPECIAL_SIGNS";
    ResultCode[ResultCode["HAS_WHITE_SPACES"] = 4018] = "HAS_WHITE_SPACES";
    // registration exceptions
    ResultCode[ResultCode["REGISTER_EXISTING_LOGIN"] = 4019] = "REGISTER_EXISTING_LOGIN";
    // token exceptions
    ResultCode[ResultCode["INCORRECT_TOKEN"] = 5001] = "INCORRECT_TOKEN";
    ResultCode[ResultCode["EXPIRED_TOKEN"] = 5002] = "EXPIRED_TOKEN";
})(ResultCode || (ResultCode = {}));
