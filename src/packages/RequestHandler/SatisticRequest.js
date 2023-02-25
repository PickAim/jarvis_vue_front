import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
export default class SubscribeRequestClass extends AbstractRequest {
    constructor() {
        super();
    }
    // TODO: add statistic requests
    async getStat() {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
}
