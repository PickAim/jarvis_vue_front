import type {
    NearestKeywordsForProductRequestData,
    NearestKeywordsRequestData,
    NearestKeywordsResultData
} from "@/types/DataTypes";
import {
    NearestKeywordsForProductRequester,
    NearestKeywordsRequester
} from "@/requests/requesters/CalculateRequester";
import {CalculateActions} from "@/requests/request-actions/calculations/CalculateActions";

function firstLetterToUppercase(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

export class NearestKeywordsActions
    extends CalculateActions<NearestKeywordsRequestData, NearestKeywordsResultData> {
    constructor() {
        super(new NearestKeywordsRequester());
    }

    protected prepareResultData(result: NearestKeywordsResultData): NearestKeywordsResultData {
        result = result.map(firstLetterToUppercase);
        return super.prepareResultData(result);
    }
}

export class NearestKeywordsForProductActions
    extends CalculateActions<NearestKeywordsForProductRequestData, NearestKeywordsResultData> {
    constructor() {
        super(new NearestKeywordsForProductRequester());
    }

    protected prepareResultData(result: NearestKeywordsResultData): NearestKeywordsResultData {
        result = result.map(firstLetterToUppercase);
        return super.prepareResultData(result);
    }
}