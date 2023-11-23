import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {DownturnResultData} from "@/types/DataTypes";
import {DownturnActions} from "@/requests/request-actions/calculations/DownturnActions";
import {useRequestStore} from "@/stores/requestStore";

export class WorkspaceSectionRemainsAnalyze extends PageActions {
    remainsInfo: DownturnResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().setLevel(200);
        this.remainsInfo = (await (new DownturnActions()).calculate()).result;
    }
}