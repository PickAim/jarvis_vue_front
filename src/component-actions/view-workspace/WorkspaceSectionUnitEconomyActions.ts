import {WorkspaceSectionActions} from "@/component-actions/view-workspace/WorkspaceSectionActions";
import {UnitEconomyActions} from "@/requests/request-actions/calculations/UnitEconomyActions";
import type {AllProductsResultData, UnitEconomyRequestData, UnitEconomyResultData} from "@/types/DataTypes";
import type {CalculateRequestData} from "@/types/RequestTypes";

import {AllProductsActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";

export class WorkspaceSectionUnitEconomyActions extends WorkspaceSectionActions {
    products: AllProductsResultData | undefined = undefined;
    requests: CalculateRequestData<UnitEconomyRequestData, UnitEconomyResultData>[] | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        this.requests = (await (new UnitEconomyActions()).loadAll()).result;
        this.products = (await (new AllProductsActions()).getUserInfo()).result;
        console.log(this.products);
    }
}