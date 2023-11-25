import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";
import {NicheCharacteristicsRequester} from "@/requests/requesters/CalculateRequester";
import type {NicheCharacteristicsRequestData, NicheCharacteristicsResultData} from "@/types/DataTypes";
import {convertMoneyToRoubles} from "@/requests/request-actions/utils";

export class NicheCharacteristicsActions extends CalculateActions<NicheCharacteristicsRequestData, NicheCharacteristicsResultData> {
    resultMoneyKeys: (keyof NicheCharacteristicsResultData)[] =
        ["daily_mean_niche_profit", "mean_traded_card_cost", "month_mean_niche_profit_per_card", "niche_profit"];

    constructor() {
        super(new NicheCharacteristicsRequester());
    }

    protected prepareResultData(result: NicheCharacteristicsResultData): NicheCharacteristicsResultData {
        convertMoneyToRoubles(result, this.resultMoneyKeys);
        return super.prepareResultData(result);
    }
}