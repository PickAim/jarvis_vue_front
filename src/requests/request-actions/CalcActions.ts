import type {
    NicheRequestData,
    NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import {SavableCalcActions} from "@/requests/request-actions/SavableCalcActions";
import type {ISavableCalcStoreActions} from "@/requests/request-actions/interfaces/ISavableCalc";

export class UnitEconCalcActions<Q extends UnitEconRequestData, R extends UnitEconResultData>
    extends SavableCalcActions<Q, R>{
    constructor(calcStore: ISavableCalcStoreActions<Q, R>, authStore: IAuthStore) {
        super("/unit-econ", calcStore, authStore);
    }
}

export class NicheDistCalcActions<Q extends NicheRequestData, R extends NicheResultData>
    extends SavableCalcActions<Q, R>{
    constructor(calcStore: ISavableCalcStoreActions<Q, R>, authStore: IAuthStore) {
        super("/niche-dist", calcStore, authStore);
    }
}
