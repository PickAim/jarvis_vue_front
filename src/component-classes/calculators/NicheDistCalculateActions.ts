import type {ISavableCalculatorStore} from "@/types/CalculateRequestsTypes";
import {SavableCalculateActions} from "@/component-classes/calculators/SavableCalculateActions";
import {NicheDistRequestActions} from "@/requests/request-actions/SavableCalculateRequestActions";
import type {NicheDistRequestData, NicheDistResultData} from "@/types/DataTypes";

export class NicheDistCalcActions<Q extends NicheDistRequestData, R extends NicheDistResultData>
    extends SavableCalculateActions<NicheDistRequestData, NicheDistResultData> {
    constructor(calcStore: ISavableCalculatorStore<Q, R>) {
        super(new NicheDistRequestActions(), calcStore);
    }


    prepareRequestData(request: NicheDistRequestData): NicheDistRequestData {
        return super.prepareRequestData(request);
    }

    prepareResultData(result: NicheDistResultData): NicheDistResultData {
        return super.prepareResultData(result);
    }

    // TODO: insert prepare data
}