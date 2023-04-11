import type {ResponseData} from "@/types/Objects";
import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {
    ISavableCalcRequestActions,
    ISavableCalcStoreActions
} from "@/requests/request-actions/interfaces/ISavableCalc";
import type {UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import {ResultCode} from "@/types/ResultCode";

export abstract class AbstractWorkspaceSavableCalcActions<Q, R>{
    abstract actions: ISavableCalcRequestActions<Q, R>;

    // TODO: add notifications
    async calculateString(request: { [ind in keyof Q]: string }): Promise<ResponseData<R>> {
        console.log("WORK");
        const transformedRequest = this.convertToInt(request);
        if(transformedRequest === undefined) return {code: ResultCode.INCORRECT_INPUT}
        // TODO: uncomment request and change return
        //const response = await this.actions.calculate(transformedRequest);
        return {code: ResultCode.OK};
    }

    async calculate(request: { [ind in keyof Q]: string }): Promise<ResponseData<R>> {
        console.log("WORK");
        const transformedRequest = this.convertToInt(request);
        if(transformedRequest === undefined) return {code: ResultCode.INCORRECT_INPUT}
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

    private convertToInt(request: { [ind in keyof Q]: string }): Q | undefined {
        const transformedRequest: Q = this.createEmptyRequestObject();
        let key: keyof Q;
        for(key in request) {
            if(request[key] === undefined) continue;
            const num = parseInt(request[key] || "");
            if(isNaN(num)) return;
            // @ts-ignore
            transformedRequest[key] = (typeof transformedRequest[key] === "string") ? request[key] : num;
        }
        return transformedRequest;
    }

    abstract createEmptyRequestObject(): Q;
}