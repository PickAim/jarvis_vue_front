import type {ResponseData} from "@/types/Objects";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {
    ISavableCalcActions
} from "@/requests/request-actions/interfaces/ISavableCalc";
import {ResultCode} from "@/types/ResultCode";
import type {ISavableCalcStore} from "@/requests/request-actions/interfaces/ISavableCalc";

export abstract class AbstractWorkspaceSavableCalcActions<Q, R>{
    abstract actions: ISavableCalcActions<Q, R>;

    // TODO: add notifications
    async calculateString(request: Q): Promise<ResponseData<R>> {
        console.log("WORK");
        const transformedRequest = this.convertToInt(request);
        if(transformedRequest === undefined) return {code: ResultCode.INCORRECT_INPUT}
        return this.calculate(transformedRequest);
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        console.log("WORK");
        // TODO: uncomment request and change return
        //const response = await this.actions.calculate(transformedRequest);
        return {code: ResultCode.OK};
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.actions.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>> {
        const response = await this.actions.saveRequest(calcRequest);
        return response;
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        const response = await this.actions.loadAll();
        return response;
    }

    getAll(): CalcRequestData<Q, R>[] {
        return this.actions.getAll();
    }

    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.actions.getCalcRequest(id);
    }

    getStore(): ISavableCalcStore<Q, R> {
        return this.actions.getStore();
    }

    private convertToInt(request: Q): Q | undefined {
        const transformedRequest: Q = this.createEmptyRequestObject();
        let key: keyof Q;
        for(key in request) {
            if(request[key] === undefined) continue;
            const num = parseInt(request[key] as string || "");
            if(isNaN(num)) return;
            transformedRequest[key] = (typeof transformedRequest[key] === "string") ? request[key] : num as Q[keyof Q];
        }
        return transformedRequest;
    }

    abstract createEmptyRequestObject(): Q;
}