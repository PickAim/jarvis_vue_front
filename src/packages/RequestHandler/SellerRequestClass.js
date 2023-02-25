import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
export default class SellerRequestClass extends AbstractRequest {
    constructor() {
        super();
    }
    async getSellerAPIKeys() {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
    async setSellerAPIKeys(sellerAPIKeys) {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST",
            body: sellerAPIKeys
        });
    }
}
