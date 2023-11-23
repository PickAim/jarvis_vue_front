import {PageActions} from "@/component-actions/view-workspace/PageActions";
import type {AllMarketplaceApiKeysResultData} from "@/types/DataTypes";
import {AllMarketplaceApiKeysActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";
import {useRequestStore} from "@/stores/requestStore";

export class SettingsPanelSellerInfoAction extends PageActions {
    apiKeys: AllMarketplaceApiKeysResultData | undefined = undefined;

    constructor() {
        super();
    }

    protected async prepareSectionData() {
        useRequestStore().setLevel(300);
        this.apiKeys = (await (new AllMarketplaceApiKeysActions()).userInfoRequest()).result;
    }
}