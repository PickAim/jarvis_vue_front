import type {
    CalculateRequestData,
    CalculateRequestInfoData, ISavableCalculateRequestActions
} from "@/types/RequestTypes";
import type {NicheDistRequestData, NicheDistResultData, ResponseData, UnitEconomyResultData} from "@/types/DataTypes";
import {Configs} from "@/Configs";
import {CalculateRequester} from "@/requests/requesters/CalculateRequester";
import type {UnitEconomyRequestData} from "@/types/DataTypes";

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

export class UnitEconomyRequestActions
    extends SavableCalculateRequester<UnitEconomyRequestData, UnitEconomyResultData> {
    constructor() {
        super("/unit-econ");
    }
}

export class NicheDistRequestActions
    extends SavableCalculateRequester<NicheDistRequestData, NicheDistResultData> {
    constructor() {
        super("/niche-frequency");
    }
}
