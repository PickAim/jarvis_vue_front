import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";

export interface ISavableCalcRequestActions<Q, R>{
    calculate(request: Q): Promise<ResponseData<R>>,
    saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>>,
    deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>>,
    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined,
    getAll(): CalcRequestData<Q, R>[],
    loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>>
}

export interface ISavableCalcStoreState<Q, R>{
    requests: CalcRequestData<Q, R>[]
}

export interface ISavableCalcStoreActions<Q, R> extends ISavableCalcStoreState<Q, R>{
    saveRequest(this: ISavableCalcStoreState<Q, R>, calcRequest: CalcRequestData<Q, R>): void,
    deleteRequest(this: ISavableCalcStoreState<Q, R>, id: CalcRequestInfoData['id']): void,
    getRequest(this: ISavableCalcStoreState<Q, R>, id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined,
    getAll(this: ISavableCalcStoreState<Q, R>): CalcRequestData<Q, R>[]
}
