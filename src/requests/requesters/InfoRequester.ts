import Requester from "@/requests/requesters/Requester";
import type {ICalculateRequestActions} from "@/types/CalculateRequestsTypes";
import type {ResponseData} from "@/types/DataTypes";
import {Configs} from "@/Configs";

export class InfoRequester<Q, R> extends Requester {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async getInfo(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            url: this.baseRequestURL,
            method: "POST",
            body: request
        });
    }
}

export class AllMarketplacesRequester extends InfoRequester<> {

}

export class AllCategoriesRequester extends InfoRequester<> {

}

export class AllNichesRequester extends InfoRequester<> {

}
