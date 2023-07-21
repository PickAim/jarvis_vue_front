import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllCategoriesRequester} from "@/requests/requesters/InfoRequester";
import type {AllCategoriesResultData} from "@/types/DataTypes";

export class AllCategoriesActions extends InfoRequestActions<undefined, AllCategoriesResultData> {
    constructor() {
        super(new AllCategoriesRequester());
    }
}
