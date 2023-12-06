import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {
    AllProductsResultData
} from "@/types/DataTypes";
import {
    AllProductsActions,
    UpdateUsersProductsActions
} from "@/requests/request-actions/user-info/UserInfoRequestActions";
import {useRequestStore} from "@/stores/requestStore";
import {ResultCode} from "@/requests/ResultCode";

export class WorkspaceSectionNearestKeywordsActions extends PageActions {
    products: AllProductsResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().setLevel(200);
        this.products = (await (new AllProductsActions()).userInfoRequest()).result;
    }

    async updateProducts() {
        useRequestStore().setLevel(210);
        if ((await (new UpdateUsersProductsActions()).userInfoRequest()).code !== ResultCode.OK) return;
        const res = await (new AllProductsActions()).userInfoRequest();
        if (res.code !== ResultCode.OK) return;
        this.products = res.result;
    }
}
