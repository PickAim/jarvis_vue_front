import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {DownturnRequester} from "@/requests/requesters/CalculateRequester";

export class DownturnActions extends CalculateActions<, >{
    constructor() {
        super(new DownturnRequester());
    }
}