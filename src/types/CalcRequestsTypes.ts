export enum CalcRequestType {
    unitEcon = 0,
    niche = 1
}

export interface CalcRequestData<Q, R>{
    request: Q;
    result: R;
    info: CalcRequestInfoData;
}

export interface CalcRequestInfoData {
    id?: string;
    name: string;
    date: number;
}

export interface UnitEconRequestData {
    a: number;
}

export interface UnitEconResultData {
    a: number;
}

export interface NicheRequestData {
    a: number;
}

export interface NicheResultData {
    a: number;
}