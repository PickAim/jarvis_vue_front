import Requester from "@/requests/requesters/Requester";
import type {IInfoRequester} from "@/types/RequestTypes";
import type {
    AllCategoriesRequestData, AllMarketplacesRequestData,
    AllMarketplacesResultData,
    AllNichesRequestData,
    ResponseData
} from "@/types/DataTypes";
import type {AllCategoriesResultData, AllNichesResultData} from "@/types/DataTypes";

export class InfoRequester<Q, R> extends Requester implements IInfoRequester<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async infoRequest(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            uri: this.baseRequestURL + "/",
            body: request
        });
    }
}

export class AllMarketplacesRequester extends InfoRequester<AllMarketplacesRequestData, AllMarketplacesResultData> {
    constructor() {
        super("/get-all-marketplaces");
    }
}

export class AllCategoriesRequester extends InfoRequester<AllCategoriesRequestData, AllCategoriesResultData> {
    constructor() {
        super("/get-all-categories");
    }
}

export class AllNichesRequester extends InfoRequester<AllNichesRequestData, AllNichesResultData> {
    constructor() {
        super("/get-all-niches");
    }
}


