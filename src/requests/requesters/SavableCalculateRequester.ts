import type {
    CalculateRequestData,
    CalculateRequestInfoData, ISavableCalculateRequestActions
} from "@/types/RequestTypes";
import type {
    NicheDistRequestData,
    NicheDistResultData,
    ResponseData,
    SimpleUnitEconomyResultData,
    TransitUnitEconomyResultData
} from "@/types/DataTypes";
import {Configs} from "@/Configs";
import {CalculateRequester} from "@/requests/requesters/CalculateRequester";
import type {TransitUnitEconomyRequestData, SimpleUnitEconomyRequestData} from "@/types/DataTypes";

export class SavableCalculateRequester<Q, R> extends CalculateRequester<Q, R>
    implements ISavableCalculateRequestActions<Q, R> {
    constructor(baseRequestURL: string) {
        super(baseRequestURL);
    }

    async saveRequest(calcRequest: CalculateRequestData<Q, R>): Promise<ResponseData<CalculateRequestData<Q, R>["info"]>> {
        return await this.requestHandler.makeRequest<CalculateRequestData<Q, R>["info"]>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/save',
            body: calcRequest
        });
    }

    async deleteRequest(id: CalculateRequestInfoData['id']): Promise<ResponseData<void>> {
        return await this.requestHandler.makeRequest<void>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/delete',
            body: {request_id: id}
        });
    }

    async loadAll(): Promise<ResponseData<CalculateRequestData<Q, R>[]>> {
        return await this.requestHandler.makeRequest<CalculateRequestData<Q, R>[]>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/get-all'
        });
    }
}

export class SimpleUnitEconomyRequester
    extends SavableCalculateRequester<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData> {
    constructor() {
        super("/simple-unit-econ");
    }
}

export class TransitUnitEconomyRequester
    extends SavableCalculateRequester<TransitUnitEconomyRequestData, TransitUnitEconomyResultData> {
    constructor() {
        super("/transit-unit-econ");
    }
}

export class NicheDistRequester
    extends SavableCalculateRequester<NicheDistRequestData, NicheDistResultData> {
    constructor() {
        super("/niche-frequency");
    }
}
