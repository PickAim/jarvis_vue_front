import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllMarketplacesRequester} from "@/requests/requesters/InfoRequester";

export class AllMarketplacesActions extends InfoRequestActions<, >{
    constructor() {
        super(new AllMarketplacesRequester());
    }
}
