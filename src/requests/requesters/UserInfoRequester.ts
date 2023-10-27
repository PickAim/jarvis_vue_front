import Requester from "@/requests/requesters/Requester";
import type {IUserInfoRequester} from "@/types/RequestTypes";
import type {ResponseData} from "@/types/DataTypes";
import {Configs} from "@/Configs";
import type {AllProductsResultData} from "@/types/DataTypes";

export class UserInfoRequester<Q, R> extends Requester implements IUserInfoRequester<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async getUserInfo(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            uri: Configs.AccessRequestPrefix + this.baseRequestURL + "/",
            body: request
        });
    }
}

export class AllProductsRequester extends UserInfoRequester<undefined, AllProductsResultData> {
    constructor() {
        super("/get-all-user-products");
    }
}

export class AllMarketplaceProductsRequester extends UserInfoRequester<undefined, AllProductsResultData> {
    constructor() {
        super("/get-all-in-marketplace-user-products");
    }
}
