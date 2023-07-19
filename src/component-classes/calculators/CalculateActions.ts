import type {ResponseData} from "@/types/DataTypes";
import {ResultCode} from "@/types/ResultCode";
import type {ICalculateActions, ICalculateRequestActions} from "@/types/CalculateRequestsTypes";

export class CalculateActions<Q,R, TRequester extends ICalculateRequestActions<Q, R> = ICalculateRequestActions<Q, R>>
    implements ICalculateActions<Q, R>{
    constructor(protected requester: TRequester) {}

    async calculate(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.calculate(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result)
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        return response;
    }

    prepareRequestData(request: Q): Q {
        return request;
    }

    prepareResultData(result: R): R {
        return result;
    }
}