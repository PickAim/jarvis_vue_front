import type {ResponseType} from "axios";
import type {ResultCode} from "@/types/ResultCode";

export interface RequestData {
    readonly url: string;
    readonly method?: "POST" | "GET";
    readonly body?: any;
    readonly responseType?: ResponseType;
}

export interface ResponseData<K> {
    code: ResultCode;
    result?: K;
    error?: JarvisException
}

export interface JarvisException{
    readonly jarvis_exception?: number,
    readonly description: string
}

export interface TokenData {
    readonly access_token: string;
    readonly update_token: string;
    readonly imprint_token?: string;
}

export interface LoginData {
    readonly login: string;
    readonly password: string;
}

export interface RegData {
    readonly email: string;
    readonly phone: string;
    readonly password: string;
}

export interface ActiveSessionData {
    readonly imprint: string;
    readonly device_type: string;
    readonly device_name: string;
    readonly login_date: number;
}

export interface UserData {
    readonly phone?: string;
    readonly reg_date?: number;
    readonly name?: string;
}

export interface SellerAPIKeysData {
    readonly standard_API_key?: string;
    readonly statistic_API_key?: string;
    readonly advertise_API_key?: string;
}

export interface SubscribeData {
    grant_type?: number;
    pay_api_key?: string;
}

export class UnitEconomyRequestData {
    buy = NaN; // Need
    pack = NaN; // Need
    niche = ""; // Need
    category = ""; // Need
    marketplace_id = 0;
    transit_count? = NaN;
    transit_price? = NaN;
    market_place_transit_price? = NaN;
    warehouse_name? = "";
}

export interface UnitEconomyResultData {
    product_cost?: number;  // Закупочная себестоимость
    pack_cost?: number;  // Упаковка
    marketplace_commission?: number; // Комиссия маркетплейса
    logistic_price?: number; // Логистика
    storage_price?: number; // Хранение
    margin?: number; // Маржа в копейках
    recommended_price: number; // Рекомендованная стоимость
    transit_profit?: number; // Чистая прибыль с транзита
    roi?: number; // ROI
    transit_margin?: number; // Маржа с транзита (%)
}

export interface NicheDistRequestData {
    a: number;
}

export interface NicheDistResultData {
    a: number;
}