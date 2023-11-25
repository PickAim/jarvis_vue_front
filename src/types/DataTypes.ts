import type {ResponseType} from "axios";
import type {ResultCode} from "@/requests/ResultCode";

export interface RequestData {
    uri: string;
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

export type NicheRequestData = {
    marketplace_id: number;
    niche_id: number;
};

export class SimpleUnitEconomyRequestData implements NicheRequestData {
    // marketplace_id = NaN;
    // category_id = NaN; // Need
    // niche_id = NaN; // Need
    // product_exist_cost = 0;
    // cost_price = NaN;
    // length = NaN;
    // width = NaN;
    // height = NaN;
    // mass = NaN;
    // target_warehouse_id = 2;
    marketplace_id = 2;
    category_id = 2; // Need
    niche_id = 2; // Need
    product_exist_cost = NaN;
    cost_price = NaN;
    length = NaN;
    width = NaN;
    height = NaN;
    mass = NaN;
    target_warehouse_id = 2;
}

export type SimpleUnitEconomyOneResultData = {
    result_cost: number;
    logistic_price: number;
    storage_price: number;
    purchase_cost: number;
    marketplace_expanses: number;
    absolute_margin: number;
    relative_margin: number;
    roi: number;
}

export type SimpleUnitEconomyResultData = [SimpleUnitEconomyOneResultData, SimpleUnitEconomyOneResultData];

export class TransitUnitEconomyRequestData extends SimpleUnitEconomyRequestData {
    logistic_price = NaN;
    logistic_count = NaN;
    transit_cost_for_cubic_meter = NaN;
}

export interface TransitUnitEconomyOneResultData extends SimpleUnitEconomyOneResultData {
    purchase_investments: number;
    commercial_expanses: number;
    tax_expanses: number;
    absolute_transit_margin: number;
    relative_transit_margin: number;
    transit_roi: number;
}

export type TransitUnitEconomyResultData = [TransitUnitEconomyOneResultData, TransitUnitEconomyOneResultData];

export type NicheDistRequestData = NicheRequestData;

export interface NicheDistResultData {
    x: number[];
    y: number[];
}

export type DownturnRequestData = void;

export type DownturnResultData = {
    [marketplaceID: number]: {
        result_dict: {
            [productGlobalID: number]: {
                downturn_info: { [warehouseID: number]: { [productType: string]: { leftover: number, days: number } } }
            }
        }
    }
}

export interface TurnoverRequestData {
    // TODO: Rename after server realization
    product_ids?: number[];
}

export type TurnoverResultData =
    { [productGlobalID: number]: { [warehouseID: number]: { [productType: string]: string } } };

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

export interface AllMarketplacesRequestData {
    is_allow_defaults?: boolean
}

export type AllMarketplacesResultData = { [marketplaceID: number]: string }

export interface AllNichesRequestData {
    category_id: number,
    is_allow_defaults?: boolean
}

export type AllNichesResultData = { [nicheID: number]: string }

export interface AllCategoriesRequestData {
    marketplace_id: number,
    is_allow_defaults?: boolean
}

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
        productID: number,
        marketplaceID: number
    }

export type AllProductsResultData = { [marketplaceID: string]: { [productID: string]: ResultProductData } }

export type GreenZoneRequestData = NicheRequestData;

export type GreenZoneResultData = {
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
}

export type SelectOptionType = { name: string, value: number };
