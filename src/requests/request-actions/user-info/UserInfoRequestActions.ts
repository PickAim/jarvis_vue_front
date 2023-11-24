import type {IUserInfoActions, IUserInfoRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import type {
    ResponseData,
    AllProductsResultData,
    AllMarketplaceApiKeysResultData,
    AddMarketplaceApiKeyRequestData
} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import {
    AddMarketplaceApiKeyRequester,
    AllMarketplaceApiKeysRequester,
    AllMarketplaceProductsRequester,
    AllProductsRequester
} from "@/requests/requesters/UserInfoRequester";
import {convertMoneyToRoubles} from "@/requests/request-actions/utils";

export class UserInfoRequestActions<Q, R>
    extends RequestActions<Q, R>
    implements IUserInfoActions<Q, R> {

    constructor(protected requester: IUserInfoRequester<Q, R>) {
        super();
    }

    async userInfoRequest(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.userInfoRequest(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        }
        return response;
    }
}

export class AllProductsActions extends UserInfoRequestActions<void, AllProductsResultData> {
    protected prepareResultData(result: AllProductsResultData): AllProductsResultData {
        Object.keys(result).forEach(marketplace => {
            Object.keys(result[Number(marketplace)]).forEach(product => {
                convertMoneyToRoubles(result[Number(marketplace)][product], ["cost"]);
            })
        })
        return super.prepareResultData(result);
    }

    constructor() {
        super(new AllProductsRequester());
    }
}

export class AllMarketplaceProductsActions extends UserInfoRequestActions<void, AllProductsResultData> {
    constructor() {
        super(new AllMarketplaceProductsRequester());
    }
}

export class AllMarketplaceApiKeysActions extends UserInfoRequestActions<void, AllMarketplaceApiKeysResultData> {
    constructor() {
        super(new AllMarketplaceApiKeysRequester());
    }
}

export class AddMarketplaceApiKeyActions extends UserInfoRequestActions<AddMarketplaceApiKeyRequestData, undefined> {
    constructor() {
        super(new AddMarketplaceApiKeyRequester());
    }
}
