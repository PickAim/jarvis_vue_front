import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {
    AllProductsResultData, SimpleUnitEconomyResultData,
    TransitUnitEconomyRequestData,
    TransitUnitEconomyResultData,
    SimpleUnitEconomyRequestData
} from "@/types/DataTypes";
import type {CalculateRequestData} from "@/types/RequestTypes";
import {AllProductsActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";
import {
    SimpleUnitEconomyActions,
    TransitUnitEconomyActions
} from "@/requests/request-actions/calculations/UnitEconomyActions";
import {useRequestStore} from "@/stores/requestStore";

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
            (new AllProductsActions()).getUserInfo()
        ]);
        useRequestStore().stopSequence();

        const result = await promise;
        [this.simpleRequests, this.transitRequests, this.products] =
            [result[0].result, result[1].result, result[2].result];
    }
}
