import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import { ResultCode } from "@/packages/ResultCode";
export default class SubscribeRequestClass extends AbstractRequest {
    constructor() {
        super();
    }
    async getCurrentSubscribe() {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
    async changeSubscribe(type) {
        // TODO: think about pay mechanism
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
    async closeSubscribe() {
        // TODO: think about pay mechanism
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
    async openSubscribe(type) {
        // TODO: think about pay mechanism
        // make some things with subscribe and get key
        /*const request = new RequestData("", "POST", subscribeData);
        let response = await this.requestHandler.makeRequest(request);
        if (response.code == ResultCode.OK){
            const obj = Object.assign(new SubscribeData(), response.result);
            response = new ResponseData(response.code, obj);
        }*/
        return { code: ResultCode.OK, result: { grant_type: 1, pay_api_key: "123123" } };
    }
}
