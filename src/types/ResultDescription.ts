import {ResultCode} from "@/types/ResultCode";

export const ResultDescription: {[code in ResultCode]: [string, string]} = {
    [ResultCode.OK]: ["Успех", ""],
    [ResultCode.CONNECTION_ERROR]: ["Ошибка сети", "Не получилось получить ответ от сервера. Возможно, есть проблема с подключением к сети"],
    [ResultCode.CONFIGURATION_ERROR]: ["", ""],
    [ResultCode.FAIL]: ["Ошибка", "Ошибка запроса к серверу"],
    [ResultCode.CANCEL_ERROR]: ["", ""],

    // authorization exceptions
    [ResultCode.INCORRECT_LOGIN_OR_PASSWORD]: ["Неверный логин или пароль", "Попробуйте ввести данные ещё раз"],

    // password correctness exceptions
    [ResultCode.LESS_THAN_8]: ["", ""],
    [ResultCode.NOT_HAS_LOWER_LETTERS]: ["", ""],
    [ResultCode.NOT_HAS_UPPER_LETTERS]: ["", ""],
    [ResultCode.NOT_HAS_DIGIT]: ["", ""],
    [ResultCode.NOT_HAS_SPECIAL_SIGNS]: ["", ""],
    [ResultCode.HAS_WHITE_SPACES]: ["", ""],

    // registration exceptions
    [ResultCode.REGISTER_EXISTING_LOGIN]: ["", ""],

    // token exceptions
    [ResultCode.INCORRECT_TOKEN]: ["", ""],
    [ResultCode.EXPIRED_TOKEN]: ["", ""],

    // input errors
    [ResultCode.INCORRECT_INPUT]: ["Ошибка ввода", "Возможно, вы оставили поле ввода пустым или ввели недопустимые символы"]
}
