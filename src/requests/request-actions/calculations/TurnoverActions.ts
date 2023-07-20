import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {TurnoverRequester} from "@/requests/requesters/CalculateRequester";

export class TurnoverActions extends CalculateActions<, >{
    constructor() {
        super(new TurnoverRequester());
    }
}