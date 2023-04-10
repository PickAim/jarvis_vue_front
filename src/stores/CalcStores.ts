import {defineStore} from "pinia";
import type {ISavableCalcStoreActions, ISavableCalcStoreState}
    from "@/requests/request-actions/interfaces/ISavableCalc";
import type {
    CalcRequestData,
    CalcRequestInfoData, NicheRequestData, NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";

function Actions<Q, R>(): ISavableCalcStoreActions<Q, R> {
    return {
        requests: [],
        getAll(this: ISavableCalcStoreState<Q, R>): CalcRequestData<Q, R>[] {
            return this.requests;
        },
        getRequest(this: ISavableCalcStoreState<Q, R>, id: CalcRequestInfoData["id"]): CalcRequestData<Q, R> | undefined {
            return this.requests[0];
        },
        saveRequest(this: ISavableCalcStoreState<Q, R>, calcRequest: CalcRequestData<Q, R>): void {
            if(calcRequest.info.id === undefined) return;
            const ind = this.requests.findIndex((r) => r.info.id && r.info.id === calcRequest.info.id);
            if(ind === -1)
                this.requests.push(calcRequest);
            else
                this.requests[ind] = calcRequest;
        },
        deleteRequest(this: ISavableCalcStoreState<Q, R>, id: CalcRequestInfoData["id"]): void {
            const ind = this.requests.findIndex((r) => r.info.id && r.info.id === id);
            if(ind !== -1)
                this.requests.splice(ind, 1);
        }
    }
}

function State<Q, R>(): () => ISavableCalcStoreState<Q, R>{
    return () => ({
        requests: []
    })
}

export const useUnitEconCalcStore = defineStore<"unitEconCalcStore",
    ISavableCalcStoreState<UnitEconRequestData, UnitEconResultData>, {},
    ISavableCalcStoreActions<UnitEconRequestData, UnitEconResultData>>("unitEconCalcStore", {
    state: State(),
    actions: Actions()
});

export const useNicheDistCalcStore = defineStore<"nicheDistCalcStore",
    ISavableCalcStoreState<NicheRequestData, NicheResultData>, {},
    ISavableCalcStoreActions<UnitEconRequestData, UnitEconRequestData>>("nicheDistCalcStore", {
    state: State(),
    actions: Actions()
});
