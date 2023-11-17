import {WorkspaceSectionActions} from "@/component-actions/view-workspace/sections/WorkspaceSectionActions";
import type {DownturnResultData} from "@/types/DataTypes";
import {DownturnActions} from "@/requests/request-actions/calculations/DownturnActions";

export class WorkspaceSectionRemainsAnalyze extends WorkspaceSectionActions {
    remainsInfo: DownturnResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        this.remainsInfo = (await (new DownturnActions()).calculate()).result;
    }
}