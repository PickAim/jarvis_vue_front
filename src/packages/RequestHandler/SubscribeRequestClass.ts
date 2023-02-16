import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {ResponseData, ResultCodes, SubscribeData} from "@/packages/Entities";

export default class SubscribeRequestClass extends AbstractRequest{
    constructor(requestHandler: IRequestHandler) {
        super(requestHandler);
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
        if (response.code == ResultCodes.OK){
            const obj = Object.assign(new SubscribeData(), response.result);
            response = new ResponseData(response.code, obj);
        }*/
        return {code: ResultCodes.OK, result: {grant_type: 1, pay_api_key: "123123"}};
    }
}