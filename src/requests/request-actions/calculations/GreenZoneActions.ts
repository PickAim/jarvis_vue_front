import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {GreenZoneRequester} from "@/requests/requesters/CalculateRequester";
import type {
    GreenZoneRequestData,
    GreenZoneResultData,
} from "@/types/DataTypes";

export class GreenZoneActions extends CalculateActions<GreenZoneRequestData, GreenZoneResultData> {
    constructor() {
        super(new GreenZoneRequester());
    }

    protected prepareResultData(result: GreenZoneResultData): GreenZoneResultData {
        const delimiter = (x: number) => x / 100;
        result.mean_product_profit = result.mean_product_profit.map(delimiter);
        result.mean_segment_profit = result.mean_segment_profit.map(delimiter);
        result.segment_profits = result.segment_profits.map(delimiter);
        result.segments = result.segments.map((x) => [x[0] / 100, x[1] / 100]);
        return super.prepareResultData(result);
    }
}