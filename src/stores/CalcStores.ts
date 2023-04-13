import {defineStore} from "pinia";
import type {ISavableCalcStoreActions, ISavableCalcStoreState}
    from "@/requests/request-actions/interfaces/ISavableCalc";
import type {
    CalcRequestData,
    CalcRequestInfoData, NicheRequestData, NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";

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
        getRequest(id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
            return this.requests.find((r) => r.info.id && r.info.id === id);
        },
        saveRequest(calcRequest: CalcRequestData<Q, R>): void {
            if(calcRequest.info.id === undefined) return;
            const ind = this.requests.findIndex((r) => r.info.id && r.info.id === calcRequest.info.id);
            if(ind === -1)
                this.requests.push(calcRequest);
            else
                this.requests[ind] = calcRequest;
        },
        deleteRequest(id: CalcRequestInfoData["id"]): void {
            const ind = this.requests.findIndex((r) => r.info.id && (r.info.id === id));
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
