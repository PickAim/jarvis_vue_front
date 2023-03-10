import AbstractRequest from "@/packages/request/AbstractRequest";
import type {ResponseData} from "@/Objects";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";

export default class StatisticRequest extends AbstractRequest{
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
