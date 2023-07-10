import type {ResponseData} from "@/types/DataTypes";

export type CalculateRequestName = "unitEcon" | "nicheDist";

export interface CalculateRequestData<Q, R> {
    request: Q;
    result: R;
    info: CalculateRequestInfoData;
}

export interface CalculateRequestInfoData {
    id?: string;
    date?: number;
    name: string;
}

// function initData<T extends Record<string, any>>
// (this: T, data: T) {
//     for (const classKey in data) {
//         if (classKey in this && classKey in data) {
//             if(typeof(this[classKey]) === "number") {
//                 const parsed = parseFloat(data[classKey] as string);
//                 if (!isNaN(parsed)) {
//                     (this[classKey] as unknown) = parsed;
//                 }
//             }
//             else if(typeof(this[classKey]) === typeof(data[classKey])) {
//                 this[classKey] = data[classKey];
//             }
//         }
//     }
// }

export interface ICalculateRequestActions<Q, R> {
    calculate(request: Q): Promise<ResponseData<R>>
}

export type ICalculateActions<Q, R> = ICalculateRequestActions<Q, R>;

export interface ISavableCalculateRequestActions<Q, R> extends ICalculateActions<Q, R> {
    saveRequest(calcRequest: CalculateRequestData<Q, R>): Promise<ResponseData<CalculateRequestData<Q, R>["info"]>>,

    deleteRequest(id: CalculateRequestInfoData['id']): Promise<ResponseData<void>>,

    loadAll(): Promise<ResponseData<CalculateRequestData<Q, R>[]>>
}

export interface ISavableCalculateActions<Q, R> extends ISavableCalculateRequestActions<Q, R> {
    getCalcRequest(id: CalculateRequestInfoData["id"]): CalculateRequestData<Q, R> | undefined,

    getAll(): CalculateRequestData<Q, R>[],

    getStore(): ISavableCalculatorStore<Q, R>,
}

export interface ISavableCalculatorStoreState<Q, R> {
    requests: CalculateRequestData<Q, R>[]
}

export interface ISavableCalculatorStoreActions<Q, R> {
    saveRequest(calcRequest: CalculateRequestData<Q, R>): void,

    deleteRequest(id: CalculateRequestInfoData["id"]): void,

    getRequest(id: CalculateRequestInfoData["id"]): CalculateRequestData<Q, R> | undefined,

    getRequestIndex(id: CalculateRequestInfoData["id"]): number,

    getAll(): CalculateRequestData<Q, R>[]
}

export type ISavableCalculatorStore<Q, R> = ISavableCalculatorStoreActions<Q, R> & ISavableCalculatorStoreState<Q, R>