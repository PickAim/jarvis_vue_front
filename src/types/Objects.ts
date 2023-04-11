import type {ResponseType} from "axios";
import type {ResultCode} from "@/types/ResultCode";
import type {CalcRequestName} from "@/types/CalcRequestsTypes";

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

export type WidgetName = CalcRequestName;

export type Widget<O extends WidgetName = WidgetName> = {
    gridIndex: number,
    targetIndex: number,
    widgetName: WidgetName,
    settings?: WidgetOptions[O]
}

export type UnitCalcNicheWidgetOptions = {
    nicheName: string
}

export type UnitCalcResultWidgetOptions = {
    saveResultID: string
}

export type WidgetOptions = {
    unitEcon: UnitCalcNicheWidgetOptions,
    nicheDist: UnitCalcResultWidgetOptions
}

export type OverlayName = "login" | "registration" | "controlPanel" | "widgetAdd" | "widgetSettings" | WidgetName;

export type WidgetSettingsOverlayOptions = {
    index: number
}

export type OverlayOptions =
    {[ind in WidgetName]: WidgetSettingsOverlayOptions} &
    {[ind in Exclude<OverlayName, WidgetName>]: undefined};