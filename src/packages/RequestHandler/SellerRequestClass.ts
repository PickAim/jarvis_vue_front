import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type {ResponseData, SellerAPIKeysData} from "@/packages/Objects";

export default class SellerRequestClass extends AbstractRequest{
    constructor() {
        super();
    }

    async getSellerAPIKeys(): Promise<ResponseData<SellerAPIKeysData>>{
        return await this.requestHandler.makeRequest<SellerAPIKeysData>({
            url: "",
            method: "POST"
        });
    }

    async setSellerAPIKeys(sellerAPIKeys: SellerAPIKeysData): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST",
            body: sellerAPIKeys
        });
    }
}
