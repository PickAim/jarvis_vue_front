import type {IInfoActions, IInfoRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import type {ResponseData} from "@/types/DataTypes";
import type {AllCategoriesResultData, AllMarketplacesResultData, AllNichesResultData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import {ErrorHandler} from "@/requests/ErrorHandler";
import {
    AllCategoriesRequester,
    AllMarketplacesRequester,
    AllNichesRequester
} from "@/requests/requesters/InfoRequester";

export class InfoRequestActions<Q, R>
    extends RequestActions<Q, R>
    implements IInfoActions<Q, R> {

    constructor(protected requester: IInfoRequester<Q, R>) {
        super();
    }

    async getInfo(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.getInfo(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        }
        ErrorHandler.handle(response.code);
        return response;
    }
}

export class AllCategoriesActions extends InfoRequestActions<void, AllCategoriesResultData> {
    constructor() {
        super(new AllCategoriesRequester());
    }
}

export class AllMarketplacesActions extends InfoRequestActions<void, AllMarketplacesResultData> {
    constructor() {
        super(new AllMarketplacesRequester());
    }
}

export class AllNichesActions extends InfoRequestActions<void, AllNichesResultData> {
    constructor() {
        super(new AllNichesRequester());
    }
}