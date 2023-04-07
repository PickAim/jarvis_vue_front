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
    readonly buy: number;
    readonly pack: number;
    readonly niche: string;
    readonly transit_count?: number;
    readonly transit_price?: number;
    readonly market_place_transit_price?: number;
    readonly warehouse_name?: string;
}

export interface UnitEconResultData extends AbstractData{
    readonly product_cost?: [number, number];  // Закупочная себестоимость
    readonly pack_cost?: [number, number];  // Упаковка
    readonly marketplace_commission?: [number, number]; // Комиссия маркетплейса
    readonly logistic_price?: [number, number]; // Логистика
    readonly storage_price?: [number, number]; // Хранение
    readonly margin?: [number, number]; // Маржа в копейках
    readonly transit_price?: [number, number]; // Чистая прибыль с транзита
    readonly roi?: [number, number]; // ROI
    readonly transit_margin?: [number, number]; // Маржа с транзита (%)
    readonly recommended_price: number; // Рекомендованная стоимость
}

export interface NicheRequestData {
    a: number;
}

export interface NicheResultData {
    a: number;
}