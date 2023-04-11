import {default as nicheDist} from './WidgetBodyNicheDist.vue';
import {default as unitEcon} from './WidgetBodyUnitEcon.vue';
import type {WidgetName} from "@/types/Objects";

export const widgets: { [ind in WidgetName]: any } = {
    nicheDist,
    unitEcon
}