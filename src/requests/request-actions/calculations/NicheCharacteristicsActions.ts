import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {NicheCharacteristicsRequester} from "@/requests/requesters/CalculateRequester";
import type {NicheCharacteristicsRequestData, NicheCharacteristicsResultData} from "@/types/DataTypes";

export class NicheCharacteristicsActions extends CalculateActions<NicheCharacteristicsRequestData, NicheCharacteristicsResultData> {
    constructor() {
        super(new NicheCharacteristicsRequester());
    }
}