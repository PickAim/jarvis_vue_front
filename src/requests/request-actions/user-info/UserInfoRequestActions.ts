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
    AllProductsRequester, UpdateUsersProductsRequester
} from "@/requests/requesters/UserInfoRequester";
import {convertMoneyToRoubles} from "@/requests/request-actions/utils";
import {ErrorHandler} from "@/requests/ErrorHandler";

export class UserInfoRequestActions<Q, R>
    extends RequestActions<Q, R>
    implements IUserInfoActions<Q, R> {

    constructor(protected requester: IUserInfoRequester<Q, R>) {
        super();
    }

    async userInfoRequest(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.userInfoRequest(this.prepareRequestData(request));
        ErrorHandler.handle(response.code);
        if (response.code === ResultCode.OK) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result as R)}
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

export class AddMarketplaceApiKeyActions extends UserInfoRequestActions<AddMarketplaceApiKeyRequestData, void> {
    constructor() {
        super(new AddMarketplaceApiKeyRequester());
    }

    protected prepareResultData(): void {
        this.notificator.addSuccessNotification(["Успех", "API ключ успешно добавлен"]);
    }
}

export class UpdateUsersProductsActions extends UserInfoRequestActions<void, void> {
    constructor() {
        super(new UpdateUsersProductsRequester());
    }
}
