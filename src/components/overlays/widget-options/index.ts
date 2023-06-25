import OverlayWindowAverageCheck from "@/components/overlays/widget-options/OverlayWindowAverageCheck.vue";
import OverlayWindowStoreProfitability from "@/components/overlays/widget-options/OverlayWindowStoreProfitability.vue";
import OverlayWindowLostRevenue from "@/components/overlays/widget-options/OverlayWindowLostRevenue.vue";
import OverlayWindowNicheDist from "@/components/overlays/widget-options/OverlayWindowNicheDist.vue";
import OverlayWindowOrdersAndRedemptions
    from "@/components/overlays/widget-options/OverlayWindowOrdersAndRedemptions.vue";
import OverlayWindowRemains from "@/components/overlays/widget-options/OverlayWindowRemains.vue";
import OverlayWindowTurnover from "@/components/overlays/widget-options/OverlayWindowTurnover.vue";
import OverlayWindowUnitEcon from "@/components/overlays/widget-options/OverlayWindowUnitEcon.vue";
import type {WidgetName} from "@/types/WidgetTypes";

export const widgetOptionsOverlays: {[name in WidgetName]: any} = {
    nicheDist: OverlayWindowNicheDist,
    unitEcon: OverlayWindowUnitEcon,
    storeProfitability: OverlayWindowStoreProfitability,
    remains: OverlayWindowRemains,
    turnover: OverlayWindowTurnover,
    lostRevenue: OverlayWindowLostRevenue,
    averageCheck: OverlayWindowAverageCheck,
    ordersAndRedemptions: OverlayWindowOrdersAndRedemptions
}