import {Calculator} from "@/component-classes/calculators/Calculator";
import type {CalculateRequestData, CalculateRequestInfoData, ISavableCalculateActions} from "@/types/CalculateRequestsTypes";
import {requestMethod} from "@/component-classes/calculators/utils";
import {ResultCode} from "@/types/ResultCode";

export abstract class SavableCalculator<Q, R> extends Calculator<Q, R, ISavableCalculateActions<Q, R>> {
    isRequestChanged = false;
    info: CalculateRequestInfoData = {name: "Запрос"};

    protected constructor(calculateActions: ISavableCalculateActions<Q, R>,
                          public readonly defaultRequestName: string) {
        super(calculateActions);
        this.info = {name: defaultRequestName};
    }

    afterSuccessfulCalculating(result: R | undefined) {
        this.isRequestChanged = false;
        super.afterSuccessfulCalculating(result);
    }

    @requestMethod
    async deleteRequest(id: CalculateRequestInfoData["id"]) {
        await this.calculateActions.deleteRequest(id);
    }

    @requestMethod
    async loadAll() {
        await this.calculateActions.loadAll();
    }

    @requestMethod
    async saveRequest() {
        if (!this.result || this.isRequestChanged) return;
        const response = await this.calculateActions.saveRequest({
            request: this.request,
            result: this.result,
            info: this.info
        });
        if (response.code !== ResultCode.OK || !response.result) {
            // TODO: make report about network error
        } else {
            this.info = response.result;
        }
    }

    getAll(): CalculateRequestData<Q, R>[] {
        return this.calculateActions.getAll();
    }

    getStore() {
        return this.calculateActions.getStore();
    }

    selectCalcRequest(id: CalculateRequestInfoData["id"]) {
        const request = this.calculateActions.getCalcRequest(id);
        if (request) {
            this.request = request.request;
            this.result = request.result;
            this.info = request.info;
        }
        return request;
    }

    createNewRequest() {
        this.info.id = undefined;
    }
}