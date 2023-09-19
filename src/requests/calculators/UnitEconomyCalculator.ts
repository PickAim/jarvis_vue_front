import type {
    CalculateRequestInfoData
} from "@/types/RequestTypes";
import {
    SimpleUnitEconomyActions,
    TransitUnitEconomyActions
} from "@/requests/request-actions/calculations/UnitEconomyActions";
import {SavableCalculator} from "@/requests/calculators/SavableCalculator";
import {checkAndConvert, removeKeys} from "@/requests/calculators/utils";
import type {SimpleUnitEconomyResultData, TransitUnitEconomyResultData} from "@/types/DataTypes";
import {SimpleUnitEconomyRequestData, TransitUnitEconomyRequestData} from "@/types/DataTypes";
import {useNotificationsStore} from "@/stores/notificationsStore";

type RequestType = TransitUnitEconomyRequestData | SimpleUnitEconomyRequestData;
type ResultType = TransitUnitEconomyResultData | SimpleUnitEconomyResultData;

export class UnitEconomyCalculator extends SavableCalculator<RequestType, ResultType> {
    isTransitOn = false;

    private requestTransitKeys: (keyof TransitUnitEconomyRequestData)[] = ["transit_price", "transit_count"];
    private resultTransitKeys: (keyof TransitUnitEconomyResultData)[] = ["purchase_investments", "commercial_expanses",
        "tax_expanses", "absolute_transit_margin", "relative_transit_margin", "transit_roi"];

    constructor() {
        super(new SimpleUnitEconomyActions(), "Запрос UNIT экономики");
    }

    initDefault(): void {
        this.request = new TransitUnitEconomyRequestData();
    }

    setSimpleCalculateActions() {
        this.calculateActions = new SimpleUnitEconomyActions();
    }

    setTransitCalculateActions() {
        this.calculateActions = new TransitUnitEconomyActions();
    }

    beforeCalculating() {
        const pattern = new TransitUnitEconomyRequestData();
        if (!this.isTransitOn) {
            this.setSimpleCalculateActions();
            removeKeys(pattern, this.requestTransitKeys);
        } else {
            this.setTransitCalculateActions();
        }
        const requestOrKey = checkAndConvert(pattern, this.request);
        if (typeof requestOrKey === "string") {
            useNotificationsStore().addErrorNotification(["Ошибка", `Ошибка в поле ${requestOrKey}`]);
            // TODO: add error key handling
        } else {
            return requestOrKey;
        }
    }

    afterSuccessfulCalculating(result: ResultType) {
        if (!this.isTransitOn)
            removeKeys(result as TransitUnitEconomyResultData, this.resultTransitKeys);
        return super.afterSuccessfulCalculating(result);
    }

    selectCalcRequest(id: CalculateRequestInfoData["id"]): void {
        super.selectCalcRequest(id);
        if (this.request) {
            this.isTransitOn = "transit_price" in this.request;
        }
    }
}