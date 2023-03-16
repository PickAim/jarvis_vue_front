import type {WidgetName} from "@/Objects";

export const overlays: {[name in WidgetName]: any} = {
    unitCalcNiche: import('./WidgetBodyUnitCalcNiche.vue'),
    unitCalcResult: import('./WidgetBodyUnitCalcResult.vue'),
}