import type {ISavableCalculatorStore} from "@/types/RequestTypes";
import {SavableCalculateActions} from "@/requests/request-actions/calculations/SavableCalculateActions";
import {NicheDistRequestActions} from "@/requests/requesters/SavableCalculateRequester";
import type {NicheDistRequestData, NicheDistResultData} from "@/types/DataTypes";

export class NicheDistActions<Q extends NicheDistRequestData, R extends NicheDistResultData>
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