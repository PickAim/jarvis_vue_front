import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {ResponseData, SellerAPIKeysData} from "@/packages/Entities";

export default class SellerRequestClass extends AbstractRequest{
    constructor(requestHandler: IRequestHandler) {
        super(requestHandler);
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