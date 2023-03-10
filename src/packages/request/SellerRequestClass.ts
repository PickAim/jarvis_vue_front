import AbstractRequest from "@/packages/request/AbstractRequest";
import type {ResponseData, SellerAPIKeysData} from "@/Objects";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";

export default class SellerRequestClass extends AbstractRequest{
    constructor(authStore: IAuthStore) {
        super(authStore);
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
