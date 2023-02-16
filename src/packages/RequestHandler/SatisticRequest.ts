import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {ResponseData} from "@/packages/Entities";

export default class SubscribeRequestClass extends AbstractRequest{
    constructor(requestHandler: IRequestHandler) {
        super(requestHandler);
    }
    // TODO: add statistic requests
    async getStat(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
}