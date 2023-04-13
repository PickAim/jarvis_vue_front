import type {
    NicheRequestData,
    NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";

export class CalcRequestObjectsFactory{
    static createUnitEconRequestData(): UnitEconRequestData{
        return {
            buy: NaN,
            niche: "",
            pack: NaN,
            market_place_transit_price: undefined,
            transit_count: undefined,
            transit_price: undefined,
            warehouse_name: undefined
        }
    }

    static createUnitEconResultData(): UnitEconResultData{
        return {
            logistic_price: -1,
            margin: -1,
            marketplace_commission: -1,
            pack_cost: -1,
            product_cost: -1,
            recommended_price: -1,
            roi: -1,
            storage_price: -1,
            transit_margin: -1,
            transit_price: -1
        }
    }

    static createNicheRequestData(): NicheRequestData{
        return {
            a: NaN
        }
    }

    static createNicheResultData(): NicheResultData{
        return {
            a: NaN
        }
    }
}