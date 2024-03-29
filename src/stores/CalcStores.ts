import {defineStore} from "pinia";
import type {
    CalculateRequestData,
    CalculateRequestInfoData, ISavableCalculatorStoreActions, ISavableCalculatorStoreState
} from "@/types/RequestTypes";
import type {
    NicheDistRequestData,
    NicheDistResultData,
    SimpleUnitEconomyResultData,
    TransitUnitEconomyResultData
} from "@/types/DataTypes";
import type {TransitUnitEconomyRequestData, SimpleUnitEconomyRequestData} from "@/types/DataTypes";

const copyObject = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

function State<Q, R>(): ISavableCalculatorStoreState<Q, R> {
    return {
        requests: []
    }
}

function Actions<Q, R>(): ISavableCalculatorStoreActions<Q, R> &
    ThisType<ISavableCalculatorStoreState<Q, R> & ISavableCalculatorStoreActions<Q, R>>{
    return {
        getAll(): CalculateRequestData<Q, R>[] {
            return this.requests;
        },
        getRequestIndex(id: CalculateRequestInfoData["id"]): number {
            return this.requests.findIndex((r) => r.info.id !== undefined && r.info.id === id);
        },
        getRequest(id: CalculateRequestInfoData["id"]): CalculateRequestData<Q, R> | undefined {
            const r = this.requests[this.getRequestIndex(id)]
            return (r ? copyObject(r) : r);
        },
        saveRequest(calcRequest: CalculateRequestData<Q, R>): void {
            if(calcRequest.info.id === undefined) return;
            const ind = this.getRequestIndex(calcRequest.info.id);
            const requestToSave = copyObject(calcRequest);
            if(ind === -1)
                this.requests.push(requestToSave);
            else
                this.requests[ind] = requestToSave;
        },
        deleteRequest(id: CalculateRequestInfoData["id"]): void {
            const ind = this.getRequestIndex(id);
            if(ind !== -1)
                this.requests.splice(ind, 1);
        }
    }
}

export const useSimpleUnitEconCalcStore = defineStore<"unitSimpleEconCalcStore",
    ISavableCalculatorStoreState<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData>, any,
    ISavableCalculatorStoreActions<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData>>("unitSimpleEconCalcStore", {
    state: State,
    actions: Actions()
});

export const useTransitUnitEconCalcStore = defineStore<"unitTransitEconCalcStore",
    ISavableCalculatorStoreState<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>, any,
    ISavableCalculatorStoreActions<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>>("unitTransitEconCalcStore", {
    state: State,
    actions: Actions()
});

export const useNicheDistCalcStore = defineStore<"nicheDistCalcStore",
    ISavableCalculatorStoreState<NicheDistRequestData, NicheDistResultData>, any,
    ISavableCalculatorStoreActions<NicheDistRequestData, NicheDistResultData>>("nicheDistCalcStore", {
    state: State,
    actions: Actions()
});
