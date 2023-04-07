import type {
    ISavableRequestStoreActions,
    ISavableRequestStoreStates
} from "@/requests/request-actions/interfaces/ISavableRequestStoreActions";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import type SavableRequestActions from "@/requests/request-actions/SavableRequestActions";
import {ResultCode} from "@/types/ResultCode";

export class SavableRequestStoreClass<Q, R> implements ISavableRequestStoreActions<Q, R>, ISavableRequestStoreStates<Q, R>{
    actions: SavableRequestActions<Q, R>;
    requests: CalcRequestData<Q, R>[] = [];

    constructor(actions: SavableRequestActions<Q, R>){
        this.actions = actions;
    }

    async calculate(request: Q, id?: CalcRequestInfoData['id']): Promise<ResponseData<R>> {
        const response = await this.actions.calculate(request);
        if (response.code !== ResultCode.OK || response.result === undefined)
            return response;
        if(id !== undefined) {
            const calcRequest = this.getRequest(id);
            if(calcRequest) {
                calcRequest.request = request;
                calcRequest.result = response.result;
                await this.saveRequest(calcRequest);
            }
        }
        return response;
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.actions.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>> {
        const response = await this.actions.saveRequest(calcRequest);
        return response;
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        const response = await this.actions.loadAll();
        return response;
    }

    getAll(): CalcRequestData<Q, R>[] {
        return this.requests;
    }

    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.requests.find((r) => (r.info.id === id));
    }
}