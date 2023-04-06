import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type {ResponseData} from "@/types/Objects";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default class StatisticRequestActions extends AbstractRequestActions{
    constructor(authStore: IAuthStore) {
        super(authStore);
    }

    // TODO: add statistic requests
    async getStat(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
}
