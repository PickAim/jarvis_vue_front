import {WorkspaceSectionActions} from "@/component-actions/view-workspace/WorkspaceSectionActions";
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

export class WorkspaceSectionUnitEconomyActions extends WorkspaceSectionActions {
    products: AllProductsResultData | undefined = undefined;
    simpleRequests: CalculateRequestData<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData>[] | undefined = undefined;
    transitRequests: CalculateRequestData<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>[] | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        const simpleUnitEconomyActions = new SimpleUnitEconomyActions();
        const transitUnitEconomyActions = new TransitUnitEconomyActions();

        await simpleUnitEconomyActions.loadAll();
        await transitUnitEconomyActions.loadAll();

        this.simpleRequests = simpleUnitEconomyActions.getAll();
        this.transitRequests = transitUnitEconomyActions.getAll();
        this.products = (await (new AllProductsActions()).getUserInfo()).result;
        console.log(this.products);
    }
}
