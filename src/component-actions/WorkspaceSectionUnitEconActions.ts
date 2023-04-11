import {useUnitEconCalcStore} from "@/stores/CalcStores";
import type {
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import {UnitEconCalcActions} from "@/requests/request-actions/CalcActions";
import {useAuthStore} from "@/stores/authStore";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";

export class WorkspaceSectionUnitEconActions extends
    AbstractWorkspaceSavableCalcActions<UnitEconRequestData, UnitEconResultData>{
    actions;
    constructor() {
        super()
        this.actions = new UnitEconCalcActions(useUnitEconCalcStore(), useAuthStore());
    }

    createEmptyRequestObject(): UnitEconRequestData {
        return {
            buy: 0,
            niche: "",
            pack: 0
        }
    }
}