import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllNichesRequester} from "@/requests/requesters/InfoRequester";

export class AllNichesActions extends InfoRequestActions<, >{
    constructor() {
        super(new AllNichesRequester());
    }
}
