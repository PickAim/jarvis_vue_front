import {Calculator} from "@/requests/calculators/Calculator";
import type {
    CalculateRequestData,
    CalculateRequestInfoData,
    ISavableCalculateActions
} from "@/types/CalculateRequestsTypes";
import {ResultCode} from "@/types/ResultCode";
import {ResultDescription} from "@/types/ResultDescription";

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
        return super.afterSuccessfulCalculating(result);
    }

    async deleteRequest(id: CalculateRequestInfoData["id"]) {
        if (this.isBusy) return;
        this.isBusy = true;
        await this.calculateActions.deleteRequest(id);
        this.isBusy = false;
    }

    async loadAll() {
        if (this.isBusy) return;
        this.isBusy = true;
        await this.calculateActions.loadAll();
        this.isBusy = false;
    }

    async saveRequest() {
        if (this.isBusy) return;
        this.isBusy = true;
        if (this.result && this.isRequestChanged) {
            const response = await this.calculateActions.saveRequest({
                request: this.request,
                result: this.result,
                info: this.info
            });
            if (response.code === ResultCode.OK && response.result) {
                this.info = response.result;
            }
        }
        this.isBusy = false;
    }

    getAll(): CalculateRequestData<Q, R>[] {
        return this.calculateActions.getAll();
    }

    getStore() {
        return this.calculateActions.getStore();
    }

    selectCalcRequest(id: CalculateRequestInfoData["id"]): void {
        const request = this.calculateActions.getCalcRequest(id);
        if (request) {
            this.request = request.request;
            this.result = request.result;
            this.info = request.info;
        }
    }

    createNewRequest() {
        this.info.id = undefined;
    }
}