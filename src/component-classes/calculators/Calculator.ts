import {requestMethod} from "@/component-classes/calculators/utils";
import {ResultCode} from "@/types/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import type {ICalculateActions} from "@/types/CalculateRequestsTypes";

export abstract class Calculator<Q, R, TCalculateActions extends ICalculateActions<Q, R> = ICalculateActions<Q, R>> {
    request: Q = {} as Q;
    result: R | undefined;
    isBusy = false;
    notificator;

    protected constructor(public calculateActions: TCalculateActions) {
        this.initDefault();
        this.notificator = useNotificationsStore();
    }

    abstract initDefault(): void;

    @requestMethod
    async calculate() {
        let result: R | undefined = undefined;
        const request: Q | undefined = this.beforeCalculating();
        if (!request) {
            const response = await this.calculateActions.calculate(this.request as Q);
            if (response.code === ResultCode.OK && response.result) {
                result = response.result;
                this.afterSuccessfulCalculating(result);
            } else {
                // TODO: Some error message
            }
        }
    }

    beforeCalculating(): Q | undefined {
        // Override it to prepare and validate data
        return this.request;
    }

    afterSuccessfulCalculating(result: R | undefined): void {
        // Override it to prepare and validate data
        this.result = result;
    }
}