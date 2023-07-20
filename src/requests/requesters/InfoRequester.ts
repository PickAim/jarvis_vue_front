import Requester from "@/requests/requesters/Requester";
import type {IInfoRequester} from "@/types/RequestTypes";
import type {ResponseData} from "@/types/DataTypes";

export class InfoRequester<Q, R> extends Requester implements IInfoRequester<Q, R>{
    constructor(protected baseRequestURL: string) {
        super();
    }

    async getInfo(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            url: this.baseRequestURL,
            method: "GET",
            body: request
        });
    }
}

export class AllMarketplacesRequester extends InfoRequester<> {
    constructor() {
        super("/get-all-marketplaces");
    }
}

export class AllCategoriesRequester extends InfoRequester<> {
    constructor() {
        super("/get-all-categories");
    }
}

export class AllNichesRequester extends InfoRequester<> {
    constructor() {
        super("/get-all-niches");
    }
}
