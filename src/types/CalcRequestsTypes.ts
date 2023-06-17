import type {AbstractData} from "@/types/Objects";

export enum CalcRequestType {
    unitEcon = 0,
    nicheDist = 1
}

export interface CalcRequestDataTypes{
    [CalcRequestType.unitEcon]: UnitEconRequestData
}

export type CalcRequestName = "unitEcon" | "nicheDist";

export interface CalcRequestData<Q, R>{
    request: Q;
    result: R;
    info: CalcRequestInfoData;
}

export interface CalcRequestInfoData {
    id?: string;
    date?: number;
    name: string;
}

export interface UnitEconRequestData extends AbstractData {
    marketplace_id: number;
    niche: string; // Need
    category: string;
    buy: number; // Need
    pack: number; // Need
    transit_count?: number;
    transit_price?: number;
    market_place_transit_price?: number;
    warehouse_name?: string;
}

export interface UnitEconResultData extends AbstractData{
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

export interface NicheRequestData {
    a: number;
}

export interface NicheResultData {
    a: number;
}