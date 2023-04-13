import {useUnitEconCalcStore} from "@/stores/CalcStores";
import type {
    UnitEconRequestData,
    UnitEconResultData
} from "@/types/CalcRequestsTypes";
import {UnitEconCalcActions} from "@/requests/request-actions/SavableCalcActions";
import {useAuthStore} from "@/stores/authStore";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";
import {CalcRequestObjectsFactory} from "@/object-factories/CalcRequestObjectsFactory";

export class WorkspaceSectionUnitEconActions extends
    AbstractWorkspaceSavableCalcActions<UnitEconRequestData, UnitEconResultData>{
    actions;
    constructor() {
        super()
        this.actions = new UnitEconCalcActions(useUnitEconCalcStore(), useAuthStore());
    }

    createEmptyRequestObject(): UnitEconRequestData {
        return CalcRequestObjectsFactory.createUnitEconRequestData();
    }
}