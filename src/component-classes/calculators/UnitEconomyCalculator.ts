import type {
    CalculateRequestData,
    CalculateRequestInfoData
} from "@/types/CalculateRequestsTypes";
import {UnitEconomyCalculateActions} from "@/component-classes/calculators/UnitEconomyCalculateActions";
import {SavableCalculator} from "@/component-classes/calculators/SavableCalculator";
import {checkAndConvert, removeKeys} from "@/component-classes/calculators/utils";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyRequestData} from "@/types/DataTypes";

type RequestType = UnitEconomyRequestData;
type ResultType = UnitEconomyResultData;

export class UnitEconomyCalculator extends SavableCalculator<RequestType, ResultType> {
    isWarehouseOn = false;
    isTransitOn = false;

    requestTransitKeys: (keyof RequestType)[] = ["market_place_transit_price", "transit_count", "transit_price"];
    requestWarehouseKeys: (keyof RequestType)[] = ["warehouse_name"];

    resultTransitKeys: (keyof ResultType)[] = ["transit_profit", "transit_margin", "marketplace_commission"];
    resultWarehouseKeys: (keyof ResultType)[] = ["storage_price"];

    constructor() {
        super(new UnitEconomyCalculateActions(), "Запрос UNIT экономики");
    }

    initDefault(): void {
        this.request = new UnitEconomyRequestData();
    }

    beforeCalculating() {
        const pattern = new UnitEconomyRequestData();
        if (!this.isTransitOn)
            removeKeys(pattern, this.requestTransitKeys);
        if (!this.isWarehouseOn)
            removeKeys(pattern, this.requestWarehouseKeys);
        console.log("STEP 1", pattern);
        const requestOrKey = checkAndConvert(pattern, this.request);
        if (typeof requestOrKey === "string") {
            console.log(requestOrKey);
        } else {
            return requestOrKey;
        }
    }

    afterSuccessfulCalculating(result: ResultType) {
        if (!this.isTransitOn)
            removeKeys(result, this.resultTransitKeys);
        if (!this.isWarehouseOn)
            removeKeys(result, this.resultWarehouseKeys);
        return super.afterSuccessfulCalculating(result);
    }

    selectCalcRequest(id: CalculateRequestInfoData["id"]): void {
        super.selectCalcRequest(id);
        if (this.request) {
            this.isTransitOn = "transit_count" in this.request;
            this.isWarehouseOn = "warehouse_name" in this.request;
        }
    }
}