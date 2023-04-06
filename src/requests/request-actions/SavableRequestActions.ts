import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {ResponseData} from "@/types/Objects";
import {Configs} from "@/Configs";

export default class SavableRequestActions <Q, R extends object> extends AbstractRequestActions{
    constructor(private baseRequestURL: string, authStore: IAuthStore) {
        super(authStore);
    }

    async calculate(request: Q): Promise<ResponseData<R>>{
        // TODO check
        const res = await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/calculator'
        });
        return res;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<R>> {
        // TODO check
        const res = await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/save'
        });
        return res;
    }

    async deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<R>> {
        // TODO check
        const res = await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/delete'
        });
        return res;
    }

    async getAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
       // TODO check
        const res = await this.requestHandler.makeRequest<CalcRequestData<Q, R>[]>({
            url: this.baseRequestURL + '/get-all'
        });
        return res;
    }
}
