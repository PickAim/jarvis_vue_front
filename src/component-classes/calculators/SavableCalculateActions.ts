import type {ResponseData} from "@/types/DataTypes";
import {ResultCode} from "@/types/ResultCode";
import type {
    CalculateRequestData,
    CalculateRequestInfoData,
    ISavableCalculateActions, ISavableCalculateRequestActions,
    ISavableCalculatorStore
} from "@/types/CalculateRequestsTypes";
import {CalculateActions} from "@/component-classes/calculators/CalculateActions";

export abstract class SavableCalculateActions<Q, R>
    extends CalculateActions<Q, R, ISavableCalculateRequestActions<Q, R>>
    implements ISavableCalculateActions<Q, R> {
    protected constructor(requester: ISavableCalculateRequestActions<Q, R>,
                          private calculateStore: ISavableCalculatorStore<Q, R>) {
        super(requester);
    }

    async deleteRequest(id: CalculateRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.requester.deleteRequest(id);
        this.calculateStore.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalculateRequestData<Q, R>): Promise<ResponseData<CalculateRequestData<Q, R>["info"]>> {
        const response = await this.requester.saveRequest(calcRequest);
        if (response.code === ResultCode.OK && response.result) {
            const savedCalcRequestData = {
                request: calcRequest.request,
                result: calcRequest.result,
                info: response.result
            }
            this.calculateStore.saveRequest(savedCalcRequestData);
            return {code: response.code, result: savedCalcRequestData.info};
        }
        return {code: response.code};
    }

    async loadAll(): Promise<ResponseData<CalculateRequestData<Q, R>[]>> {
        const response = await this.requester.loadAll();
        if (response.code === ResultCode.OK && response.result) {
            response.result.forEach(r => {
                this.calculateStore.saveRequest(r);
            });
        }
        return response;
    }

    getAll(): CalculateRequestData<Q, R>[] {
        return this.calculateStore.requests;
    }

    getStore(): ISavableCalculatorStore<Q, R> {
        return this.calculateStore;
    }

    getCalcRequest(id: CalculateRequestInfoData["id"]): CalculateRequestData<Q, R> | undefined {
        return this.calculateStore.getRequest(id);
    }
}
