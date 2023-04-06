import SavableRequestActions from "@/requests/request-actions/SavableRequestActions";
import type {
    NicheRequestData,
    NicheResultData,
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export class UnitEconCalcActions extends SavableRequestActions<UnitEconRequestData, UnitEconResultData>{
    constructor(authStore: IAuthStore) {
        super("/unit-econ", authStore);
    }
}

export class NicheCalcActions extends SavableRequestActions<NicheRequestData, NicheResultData>{
    constructor(authStore: IAuthStore) {
        super("/niche-dist", authStore);
    }
}
