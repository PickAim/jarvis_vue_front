import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {TurnoverRequester} from "@/requests/requesters/CalculateRequester";
import type {TurnoverRequestData, TurnoverResultData} from "@/types/DataTypes";

export class TurnoverActions extends CalculateActions<TurnoverRequestData, TurnoverResultData> {
    constructor() {
        super(new TurnoverRequester());
    }
}