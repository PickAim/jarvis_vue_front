import {default as unitEcon} from "./SavedCalcRequestItemBodyUnitEcon.vue";
import {default as nicheDist} from "./SavedCalcRequestItemBodyNicheDist.vue";
import type {CalcRequestName} from "@/types/CalcRequestsTypes";

export const savedRequestItems: { [ind in CalcRequestName]: any } = {
    unitEcon,
    nicheDist
}