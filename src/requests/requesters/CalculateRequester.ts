import Requester from "@/requests/requesters/Requester";
import type {ProductDownturnRequestData, ProductDownturnResultData, ResponseData} from "@/types/DataTypes";
import {Configs} from "@/Configs";

import type {ICalculateRequestActions} from "@/types/CalculateRequestsTypes";

export class CalculateRequester<Q, R> extends Requester
    implements ICalculateRequestActions<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/calculate',
            method: "POST",
            body: request
        });
    }
}

export class ProductDownturnRequester
    extends CalculateRequester<ProductDownturnRequestData, ProductDownturnResultData>{
    constructor() {
        super("/product-downturn");
    }
}

export class ProductTurnoverRequester
    extends CalculateRequester<, >{
    constructor() {
        super("/product-turnover");
    }
}
