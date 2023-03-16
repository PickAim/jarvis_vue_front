import type {ResponseType} from "axios";
import type {ResultCode} from "@/ResultCode";

export abstract class AbstractData{}

export interface RequestData extends AbstractData{
    readonly url: string;
    readonly method?: "POST" | "GET";
    readonly body?: object | AbstractData;
    readonly responseType?: ResponseType;
}

export interface ResponseData<K> extends AbstractData{
    code: ResultCode;
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
}

export interface LoginData extends AbstractData{
    readonly login: string;
    readonly password: string;
}

export interface RegData extends AbstractData{
    readonly email: string;
    readonly phone: string;
    readonly password: string;
}

export interface ActiveSessionData extends AbstractData{
    readonly imprint: string;
    readonly device_type: string;
    readonly device_name: string;
    readonly login_date: number;
}

export interface UNITCalcRequestData extends AbstractData{
    readonly buy: number;
    readonly pack: number;
    readonly niche: string;
    readonly transit_count?: number;
    readonly transit_price?: number;
    readonly market_place_transit_price?: number;
    readonly warehouse_name?: string;
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
}

export interface UserData extends AbstractData{
    readonly phone?: string;
    readonly reg_date?: number;
    readonly name?: string;
}

export interface SellerAPIKeysData extends AbstractData{
    readonly standard_API_key?: string;
    readonly statistic_API_key?: string;
    readonly advertise_API_key?: string;
}

export interface SubscribeData extends AbstractData{
    grant_type?: number;
    pay_api_key?: string;
}

export type WidgetName = "unitCalcNiche" | "unitCalcResult";
export type OverlayName = "login" | "registration" | "controlPanel" | Partial<WidgetName>;

export type WidgetOptions = {
    index: number,
    targetIndex: number,
    widgetName: WidgetName
}
