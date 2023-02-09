import {ResponseType} from "axios";

export enum ResultCodes{
    // TODO: fill exception codes with backend
    OK ,
    CONNECTION_ERROR,
    CONFIGURATION_ERROR,
    FAIL
}

export abstract class AbstractData{
    toObject(){
        const {...object} = this;
        return object;
    }
}

export class RequestData extends AbstractData{
    body: object | AbstractData;
    method: "POST" | "GET";
    url: string;
    responseType: ResponseType;

    constructor(url: string, method: "POST" | "GET" = "GET", body: object = {}, responseType: ResponseType = "json") {
        super();
        this.body = {...body};
        this.method = method;
        this.url = url;
        this.responseType = responseType;
    }
}

export class ResponseData extends AbstractData{
    private code: ResultCodes;
    private result: object;

    constructor(code: ResultCodes, body: object = {}) {
        super();
        this.code = code;
        this.result = body;
    }

    getCode(): ResultCodes{
        return this.code;
    }

    getResult(): string | object{
        return this.result;
    }
}



export class TokenData extends AbstractData{
    accessToken: string;
    updateToken: string;
    imprintToken?: string;


    constructor(accessToken = "", updateToken = "", imprint?: string) {
        super();
        this.accessToken = accessToken;
        this.updateToken = updateToken;
        this.imprintToken = imprint;
    }
}

export class LoginData extends AbstractData{
    login: string;
    password: string;


    constructor(login: string, password: string) {
        super();
        this.login = login;
        this.password = password;
    }
}

export class RegData extends AbstractData{
    email: string;
    phone: string;
    password: string;


    constructor(email: string, phone: string, password: string) {
        super();
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}

export class ActiveSessionData extends AbstractData{
    imprint: string;
    deviceType: string;
    deviceName: string;
    loginDate: number;


    constructor(id = "", deviceType = "", deviceName = "", loginDate = 0) {
        super();
        this.imprint = id;
        this.deviceType = deviceType;
        this.deviceName = deviceName;
        this.loginDate = loginDate;
    }
}

export class UNITCalcInputData extends AbstractData{
    // TODO: fill
    constructor() {
        super();
    }
}

export class UNITCalcOutputData extends AbstractData{
    // TODO: fill
    constructor() {
        super();
    }
}

export class UserData extends AbstractData{
    // TODO: fill
    constructor() {
        super();
    }
}

export class SellerAPIKeysData extends AbstractData{
    StandardAPIKey: string;
    StatisticAPIKey: string;
    AdvertiseAPIKey?: string;


    constructor(StandardAPIKey = "", StatisticAPIKey = "", AdvertiseAPIKey = "") {
        super();
        this.StandardAPIKey = StandardAPIKey;
        this.StatisticAPIKey = StatisticAPIKey;
        this.AdvertiseAPIKey = AdvertiseAPIKey;
    }
}

export class SubscribeData extends AbstractData{
    // TODO: fill
    constructor() {
        super();
    }
}