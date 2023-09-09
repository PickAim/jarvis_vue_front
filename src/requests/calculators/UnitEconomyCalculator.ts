import type {
    CalculateRequestInfoData
} from "@/types/RequestTypes";
import {UnitEconomyActions} from "@/requests/request-actions/calculations/UnitEconomyActions";
import {SavableCalculator} from "@/requests/calculators/SavableCalculator";
import {checkAndConvert, removeKeys} from "@/requests/calculators/utils";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyRequestData} from "@/types/DataTypes";
import {useNotificationsStore} from "@/stores/notificationsStore";

type RequestType = UnitEconomyRequestData;
type ResultType = UnitEconomyResultData;

export class UnitEconomyCalculator extends SavableCalculator<RequestType, ResultType> {
    isTransitOn = false;
    isTransitCostOn = false;

    private requestTransitKeys: (keyof RequestType)[] = ["market_place_transit_price", "transit_count", "transit_price"];
    private requestWarehouseKeys: (keyof RequestType)[] = ["warehouse_name"];

    private resultTransitKeys: (keyof ResultType)[] = ["transit_profit", "transit_margin", "marketplace_commission"];
    private resultWarehouseKeys: (keyof ResultType)[] = ["storage_price"];

    constructor() {
        super(new UnitEconomyActions(), "Запрос UNIT экономики");
    }

    initDefault(): void {
        this.request = new UnitEconomyRequestData();
    }

    beforeCalculating() {
        const pattern = new UnitEconomyRequestData();
        if (!this.isTransitCostOn)
            removeKeys(pattern, this.requestTransitKeys);
        if (!this.isTransitOn)
            removeKeys(pattern, this.requestWarehouseKeys);
        const requestOrKey = checkAndConvert(pattern, this.request);
        if (typeof requestOrKey === "string") {
            useNotificationsStore().addErrorNotification(["Ошибка", `Ошибка в поле ${requestOrKey}`]);
            // TODO: add error key handling
        } else {
            return requestOrKey;
        }
    }

    afterSuccessfulCalculating(result: ResultType) {
        if (!this.isTransitCostOn)
            removeKeys(result, this.resultTransitKeys);
        if (!this.isTransitOn)
            removeKeys(result, this.resultWarehouseKeys);
        return super.afterSuccessfulCalculating(result);
    }

    selectCalcRequest(id: CalculateRequestInfoData["id"]): void {
        super.selectCalcRequest(id);
        if (this.request) {
            this.isTransitCostOn = "transit_count" in this.request;
            this.isTransitOn = "warehouse_name" in this.request;
        }
    }
}