import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";

export interface ISavableCalcActions<Q, R>{
    calculate(request: Q): Promise<ResponseData<R>>,
    saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>>,
    deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>>,
    getCalcRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined,
    getAll(): CalcRequestData<Q, R>[],
    getStore(): ISavableCalcStore<Q, R>,
    loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>>
}

export interface ISavableCalcRequestActions<Q, R>{
    calculate(request: Q): Promise<ResponseData<R>>,
    saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>["info"]>>,
    deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>>,
    loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>>
}

export interface ISavableCalcStoreState<Q, R>{
    requests: CalcRequestData<Q, R>[]
}

export interface ISavableCalcStoreActions<Q, R>{
    saveRequest(calcRequest: CalcRequestData<Q, R>): void,
    deleteRequest(id: CalcRequestInfoData["id"]): void,
    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined,
    getRequestIndex(id: CalcRequestInfoData["id"]): number,
    getAll(): CalcRequestData<Q, R>[]
}

export type ISavableCalcStore<Q, R> = ISavableCalcStoreActions<Q, R> & ISavableCalcStoreState<Q, R>
