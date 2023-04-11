import type {
    ISavableCalcRequestActions,
    ISavableCalcStoreActions
} from "@/requests/request-actions/interfaces/ISavableCalc";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import {ResultCode} from "@/types/ResultCode";
import SavableCalcRequestActions from "@/requests/request-actions/SavableCalcRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export class SavableCalcActions<Q, R> implements ISavableCalcRequestActions<Q, R>{
    requestActions: SavableCalcRequestActions<Q, R>

    constructor(baseRequestURL: string, private calcStore: ISavableCalcStoreActions<Q, R>, authStore: IAuthStore){
        this.requestActions = new SavableCalcRequestActions(baseRequestURL, authStore);
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
            this.calcStore.saveRequest(response.result);
        }
        return response;
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

    getStore(): ISavableCalcStoreActions<Q, R> {
        return this.calcStore;
    }

    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.calcStore.requests.find((r) => (r.info.id === id));
    }
}