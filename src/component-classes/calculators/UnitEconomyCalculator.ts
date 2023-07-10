import type {
    CalculateRequestData,
    CalculateRequestInfoData
} from "@/types/CalculateRequestsTypes";
import {UnitEconomyCalculateActions} from "@/component-classes/calculators/UnitEconomyCalculateActions";
import {SavableCalculator} from "@/component-classes/calculators/SavableCalculator";
import {checkAndConvert} from "@/component-classes/calculators/utils";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyRequestData} from "@/types/DataTypes";

type RequestType = UnitEconomyRequestData;
type ResultType = UnitEconomyResultData;

export class UnitEconomyCalculator extends SavableCalculator<RequestType, ResultType> {
    isWarehouseOn = false;
    isTransitOn = false;

    constructor() {
        super(new UnitEconomyCalculateActions(), "Запрос UNIT экономики");
    }

    initDefault(): void {
        this.request = new UnitEconomyRequestData();
    }

    beforeCalculating() {
        // Check number-parseFloat, string not empty, if flagged values false set it to undefined
        const transitKeys: (keyof RequestType)[] =
            ["market_place_transit_price", "transit_count", "transit_price"];
        const warehouseKeys: (keyof RequestType)[] =
            ["warehouse_name"];
        const pattern = new UnitEconomyRequestData();
        if (!this.isTransitOn) {
            transitKeys.forEach(key => {
                delete pattern[key];
            })
        }
        if (!this.isWarehouseOn) {
            warehouseKeys.forEach(key => {
                delete pattern[key];
            })
        }
        const requestOrKey = checkAndConvert(pattern, this.request);
        if (typeof requestOrKey === "string") {
            console.log(requestOrKey);
        } else {
            return requestOrKey;
        }
    }

    afterSuccessfulCalculating(result: ResultType): void {
        // Override it to prepare and validate data
        const transitKeys: (keyof ResultType)[] =
            ["transit_profit", "transit_margin", "marketplace_commission"];
        const warehouseKeys: (keyof ResultType)[] =
            ["storage_price"];
        if (!this.isTransitOn) {
            transitKeys.forEach(key => {
                delete result[key];
            })
        }
        if (!this.isWarehouseOn) {
            warehouseKeys.forEach(key => {
                delete result[key];
            })
        }
        super.afterSuccessfulCalculating(result);
    }


    selectCalcRequest(id: CalculateRequestInfoData["id"]): CalculateRequestData<RequestType, ResultType> | undefined {
        const request =  super.selectCalcRequest(id);
        if (request) {
            this.isTransitOn = "transit_count" in request.request;
            this.isWarehouseOn = "warehouse_name" in request.request;
        }
        return request;
    }
}