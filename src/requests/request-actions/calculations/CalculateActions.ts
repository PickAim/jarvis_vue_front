import type {ResponseData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import type {ICalculateActions, ICalculateRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import {ErrorHandler} from "@/requests/ErrorHandler";

export class CalculateActions<Q, R, TRequester extends ICalculateRequester<Q, R> = ICalculateRequester<Q, R>>
    extends RequestActions<Q, R>
    implements ICalculateActions<Q, R> {

    constructor(protected requester: TRequester) {
        super();
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.calculate(this.prepareRequestData(request));
        ErrorHandler.handle(response.code);
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        }
        return response;
    }
}