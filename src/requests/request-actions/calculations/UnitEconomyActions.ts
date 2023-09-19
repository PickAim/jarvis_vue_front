import {SavableCalculateActions} from "@/requests/request-actions/calculations/SavableCalculateActions";
import type {SimpleUnitEconomyResultData, TransitUnitEconomyResultData} from "@/types/DataTypes";
import type {TransitUnitEconomyRequestData} from "@/types/DataTypes";
import {convertMoneyToPennie, convertMoneyToRoubles} from "@/requests/request-actions/calculations/utils";
import type {SimpleUnitEconomyRequestData} from "@/types/DataTypes";
import {SimpleUnitEconomyRequester, TransitUnitEconomyRequester} from "@/requests/requesters/SavableCalculateRequester";
import {useSimpleUnitEconCalcStore, useTransitUnitEconCalcStore} from "@/stores/CalcStores";

export class SimpleUnitEconomyActions<Q extends SimpleUnitEconomyRequestData, R extends SimpleUnitEconomyResultData>
    extends SavableCalculateActions<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData> {

    static requestMoneyKeys: (keyof SimpleUnitEconomyRequestData)[] =
        ["product_exist_cost", "cost_price"];
    static resultMoneyKeys: (keyof SimpleUnitEconomyResultData)[] =
        ["result_cost", "logistic_price", "storage_price", "purchase_cost", "marketplace_expanses", "absolute_margin"];

    constructor() {
        super(new SimpleUnitEconomyRequester(), useSimpleUnitEconCalcStore());
    }

    prepareRequestData(request: Q): Q {
        // Convert data to server-format (to pennies)
        convertMoneyToPennie(request, SimpleUnitEconomyActions.requestMoneyKeys);
        return request;
    }

    prepareResultData(result: R): R {
        // Convert data to server-format (to roubles)
        convertMoneyToRoubles(result, SimpleUnitEconomyActions.resultMoneyKeys);
        return result;
    }
}

export class TransitUnitEconomyActions<Q extends TransitUnitEconomyRequestData, R extends TransitUnitEconomyResultData>
    extends SavableCalculateActions<TransitUnitEconomyRequestData, TransitUnitEconomyResultData> {

    static requestMoneyKeys: (keyof TransitUnitEconomyRequestData)[] =
        [...SimpleUnitEconomyActions.requestMoneyKeys, "transit_count", "transit_price"];
    static resultMoneyKeys: (keyof TransitUnitEconomyResultData)[] =
        [...SimpleUnitEconomyActions.resultMoneyKeys, "purchase_investments", "commercial_expanses", "tax_expanses",
            "absolute_margin"];

    constructor() {
        super(new TransitUnitEconomyRequester(), useTransitUnitEconCalcStore());
    }

    prepareRequestData(request: Q): Q {
        // Convert data to server-format (to pennies)
        convertMoneyToPennie(request, TransitUnitEconomyActions.requestMoneyKeys);
        return request;
    }

    prepareResultData(result: R): R {
        // Convert data to server-format (to roubles)
        convertMoneyToRoubles(result, TransitUnitEconomyActions.resultMoneyKeys);
        return result;
    }
}
