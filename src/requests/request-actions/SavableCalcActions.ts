import type {
    ISavableCalcActions, ISavableCalcRequestActions, ISavableCalcStore
} from "@/requests/request-actions/interfaces/ISavableCalc";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import {ResultCode} from "@/types/ResultCode";
import {
    DummySavableCalcRequestActions
} from "@/requests/request-actions/SavableCalcRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {NicheRequestData, NicheResultData, UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";

export class SavableCalcActions<Q, R> implements ISavableCalcActions<Q, R>{
    requestActions: ISavableCalcRequestActions<Q, R>

    constructor(baseRequestURL: string, private calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore){
        this.requestActions = new DummySavableCalcRequestActions(baseRequestURL, authStore);
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        const response = await this.requestActions.calculate(request);
        if (response.code !== ResultCode.OK || response.result === undefined)
            return response;
        return {code: ResultCode.OK};
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.requestActions.deleteRequest(id);
        this.calcStore.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>> {
        const response = await this.requestActions.saveRequest(calcRequest);
        if(response.code === ResultCode.OK && response.result){
            const savedCalcRequestData = {
                request: calcRequest.request,
                result: calcRequest.result,
                info: response.result
            }
            this.calcStore.saveRequest(savedCalcRequestData);
            return {code: response.code, result: savedCalcRequestData};
        }
        return {code: response.code};
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        const response = await this.requestActions.loadAll();
        if(response.code === ResultCode.OK && response.result){
            response.result.forEach(r => this.calcStore.saveRequest(r));
        }
        return response;
    }

    getAll(): CalcRequestData<Q, R>[] {
        return this.calcStore.requests;
    }

    getStore(): ISavableCalcStore<Q, R> {
        return this.calcStore;
    }

    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.calcStore.requests.find((r) => (r.info.id === id));
    }
}

export class UnitEconCalcActions<Q extends UnitEconRequestData, R extends UnitEconResultData>
    extends SavableCalcActions<Q, R>{
    constructor(calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore) {
        super("/unit-econ", calcStore, authStore);
    }
}

export class NicheDistCalcActions<Q extends NicheRequestData, R extends NicheResultData>
    extends SavableCalcActions<Q, R>{
    constructor(calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore) {
        super("/niche-dist", calcStore, authStore);
    }
}