import {default as unitEcon} from "./SavedItemUnitEcon.vue";
import {default as nicheDist} from "./SavedItemNicheDist.vue";
import type {CalculateRequestName} from "@/types/RequestTypes";

export const savedRequestItems: { [ind in CalculateRequestName]: any } = {
    unitEcon,
    nicheDist
}