import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {
    AllProductsResultData,
    SimpleUnitEconomyRequestData,
    SimpleUnitEconomyResultData,
    TransitUnitEconomyRequestData,
    TransitUnitEconomyResultData
} from "@/types/DataTypes";
import type {CalculateRequestData} from "@/types/RequestTypes";
import {
    AllProductsActions,
    UpdateUsersProductsActions
} from "@/requests/request-actions/user-info/UserInfoRequestActions";
import {
    SimpleUnitEconomyActions,
    TransitUnitEconomyActions
} from "@/requests/request-actions/calculations/UnitEconomyActions";
import {useRequestStore} from "@/stores/requestStore";
import {ResultCode} from "@/requests/ResultCode";

export class WorkspaceSectionUnitEconomyActions extends PageActions {
    products: AllProductsResultData | undefined = undefined;
    simpleRequests: CalculateRequestData<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData>[] | undefined = undefined;
    transitRequests: CalculateRequestData<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>[] | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().startSequence(200);
        const promise = Promise.all([
            (new SimpleUnitEconomyActions()).loadAll(),
            (new TransitUnitEconomyActions()).loadAll(),
            (new AllProductsActions()).userInfoRequest()
        ]);
        useRequestStore().stopSequence();

        const result = await promise;
        [this.simpleRequests, this.transitRequests, this.products] =
            [result[0].result, result[1].result, result[2].result];
    }

    async updateProducts() {
        useRequestStore().setLevel(210);
        if ((await (new UpdateUsersProductsActions()).userInfoRequest()).code !== ResultCode.OK) return;
        const res = await (new AllProductsActions()).userInfoRequest();
        if (res.code !== ResultCode.OK) return;
        this.products = res.result;
    }
}
