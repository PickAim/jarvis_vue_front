import {useOverlayStateStore} from "@/stores/overlayStore";
import {useUnitEconCalcStore} from "@/stores/CalcStores";
import type {
    CalcRequestData,
    CalcRequestInfoData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import {UnitEconCalcActions} from "@/requests/request-actions/CalcActions";
import {useAuthStore} from "@/stores/authStore";
import {ResultCode} from "@/types/ResultCode";

export class WorkspaceSectionUnitEconActions{
    overlayState;
    actions;
    // TODO: add response postprocessing with notifications

    constructor() {
        this.overlayState = useOverlayStateStore();
        this.actions = new UnitEconCalcActions(useUnitEconCalcStore(), useAuthStore());
    }

    async calculate(request: { [ind in keyof UnitEconRequestData]: string }): Promise<ResponseData<UnitEconResultData>> {
        console.log("WORK");
        const transformedRequest = this.convertToInt(request);
        console.log(transformedRequest);
        if(transformedRequest === undefined) return {code: ResultCode.INCORRECT_INPUT}
        // TODO: uncomment request and change return
        //const response = await this.actions.calculate(transformedRequest);
        return {code: ResultCode.OK};
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.actions.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<UnitEconRequestData, UnitEconResultData>): Promise<ResponseData<CalcRequestData<UnitEconRequestData, UnitEconResultData>>> {
        const response = await this.actions.saveRequest(calcRequest);
        return response;
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<UnitEconRequestData, UnitEconResultData>[]>> {
        const response = await this.actions.loadAll();
        return response;
    }

    getAll(): CalcRequestData<UnitEconRequestData, UnitEconResultData>[] {
        return this.actions.getAll();
    }

    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<UnitEconRequestData, UnitEconResultData> | undefined {
        return this.actions.getRequest(id);
    }

    convertToInt(request: { [ind in keyof UnitEconRequestData]: string }): UnitEconRequestData | undefined {
        const transformedRequest: UnitEconRequestData = {
            buy: 0,
            niche: "",
            pack: 0,
            market_place_transit_price: undefined,
            transit_count: undefined,
            transit_price: undefined,
            warehouse_name: undefined
        }
        let key: keyof UnitEconRequestData;
        for(key in request) {
            if(request[key] === undefined) continue;
            const num = parseInt(request[key] || "");
            if(isNaN(num)) return;
            // @ts-ignore
            transformedRequest[key] = (typeof transformedRequest[key] === "string") ? request[key] : num;
        }
        return transformedRequest;
    }
}