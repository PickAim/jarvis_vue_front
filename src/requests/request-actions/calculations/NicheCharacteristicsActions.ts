import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {DownturnRequester, NicheCharacteristicsRequester} from "@/requests/requesters/CalculateRequester";

export class NicheCharacteristicsActions extends CalculateActions<, >{
    constructor() {
        super(new NicheCharacteristicsRequester());
    }
}