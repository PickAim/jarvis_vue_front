import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import {ResponseData, SubscribeData} from "@/packages/Objects";
import {ResultCode} from "@/packages/ResultCode";

export default class SubscribeRequestClass extends AbstractRequest{
    constructor() {
        super();
    }

    async getCurrentSubscribe(): Promise<ResponseData<SubscribeData>>{
        return await this.requestHandler.makeRequest<SubscribeData>({
            url: "",
            method: "POST"
        });
    }

    async changeSubscribe(type: number): Promise<ResponseData<SubscribeData>>{
        // TODO: think about pay mechanism
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }

    async closeSubscribe(): Promise<ResponseData<object>>{
        // TODO: think about pay mechanism
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }

    async openSubscribe(type: number): Promise<ResponseData<SubscribeData>>{
        // TODO: think about pay mechanism
        // make some things with subscribe and get key
        /*const request = new RequestData("", "POST", subscribeData);
        let response = await this.requestHandler.makeRequest(request);
        if (response.code == ResultCode.OK){
            const obj = Object.assign(new SubscribeData(), response.result);
            response = new ResponseData(response.code, obj);
        }*/
        return {code: ResultCode.OK, result: {grant_type: 1, pay_api_key: "123123"}};
    }
}
