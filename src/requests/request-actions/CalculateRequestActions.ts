import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type {ResponseData} from "@/types/DataTypes";
import {Configs} from "@/Configs";

import type {ICalculateRequestActions} from "@/types/CalculateRequestsTypes";

export class CalculateRequestActions<Q, R> extends AbstractRequestActions
    implements ICalculateRequestActions<Q, R> {
    constructor(protected baseRequestURL: string) {
        super();
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        // TODO check
        return await this.requestHandler.makeRequest<R>({
            url: Configs.AccessRequestPrefix + this.baseRequestURL + '/calculate',
            method: "POST",
            body: request
        });
    }
}