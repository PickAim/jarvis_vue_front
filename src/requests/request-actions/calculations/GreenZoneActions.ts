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
        result.freq.x = result.freq.x.map(delimiter);
        result.green.mean_product_profit = result.green.mean_product_profit.map(delimiter);
        result.green.mean_segment_profit = result.green.mean_segment_profit.map(delimiter);
        result.green.segment_profits = result.green.segment_profits.map(delimiter);
        result.green.segments = result.green.segments.map((x) => [x[0] / 100, x[1] / 100]);
        return super.prepareResultData(result);
    }
}