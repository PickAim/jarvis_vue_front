import type {ResponseType} from "axios";
import type {ResultCode} from "@/requests/ResultCode";

export interface RequestData {
    url: string;
    method?: "POST" | "GET";
    body?: any;
    responseType?: ResponseType;
}

export interface ResponseData<K> {
    code: ResultCode;
    result?: K;
    error?: JarvisException
}

export interface JarvisException {
    jarvis_exception?: number,
    description: string
}

export interface TokenData {
    access_token: string;
    update_token: string;
    imprint_token?: string;
}

export interface LoginData {
    login: string;
    password: string;
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

export interface NicheRequestData {
    niche: string;
    category_id: number;
    marketplace_id: number;
}

export class UnitEconomyRequestData implements NicheRequestData {
    buy = NaN; // Need
    pack = NaN; // Need
    niche = ""; // Need
    category_id = 0; // Need
    marketplace_id = 2;
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

export type NicheDistRequestData = NicheRequestData;

export interface NicheDistResultData {
    x: number[];
    y: number[];
}

export interface DownturnRequestData {
    // TODO: Rename after server realization
    product_ids?: number[];
}

export type DownturnResultData =
    { [productGlobalID: number]: { [warehouseID: number]: { [productType: string]: number } } };

export interface TurnoverRequestData {
    // TODO: Rename after server realization
    product_ids?: number[];
}

export type TurnoverResultData =
    { [productGlobalID: number]: { [warehouseID: number]: { [productType: string]: number } } };

export type NicheCharacteristicsRequestData = NicheRequestData;

export interface NicheCharacteristicsResultData {
    card_count: number;
    niche_profit: number;
    card_trade_count: number;
    mean_card_rating: number;
    card_with_trades_count: number;
    daily_mean_niche_profit: number;
    daily_mean_trade_count: number;
    mean_traded_card_cost: number;
    month_mean_niche_profit_per_card: number;
    monopoly_percent: number;
    maximum_profit_idx: number;
}

export type AllMarketplacesResultData = { [marketplaceID: number]: string }

export type AllNichesResultData = { [nicheID: number]: string }

export type AllCategoriesResultData = { [categoryID: number]: string }

export type ResultProductData = {
    global_id: number;
    name: string;
    category: string;
    niche: string;
    cost: number;
    rating: number;
    seller: string;
    brand: string;
}

export type ProductData = ResultProductData &
    {
        productID: string,
        marketplaceID: string
    }

export type AllProductsResultData = { [marketplaceID: string]: { [productID: string]: ResultProductData } }

export type GreenZoneRequestData = {
    category_id: number,
    niche: string,
    marketplace_id: number
}

export type GreenZoneResultData = {
    green: {
        segments: [number, number][],
        best_segment_idx: number,
        segment_profits: number[],
        best_segment_profit_idx: number,
        mean_segment_profit: number[],
        best_mean_segment_profit_idx: number,
        mean_product_profit: number[],
        best_mean_product_profit_idx: number,
        segment_product_count: number[],
        best_segment_product_count_idx: number,
        segment_product_with_trades_count: number[],
        best_segment_product_with_trades_count_idx: number,
    },
    freq: {
        x: number[],
        y: number[]
    }
}

export type OptionsType = { name: string, value: string };
