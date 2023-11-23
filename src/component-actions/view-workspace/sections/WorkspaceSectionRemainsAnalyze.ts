import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {DownturnResultData} from "@/types/DataTypes";
import {DownturnActions} from "@/requests/request-actions/calculations/DownturnActions";

export class WorkspaceSectionRemainsAnalyze extends PageActions {
    remainsInfo: DownturnResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        this.remainsInfo = (await (new DownturnActions()).calculate()).result;
    }
}