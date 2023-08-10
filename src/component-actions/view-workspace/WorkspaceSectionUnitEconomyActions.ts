import {WorkspaceSectionActions} from "@/component-actions/view-workspace/WorkspaceSectionActions";
import {UnitEconomyActions} from "@/requests/request-actions/calculations/UnitEconomyActions";

export class WorkspaceSectionUnitEconomyActions extends WorkspaceSectionActions {
    constructor() {
        super();
    }

    protected async prepareSectionData() {
        await (new UnitEconomyActions()).loadAll();
    }
}