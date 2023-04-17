import type {
    ISavableCalcActions,
    ISavableCalcRequestActions,
    ISavableCalcStore
} from "@/requests/request-actions/interfaces/ISavableCalc";
import type {
    CalcRequestData,
    CalcRequestInfoData,
    NicheRequestData,
    NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import {ResultCode} from "@/types/ResultCode";
import {
    DummySavableCalcRequestActions,
    SavableCalcRequestActions
} from "@/requests/request-actions/SavableCalcRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import {CalcRequestObjectsFactory} from "@/object-factories/CalcRequestObjectsFactory";

export abstract class SavableCalcActions<Q, R> implements ISavableCalcActions<Q, R>{
    requestActions: ISavableCalcRequestActions<Q, R>

    protected constructor(baseRequestURL: string, private calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore){
        // this.requestActions = new DummySavableCalcRequestActions(baseRequestURL, authStore);
        this.requestActions = new SavableCalcRequestActions(baseRequestURL, authStore);
    }

    async calculate(request: Q): Promise<ResponseData<R>> {
        const response = await this.requestActions.calculate(this.convertRequestMoney(request, true))
        if(response.code === ResultCode.OK && response.result)
            return {code: ResultCode.OK, result: this.convertResultMoney(response.result, false)};
        return response;
    }

    async deleteRequest(id: CalcRequestInfoData["id"]): Promise<ResponseData<void>> {
        const response = await this.requestActions.deleteRequest(id);
        this.calcStore.deleteRequest(id);
        return response;
    }

    async saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>> {
        const response = await this.requestActions.saveRequest(calcRequest);
        if(response.code === ResultCode.OK && response.result){
            const savedCalcRequestData = {
                request: calcRequest.request,
                result: calcRequest.result,
                info: response.result
            }
            this.calcStore.saveRequest(savedCalcRequestData);
            return {code: response.code, result: savedCalcRequestData};
        }
        return {code: response.code};
    }

    async loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>> {
        const response = await this.requestActions.loadAll();
        if(response.code === ResultCode.OK && response.result){
            response.result.forEach(r => {
                this.deleteUndefinedRequestFields(r);
                this.calcStore.saveRequest(r)
            });
        }
        return response;
    }

    getAll(): CalcRequestData<Q, R>[] {
        return this.calcStore.requests;
    }

    getStore(): ISavableCalcStore<Q, R> {
        return this.calcStore;
    }

    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
        return this.calcStore.getRequest(id);
    }

    abstract convertRequestMoney(request: Q, toPennies: boolean): Q;
    abstract convertResultMoney(request: R, toPennies: boolean): R;

    toPennies(a: number): number {
        return Math.floor(a * 100)
    }

    toRoubles(a: number): number {
        return a / 100;
    }

    deleteUndefinedRequestFields(obj: CalcRequestData<Q, R>){
        for(const key in obj.request){
            if(obj.request[key] === -1 || obj.request[key] === "")
                //@ts-ignore
                obj.request[key] = undefined;
        }
    }
}

export class UnitEconCalcActions<Q extends UnitEconRequestData, R extends UnitEconResultData>
    extends SavableCalcActions<Q, R>{
    requestMoneyFields: (keyof Q)[] = ["buy", "market_place_transit_price", "transit_price", "pack"];
    resultMoneyFields: (keyof R)[] = ["margin", "transit_margin", "transit_profit", "logistic_price", "recommended_price",
        "marketplace_commission", "pack_cost", "storage_price", "product_cost", "roi"]

        constructor(calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore) {
        super("/unit-econ", calcStore, authStore);
    }

    convertRequestMoney(request: Q, toPennies: boolean): Q {
        const transformed = CalcRequestObjectsFactory.createUnitEconRequestData(request) as Q;
        let keyQ: keyof Q;
        for (keyQ in transformed) {
            if (typeof (transformed[keyQ]) == "number" && this.requestMoneyFields.includes(keyQ)) {
                transformed[keyQ] = (toPennies ? this.toPennies(transformed[keyQ] as number) :
                    this.toRoubles(transformed[keyQ] as number)) as Q[keyof Q]
            }
        }
        return transformed;
    }

    convertResultMoney(request: R, toPennies: boolean): R {
        const transformed = CalcRequestObjectsFactory.createUnitEconResultData(request) as R;
        let keyR: keyof R;
        for (keyR in transformed) {
            if (typeof (transformed[keyR]) == "number" && this.resultMoneyFields.includes(keyR)) {
                transformed[keyR] = (toPennies ? this.toPennies(transformed[keyR] as number) :
                    this.toRoubles(transformed[keyR] as number)) as R[keyof R]
            }
        }
        return transformed;
    }
}

export class NicheDistCalcActions<Q extends NicheRequestData, R extends NicheResultData>
    extends SavableCalcActions<Q, R>{
    constructor(calcStore: ISavableCalcStore<Q, R>, authStore: IAuthStore) {
        super("/niche-dist", calcStore, authStore);
    }

    convertRequestMoney(request: Q, toPennies: boolean): Q {
        const transformed = CalcRequestObjectsFactory.createNicheRequestData(request) as Q;
        return transformed;
    }

    convertResultMoney(request: R, toPennies: boolean): R {
        const transformed = CalcRequestObjectsFactory.createNicheResultData(request) as R;
        return transformed;
    }
}