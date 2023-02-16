import {ResponseType} from "axios";

export enum ResultCodes{
    OK ,
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
}

export abstract class AbstractData{

}

export interface RequestData extends AbstractData{
    readonly url: string;
    readonly method?: "POST" | "GET";
    readonly body?: object | AbstractData;
    readonly responseType?: ResponseType;


    /*constructor(url: string, method: "POST" | "GET" = "GET", body: object = {}, responseType: ResponseType = "json") {
        super();
        this.body = {...body};
        this.method = method;
        this.url = url;
        this.responseType = responseType;
    }*/
}

export interface ResponseData<K> extends AbstractData{
    code: ResultCodes;
    result?: K;
    error?: JarvisException
}

export interface JarvisException{
    readonly jarvis_exception?: number,
    readonly description: string
}

export interface TokenData extends AbstractData{
    readonly access_token: string;
    readonly update_token: string;
    readonly imprint_token?: string;


    /*constructor(accessToken = "", updateToken = "", imprnumber?: string) {
        super();
        this.access_token = accessToken;
        this.update_token = updateToken;
        this.imprint_token = imprnumber;
    }*/
}

export interface LoginData extends AbstractData{
    readonly login: string;
    readonly password: string;


    /*constructor(login: string, password: string) {
        super();
        this.login = login;
        this.password = password;
    }*/
}

export interface RegData extends AbstractData{
    readonly email: string;
    readonly phone: string;
    readonly password: string;


    /*constructor(email: string, phone: string, password: string) {
        super();
        this.email = email;
        this.phone = phone;
        this.password = password;
    }*/
}

export interface ActiveSessionData extends AbstractData{
    readonly imprint: string;
    readonly device_type: string;
    readonly device_name: string;
    readonly login_date: number;


    /*constructor(imprint = "", deviceType = "", deviceName = "", loginDate = 0) {
        super();
        this.imprint = imprint;
        this.device_type = deviceType;
        this.device_name = deviceName;
        this.login_date = loginDate;
    }*/
}

export interface UNITCalcRequestData extends AbstractData{
    readonly buy: number;
    readonly pack: number;
    readonly niche: string;
    readonly transit_count?: number;
    readonly transit_price?: number;
    readonly market_place_transit_price?: number;
    readonly warehouse_name?: string;


    /*constructor(buy: number, pack: number, niche: string, transit_count?: number, transit_price?: number, market_place_transit_price?: number, warehouse_name?: string) {
        super();
        this.buy = buy;
        this.pack = pack;
        this.niche = niche;
        this.transit_count = transit_count;
        this.transit_price = transit_price;
        this.market_place_transit_price = market_place_transit_price;
        this.warehouse_name = warehouse_name;
    }*/
}

export interface UNITCalcResponseData extends AbstractData{
    readonly Pcost?: number  // Закупочная себестоимость
    readonly Pack?: number  // Упаковка
    readonly Mcomm?: number // Комиссия маркетплейса
    readonly Log?: number // Логистика
    readonly Store?: number // Хранение
    readonly Margin?: number // Маржа в копейках
    readonly TProfit?: number // Чистая прибыль с транзита
    readonly ROI?: number // ROI
    readonly TMargin?: number // Маржа с транзита (%)


    /*constructor(Pcost?: number, Pack?: number, Mcomm?: number, Log?: number, Store?: number, Margin?: number, TProfit?: number, ROI?: number, TMargin?: number) {
        super();
        this.Pcost = Pcost;
        this.Pack = Pack;
        this.Mcomm = Mcomm;
        this.Log = Log;
        this.Store = Store;
        this.Margin = Margin;
        this.TProfit = TProfit;
        this.ROI = ROI;
        this.TMargin = TMargin;
    }*/
}

export interface UserData extends AbstractData{
    readonly phone?: string;
    readonly reg_date?: number;
    readonly name?: string;


    /*constructor(phone?: string, reg_date?: number, name?: string) {
        super();
        this.phone = phone;
        this.reg_date = reg_date;
        this.name = name;
    }*/
}

export interface SellerAPIKeysData extends AbstractData{
    readonly standard_API_key?: string;
    readonly statistic_API_key?: string;
    readonly advertise_API_key?: string;


    /*constructor(StandardAPIKey?: string, StatisticAPIKey?: string, AdvertiseAPIKey?: string) {
        super();
        this.standard_API_key = StandardAPIKey;
        this.statistic_API_key = StatisticAPIKey;
        this.advertise_API_key = AdvertiseAPIKey;
    }*/
}

export interface SubscribeData extends AbstractData{
    grant_type?: number;
    pay_api_key?: string;


    /*constructor(grant_type?: number, pay_api_key?: number) {
        super();
        this.grant_type = grant_type;
        this.pay_api_key = pay_api_key;
    }*/
}