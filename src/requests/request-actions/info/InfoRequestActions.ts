import type {IInfoActions, IInfoRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import type {
    AllCategoriesRequestData,
    AllMarketplacesRequestData,
    AllNichesRequestData,
    ResponseData
} from "@/types/DataTypes";
import type {AllCategoriesResultData, AllMarketplacesResultData, AllNichesResultData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
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

    async infoRequest(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.infoRequest(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        }
        return response;
    }
}

export class AllCategoriesActions extends InfoRequestActions<AllCategoriesRequestData, AllCategoriesResultData> {
    protected prepareRequestData(request: AllCategoriesRequestData): AllCategoriesRequestData {
        request.is_allow_defaults = request.is_allow_defaults ?? true;
        return super.prepareRequestData(request);
    }

    constructor() {
        super(new AllCategoriesRequester());
    }
}

export class AllMarketplacesActions extends InfoRequestActions<AllMarketplacesRequestData, AllMarketplacesResultData> {
    protected prepareRequestData(request: AllMarketplacesRequestData): AllMarketplacesRequestData {
        request.is_allow_defaults = request.is_allow_defaults ?? true;
        return super.prepareRequestData(request);
    }

    constructor() {
        super(new AllMarketplacesRequester());
    }
}

export class AllNichesActions extends InfoRequestActions<AllNichesRequestData, AllNichesResultData> {
    protected prepareRequestData(request: AllNichesRequestData): AllNichesRequestData {
        request.is_allow_defaults = request.is_allow_defaults ?? true;
        return super.prepareRequestData(request);
    }

    constructor() {
        super(new AllNichesRequester());
    }
}