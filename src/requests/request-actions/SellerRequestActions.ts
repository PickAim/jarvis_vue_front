import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type {ResponseData, SellerAPIKeysData} from "@/types/Objects";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default class SellerRequestActions extends AbstractRequestActions{
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
