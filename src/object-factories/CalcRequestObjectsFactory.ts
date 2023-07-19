import type {
    NicheRequestData,
    NicheResultData
} from "@/types/CalculateRequestsTypes";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyRequestData} from "@/types/DataTypes";

export class CalcRequestObjectsFactory{
    static createUnitEconRequestData(object?: UnitEconomyRequestData): UnitEconomyRequestData{
        return object ?
            Object.assign({}, object) :
            {
                buy: NaN,
                niche: "",
                pack: NaN,
                market_place_transit_price: NaN,
                transit_count: NaN,
                transit_price: NaN,
                warehouse_name: "",
                marketplace_id: 1,
                category: ""
            }
    }

    static createUnitEconResultData(object?: UnitEconomyResultData): UnitEconomyResultData{
        return object ?
            Object.assign({}, object) :
            {
                logistic_price: -1,
                margin: -1,
                marketplace_commission: -1,
                pack_cost: -1,
                product_cost: -1,
                recommended_price: -1,
                roi: -1,
                storage_price: -1,
                transit_margin: -1,
                transit_profit: -1
            }
    }

    static createNicheRequestData(object?: NicheRequestData): NicheRequestData{
        return object ?
            Object.assign({}, object) :
            {
                a: NaN
            }
    }

    static createNicheResultData(object?: NicheResultData): NicheResultData{
        return object ?
            Object.assign({}, object) :
            {
                a: NaN
            }
    }
}