import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {DownturnRequester} from "@/requests/requesters/CalculateRequester";
import type {DownturnRequestData, DownturnResultData} from "@/types/DataTypes";

export class DownturnActions extends CalculateActions<DownturnRequestData, DownturnResultData> {
    constructor() {
        super(new DownturnRequester());
    }
}