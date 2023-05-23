// export const overlays: {[name in OverlayName]: string} = {
//     login: './OverlayWindowLogin.vue',
//     registration: './OverlayWindowRegistration.vue',
//     controlPanel: './OverlayWindowControlPanel.vue',
//     unitCalcNiche: './OverlayWindowLogin.vue',
//     unitCalcResult: './OverlayWindowLogin.vue',
//     widgetAdd: './OverlayWindowWidgetAdd.vue',
//     widgetSettings: './OverlayWindowWidgetSettings.vue',
// }

import {default as login} from './OverlayWindowLogin.vue';
import {default as registration} from './OverlayWindowRegistration.vue';
import {default as controlPanel} from './OverlayWindowControlPanel.vue';
import {default as nicheDist} from './widget-options/OverlayWindowNicheDist.vue';
import {default as unitEcon} from './OverlayWindowLogin.vue';
import {default as widgetAdd} from './OverlayWindowWidgetAdd.vue';
import {default as widgetSettings} from './OverlayWindowWidgetSettings.vue';
import OverlayWindowAverageCheck from "@/components/overlays/widget-options/OverlayWindowAverageCheck.vue";
import OverlayWindowStoreProfitability from "@/components/overlays/widget-options/OverlayWindowStoreProfitability.vue";
import OverlayWindowLostRevenue from "@/components/overlays/widget-options/OverlayWindowLostRevenue.vue";
import OverlayWindowNicheDist from "@/components/overlays/widget-options/OverlayWindowNicheDist.vue";
import OverlayWindowOrdersAndRedemptions
    from "@/components/overlays/widget-options/OverlayWindowOrdersAndRedemptions.vue";
import OverlayWindowRemains from "@/components/overlays/widget-options/OverlayWindowRemains.vue";
import OverlayWindowTurnover from "@/components/overlays/widget-options/OverlayWindowTurnover.vue";
import type {OverlayName} from "@/types/OverlayTypes";

export const overlays: {[name in OverlayName]: any} = {
    login,
    registration,
    controlPanel,
    nicheDist,
    unitEcon,
    widgetAdd,
    widgetSettings,
    storeProfitability: OverlayWindowStoreProfitability,
    remains: OverlayWindowRemains,
    turnover: OverlayWindowTurnover,
    lostRevenue: OverlayWindowLostRevenue,
    averageCheck: OverlayWindowAverageCheck,
    ordersAndRedemptions: OverlayWindowOrdersAndRedemptions
}