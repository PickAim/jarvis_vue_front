import {default as nicheDist} from './WidgetBodyNicheDist.vue';
import {default as unitEcon} from './WidgetBodyUnitEcon.vue';
import {default as remains} from './WidgetBodyRemains.vue';
import {default as storeProfitability} from './WidgetBodyStoreProfitability.vue';
import {default as ordersAndRedemptions} from './WidgetBodyOrdersAndRedemptions.vue';
import {default as averageCheck} from './WidgetBodyAverageCheck.vue';
import {default as lostRevenue} from './WidgetBodyLostRevenue.vue';
import {default as turnover} from './WidgetBodyTurnover.vue';

import type {WidgetName} from "@/types/WidgetTypes";

export const widgets: { [ind in WidgetName]: any } = {
    nicheDist,
    unitEcon,
    remains,
    storeProfitability,
    ordersAndRedemptions,
    averageCheck,
    lostRevenue,
    turnover
}