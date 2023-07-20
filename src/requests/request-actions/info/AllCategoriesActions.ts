import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllCategoriesRequester} from "@/requests/requesters/InfoRequester";

export class AllCategoriesActions extends InfoRequestActions<, >{
    constructor() {
        super(new AllCategoriesRequester());
    }
}
