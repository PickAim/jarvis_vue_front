import type {CalcRequestData, CalcRequestInfoData} from "@/types/CalcRequestsTypes";
import type {ResponseData} from "@/types/Objects";
import type SavableRequestActions from "@/requests/request-actions/SavableRequestActions";

export interface ISavableRequestStoreActions<Q, R>{
    calculate(request: Q, id?: CalcRequestInfoData['id']): Promise<ResponseData<R>>,

    saveRequest(calcRequest: CalcRequestData<Q, R>): Promise<ResponseData<CalcRequestData<Q, R>>>,
    deleteRequest(id: CalcRequestInfoData['id']): Promise<ResponseData<void>>,
    getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined,
    getAll(): CalcRequestData<Q, R>[],
    loadAll(): Promise<ResponseData<CalcRequestData<Q, R>[]>>
}

export interface ISavableRequestStoreStates<Q, R>{
    actions: SavableRequestActions<Q, R>,
    requests: CalcRequestData<Q, R>[]
}