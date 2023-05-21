import {defineStore} from "pinia";
import type {
    ISavableCalcStoreActions,
    ISavableCalcStoreState
} from "@/requests/request-actions/interfaces/ISavableCalc";
import type {
    CalcRequestData,
    CalcRequestInfoData,
    NicheRequestData,
    NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";

const copyObject = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

function State<Q, R>(): ISavableCalcStoreState<Q, R>{
    return {
        requests: []
    }
}

function Actions<Q, R>(): ISavableCalcStoreActions<Q, R> &
    ThisType<ISavableCalcStoreState<Q, R> & ISavableCalcStoreActions<Q, R>>{
    return {
        getAll(): CalcRequestData<Q, R>[] {
            return this.requests;
        },
        getRequestIndex(id: CalcRequestInfoData["id"]): number {
            return this.requests.findIndex((r) => r.info.id !== undefined && r.info.id === id);
        },
        getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
            const r = this.requests[this.getRequestIndex(id)]
            return copyObject(r);
        },
        saveRequest(calcRequest: CalcRequestData<Q, R>): void {
            if(calcRequest.info.id === undefined) return;
            const ind = this.getRequestIndex(calcRequest.info.id);
            const requestToSave = copyObject(calcRequest);
            if(ind === -1)
                this.requests.push(requestToSave);
            else
                this.requests[ind] = requestToSave;
        },
        deleteRequest(id: CalcRequestInfoData["id"]): void {
            const ind = this.getRequestIndex(id);
            if(ind !== -1)
                this.requests.splice(ind, 1);
        }
    }
}

export const useUnitEconCalcStore = defineStore<"unitEconCalcStore",
    ISavableCalcStoreState<UnitEconRequestData, UnitEconResultData>, any,
    ISavableCalcStoreActions<UnitEconRequestData, UnitEconResultData>>("unitEconCalcStore", {
    state: State,
    actions: Actions()
});

export const useNicheDistCalcStore = defineStore<"nicheDistCalcStore",
    ISavableCalcStoreState<NicheRequestData, NicheResultData>, any,
    ISavableCalcStoreActions<UnitEconRequestData, UnitEconRequestData>>("nicheDistCalcStore", {
    state: State,
    actions: Actions()
});
