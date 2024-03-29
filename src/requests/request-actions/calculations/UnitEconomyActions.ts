import {SavableCalculateActions} from "@/requests/request-actions/calculations/SavableCalculateActions";
import type {SimpleUnitEconomyResultData, TransitUnitEconomyResultData} from "@/types/DataTypes";
import type {TransitUnitEconomyRequestData} from "@/types/DataTypes";
import {convertMoneyToPennie, convertMoneyToRoubles} from "@/requests/request-actions/utils";
import type {SimpleUnitEconomyRequestData} from "@/types/DataTypes";
import {SimpleUnitEconomyRequester, TransitUnitEconomyRequester} from "@/requests/requesters/SavableCalculateRequester";
import {useSimpleUnitEconCalcStore, useTransitUnitEconCalcStore} from "@/stores/CalcStores";

export class SimpleUnitEconomyActions<Q extends SimpleUnitEconomyRequestData, R extends SimpleUnitEconomyResultData>
    extends SavableCalculateActions<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData> {

    static requestMoneyKeys: (keyof SimpleUnitEconomyRequestData)[] =
        ["product_exist_cost", "cost_price"];
    static resultMoneyKeys: (keyof SimpleUnitEconomyResultData[0])[] =
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
        convertMoneyToRoubles(result[0], SimpleUnitEconomyActions.resultMoneyKeys);
        convertMoneyToRoubles(result[1], SimpleUnitEconomyActions.resultMoneyKeys);
        return result;
    }
}

export class TransitUnitEconomyActions<Q extends TransitUnitEconomyRequestData, R extends TransitUnitEconomyResultData>
    extends SavableCalculateActions<TransitUnitEconomyRequestData, TransitUnitEconomyResultData> {

    static requestMoneyKeys: (keyof TransitUnitEconomyRequestData)[] =
        [...SimpleUnitEconomyActions.requestMoneyKeys, "logistic_price"];
    static resultMoneyKeys: (keyof TransitUnitEconomyResultData[0])[] =
        [...SimpleUnitEconomyActions.resultMoneyKeys, "purchase_investments", "commercial_expanses", "tax_expanses",
            "absolute_transit_margin"];

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
        convertMoneyToRoubles(result[0], TransitUnitEconomyActions.resultMoneyKeys);
        convertMoneyToRoubles(result[1], TransitUnitEconomyActions.resultMoneyKeys);
        return result;
    }
}
