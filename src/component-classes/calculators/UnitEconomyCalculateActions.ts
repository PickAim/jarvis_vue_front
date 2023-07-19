import {useUnitEconCalcStore} from "@/stores/CalcStores";
import {SavableCalculateActions} from "@/component-classes/calculators/SavableCalculateActions";
import {UnitEconomyRequestActions} from "@/requests/request-actions/SavableCalculateRequestActions";
import {convertMoneyToPennie, convertMoneyToRoubles} from "@/component-classes/calculators/utils";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import type {UnitEconomyRequestData} from "@/types/DataTypes";

export class UnitEconomyCalculateActions<Q extends UnitEconomyRequestData, R extends UnitEconomyResultData>
    extends SavableCalculateActions<UnitEconomyRequestData, UnitEconomyResultData> {
    requestMoneyKeys: (keyof Q)[] = ["buy", "market_place_transit_price", "transit_price", "pack"];
    resultMoneyKeys: (keyof R)[] = ["margin", "transit_margin", "transit_profit", "logistic_price", "recommended_price",
        "marketplace_commission", "pack_cost", "storage_price", "product_cost", "roi"]

    constructor() {
        super(new UnitEconomyRequestActions(), useUnitEconCalcStore());
    }

    prepareRequestData(request: Q): Q {
        // Convert data to server-format (to pennies)
        convertMoneyToPennie(request, this.requestMoneyKeys);
        return request;
    }

    prepareResultData(result: R): R {
        // Convert data to server-format (to roubles)
        convertMoneyToRoubles(result, this.resultMoneyKeys);
        return result;
    }
}
