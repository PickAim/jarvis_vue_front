import Requester from "@/requests/requesters/Requester";
import type {
    DownturnRequestData,
    DownturnResultData, NicheCharacteristicsRequestData, NicheCharacteristicsResultData,
    ResponseData,
    TurnoverRequestData,
    TurnoverResultData
} from "@/types/DataTypes";
import {Configs} from "@/Configs";

import type {ICalculateRequester} from "@/types/RequestTypes";

export class CalculateRequester<Q, R> extends Requester
    implements ICalculateRequester<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        return await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/calculate',
            body: request
        });
    }
}

export class DownturnRequester
    extends CalculateRequester<DownturnRequestData, DownturnResultData> {
    constructor() {
        super("/product-downturn");
    }
}

export class TurnoverRequester
    extends CalculateRequester<TurnoverRequestData, TurnoverResultData> {
    constructor() {
        super("/product-turnover");
    }
}

export class NicheCharacteristicsRequester
    extends CalculateRequester<NicheCharacteristicsRequestData, NicheCharacteristicsResultData> {
    constructor() {
        super("/niche-characteristics");
    }
}