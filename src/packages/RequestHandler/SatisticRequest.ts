import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type {ResponseData} from "@/packages/Objects";

export default class SubscribeRequestClass extends AbstractRequest{
    constructor() {
        super();
    }
    // TODO: add statistic requests
    async getStat(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
}
