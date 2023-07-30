import type {IInfoActions, IInfoRequester} from "@/types/RequestTypes";
import {RequestActions} from "@/requests/request-actions/RequestActions";
import type {ResponseData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import {ErrorHandler} from "@/requests/ErrorHandler";

export class InfoRequestActions<Q, R>
    extends RequestActions<Q, R>
    implements IInfoActions<Q, R> {

    constructor(protected requester: IInfoRequester<Q, R>) {
        super();
    }

    async getInfo(request: Q): Promise<ResponseData<R>> {
        const response = await this.requester.getInfo(this.prepareRequestData(request));
        if (response.code === ResultCode.OK && response.result) {
            return {code: ResultCode.OK, result: this.prepareResultData(response.result)}
        } else {
            ErrorHandler.handle(response.code);
            return response;
        }
    }
}
