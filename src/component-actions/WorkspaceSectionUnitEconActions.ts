import {useOverlayStateStore} from "@/stores/overlayStore";
import {useUnitEconRequestStore} from "@/stores/CalcRequestStores";
import type {CalcRequestData, CalcRequestInfoData, UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";

export class WorkspaceSectionUnitEconActions{
    overlayState;
    unitEconRequestStore;
    // TODO: add response postprocessing with notifications

    constructor() {
        this.overlayState = useOverlayStateStore();
        this.unitEconRequestStore = useUnitEconRequestStore();
    }

    async calculate(request: UnitEconRequestData, id?: CalcRequestInfoData['id']): Promise<ResponseData<UnitEconResultData>> {
        const response = await this.unitEconRequestStore.calculate(request, id);
        return response;
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.unitEconRequestStore.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<UnitEconRequestData, UnitEconResultData>): Promise<ResponseData<CalcRequestData<UnitEconRequestData, UnitEconResultData>>> {
        const response = await this.unitEconRequestStore.saveRequest(calcRequest);
        return response;
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<UnitEconRequestData, UnitEconResultData>[]>> {
        const response = await this.unitEconRequestStore.loadAll();
        return response;
    }

    getAll(): CalcRequestData<UnitEconRequestData, UnitEconResultData>[] {
        return this.unitEconRequestStore.getAll();
    }

    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<UnitEconRequestData, UnitEconResultData> | undefined {
        return this.unitEconRequestStore.getRequest(id);
    }
}