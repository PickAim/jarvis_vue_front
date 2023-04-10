import type {AbstractData} from "@/types/Objects";

export enum CalcRequestType {
    unitEcon = 0,
    nicheDist = 1
}

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
    buy: number; // Need
    pack: number; // Need
    niche: string; // Need
    transit_count?: number;
    transit_price?: number;
    market_place_transit_price?: number;
    warehouse_name?: string;
}

export interface UnitEconResultData extends AbstractData{
    product_cost?: [number, number];  // Закупочная себестоимость
    pack_cost?: [number, number];  // Упаковка
    marketplace_commission?: [number, number]; // Комиссия маркетплейса
    logistic_price?: [number, number]; // Логистика
    storage_price?: [number, number]; // Хранение
    margin?: [number, number]; // Маржа в копейках
    transit_price?: [number, number]; // Чистая прибыль с транзита
    roi?: [number, number]; // ROI
    transit_margin?: [number, number]; // Маржа с транзита (%)
    recommended_price: number; // Рекомендованная стоимость
}

export interface NicheRequestData {
    a: number;
}

export interface NicheResultData {
    a: number;
}