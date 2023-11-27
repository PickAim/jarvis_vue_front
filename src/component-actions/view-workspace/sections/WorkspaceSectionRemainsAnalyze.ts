import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {AllProductsResultData, DownturnResultData} from "@/types/DataTypes";
import {DownturnActions} from "@/requests/request-actions/calculations/DownturnActions";
import {useRequestStore} from "@/stores/requestStore";
import {AllProductsActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";

export class WorkspaceSectionRemainsAnalyze extends PageActions {
    remainsInfo: DownturnResultData | undefined = undefined;
    products: AllProductsResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().setLevel(200);
        useRequestStore().startSequence(200);
        const promise = Promise.all([
            (new AllProductsActions()).userInfoRequest(),
            (new DownturnActions()).calculate()
        ]);
        useRequestStore().stopSequence();

        const result = await promise;
        [this.products, this.remainsInfo] =
            [result[0].result, result[1].result];
    }
}