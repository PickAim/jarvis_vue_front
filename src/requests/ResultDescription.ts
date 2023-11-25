import {ResultCode} from "@/requests/ResultCode";

export const ResultDescription: { [code in ResultCode]: [string, string] } = {
    [ResultCode.OK]: ["Успех", ""],
    [ResultCode.CONNECTION_ERROR]: ["Ошибка сети", "Не получилось получить ответ от сервера. Возможно, есть проблема с подключением к сети"],
    [ResultCode.CONFIGURATION_ERROR]: ["", ""],
    [ResultCode.FAIL]: ["Ошибка", "Ошибка запроса к серверу"],
    [ResultCode.CANCEL_ERROR]: ["", ""],

    // authorization exceptions
    [ResultCode.INCORRECT_LOGIN_OR_PASSWORD]: ["Неверный логин или пароль", "Попробуйте ввести данные ещё раз"],

    // password correctness exceptions
    [ResultCode.LESS_THAN_8]: ["Некорректный пароль", "Пароль должен иметь минимум 8 символов"],
    [ResultCode.NOT_HAS_LOWER_LETTERS]: ["Некорректный пароль", "Пароль должен иметь прописные буквы"],
    [ResultCode.NOT_HAS_UPPER_LETTERS]: ["Некорректный пароль", "Пароль должен иметь заглавные буквы"],
    [ResultCode.NOT_HAS_DIGIT]: ["Некорректный пароль", "Пароль должен иметь цифры"],
    [ResultCode.NOT_HAS_SPECIAL_SIGNS]: ["Некорректный пароль", "Пароль должен иметь специальные символы"],
    [ResultCode.HAS_WHITE_SPACES]: ["Некорректный пароль", "В пароле не должно быть пробелов и иных пустых символов"],

    // registration exceptions
    [ResultCode.REGISTER_EXISTING_LOGIN]: ["Ошибка регистрации", "Почта или телефон уже заняты"],
    [ResultCode.INVALID_PHONE_NUMBER]: ["Ошибка регистрации", "Некорректный номер телефона"],
    [ResultCode.INVALID_EMAIL]: ["Ошибка регистрации", "Некорректная почта"],

    [ResultCode.INCORRECT_GRANT_TYPE]: ["Ошибка запроса", "Недоступный запрос"],

    [ResultCode.INCORRECT_NICHE]: ["Ошибка запроса", "Некорретная ниша"],

    [ResultCode.TIMEOUT]: ["Ошибка запроса", "Вышел лимит времени"],

    // token exceptions
    [ResultCode.INCORRECT_TOKEN]: ["Ошибка запроса", "Некорретный токен"],
    [ResultCode.EXPIRED_TOKEN]: ["Ошибка запроса", "Срок действия токена истёк"],

    [ResultCode.USER_FUCKS]: ["Ошибка запроса", "API ключ уже сохранён"]
}
