import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {ResponseData} from "@/types/Objects";
import {Configs} from "@/Configs";
import {ResultCode} from "@/types/ResultCode";
import type {ISavableCalcRequestActions} from "@/requests/request-actions/interfaces/ISavableCalc";

export class SavableCalcRequestActions<Q, R> extends AbstractRequestActions
    implements ISavableCalcRequestActions<Q, R>{
    constructor(private baseRequestURL: string, authStore: IAuthStore) {
        super(authStore);
    }

    async calculate(request: Q): Promise<ResponseData<R>>{
        // TODO check
        return await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/calculator'
        });
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>["info"]>> {
        // TODO check
        return await this.requestHandler.makeRequest<CalcRequestData<Q, R>["info"]>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/save'
        });
    }

    async deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>> {
        // TODO check
        return await this.requestHandler.makeRequest<void>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/delete'
        });
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
       // TODO check
        return await this.requestHandler.makeRequest<CalcRequestData<Q, R>[]>({
            url: this.baseRequestURL + '/get-all'
        });
    }
}

export class DummySavableCalcRequestActions<Q, R> extends AbstractRequestActions
    implements ISavableCalcRequestActions<Q, R>{
    constructor(private baseRequestURL: string, authStore: IAuthStore) {
        super(authStore);
    }

    async calculate(request: Q): Promise<ResponseData<R>>{
        return new Promise(resolve => {
            setTimeout(() => resolve({
                code: ResultCode.OK}), 500)
        })
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>["info"]>> {
        return new Promise(resolve => {
            setTimeout(() => resolve({
                code: ResultCode.OK,
                result: {id: (Math.random().toFixed(2)).toString(), date: 123, name: calcRequest.info.name}
            }), 500);
        })
    }

    async deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>> {
        return new Promise(resolve => {
            setTimeout(() => resolve({code: ResultCode.OK}), 500)
        })
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        return new Promise(resolve => {
            setTimeout(() => resolve({code: ResultCode.OK}), 500)
        })
    }
}