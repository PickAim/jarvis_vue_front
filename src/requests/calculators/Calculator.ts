import {ResultCode} from "@/requests/ResultCode";
import type {ICalculateActions} from "@/types/RequestTypes";

export abstract class Calculator<Q, R, TCalculateActions extends ICalculateActions<Q, R> = ICalculateActions<Q, R>> {
    request: Q = {} as Q;
    result: R | undefined;

    protected constructor(public calculateActions: TCalculateActions) {
        this.initDefault();
    }

    abstract initDefault(): void;

    async calculate() {
        this.result = undefined;
        const request: Q | undefined = this.beforeCalculating();
        if (request) {
            const response = await this.calculateActions.calculate(request as Q);
            if (response.code === ResultCode.OK && response.result) {
                this.result = this.afterSuccessfulCalculating(response.result);
            }
        }
    }

    protected beforeCalculating(): Q | undefined {
        // Override it to prepare and validate data
        return this.request;
    }

    protected afterSuccessfulCalculating(result: R | undefined): R | undefined {
        // Override it to prepare and validate data
        return result;
    }
}