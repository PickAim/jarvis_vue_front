import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {DownturnRequester, TurnoverRequester} from "@/requests/requesters/CalculateRequester";

export class TurnoverActions extends CalculateActions<, >{
    constructor() {
        super(new TurnoverRequester());
    }
}