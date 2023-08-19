import {InfoRequestActions} from "@/requests/request-actions/info/InfoRequestActions";
import {AllNichesRequester} from "@/requests/requesters/InfoRequester";
import type {AllNichesResultData} from "@/types/DataTypes";

export class AllNichesActions extends InfoRequestActions<undefined, AllNichesResultData> {
    constructor() {
        super(new AllNichesRequester());
    }
}
