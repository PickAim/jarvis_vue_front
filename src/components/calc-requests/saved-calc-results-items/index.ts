import {default as unitEcon} from "./SavedCalcRequestItemBodyUnitEcon.vue";
import {default as nicheDist} from "./SavedCalcRequestItemBodyNicheDist.vue";
import type {CalculateRequestName} from "@/types/CalculateRequestsTypes";

export const savedRequestItems: { [ind in CalculateRequestName]: any } = {
    unitEcon,
    nicheDist
}