import type {IUserInfoActions, IUserInfoRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import type {ResponseData} from "@/types/DataTypes";
import type {AllProductsResultData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import {ErrorHandler} from "@/requests/ErrorHandler";
import {AllMarketplaceProductsRequester, AllProductsRequester} from "@/requests/requesters/UserInfoRequester";
import {convertMoneyToRoubles} from "@/requests/request-actions/utils";

export class UserInfoRequestActions<Q, R>
    extends RequestActions<Q, R>
    implements IUserInfoActions<Q, R> {

    constructor(protected requester: IUserInfoRequester<Q, R>) {
        super();
    }

    async getUserInfo(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.getUserInfo(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        }
        ErrorHandler.handle(response.code);
        return response;
    }
}

export class AllProductsActions extends UserInfoRequestActions<void, AllProductsResultData> {
    protected prepareResultData(result: AllProductsResultData): AllProductsResultData {
        Object.keys(result).forEach(marketplace => {
            Object.keys(result[marketplace]).forEach(product => {
                convertMoneyToRoubles(result[marketplace][product], ["cost"]);
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
