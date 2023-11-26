import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {
    AllProductsResultData
} from "@/types/DataTypes";
import {AllProductsActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";
import {useRequestStore} from "@/stores/requestStore";

export class WorkspaceSectionNearestKeywordsActions extends PageActions {
    products: AllProductsResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().setLevel(200);
        this.products = (await (new AllProductsActions()).userInfoRequest()).result;
    }
}
