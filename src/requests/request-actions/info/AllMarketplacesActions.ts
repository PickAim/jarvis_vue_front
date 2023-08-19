import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllMarketplacesRequester} from "@/requests/requesters/InfoRequester";
import type {AllMarketplacesResultData} from "@/types/DataTypes";

export class AllMarketplacesActions extends InfoRequestActions<undefined, AllMarketplacesResultData> {
    constructor() {
        super(new AllMarketplacesRequester());
    }
}
