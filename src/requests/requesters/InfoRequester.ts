import Requester from "@/requests/requesters/Requester";
import type {IInfoRequester} from "@/types/RequestTypes";
import type {AllMarketplacesResultData, ResponseData} from "@/types/DataTypes";
import type {AllCategoriesResultData, AllNichesResultData} from "@/types/DataTypes";

export class InfoRequester<Q, R> extends Requester implements IInfoRequester<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async getInfo(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            url: this.baseRequestURL,
            body: request
        });
    }
}

export class AllMarketplacesRequester extends InfoRequester<undefined, AllMarketplacesResultData> {
    constructor() {
        super("/get-all-marketplaces");
    }
}

export class AllCategoriesRequester extends InfoRequester<undefined, AllCategoriesResultData> {
    constructor() {
        super("/get-all-categories");
    }
}

export class AllNichesRequester extends InfoRequester<undefined, AllNichesResultData> {
    constructor() {
        super("/get-all-niches");
    }
}


