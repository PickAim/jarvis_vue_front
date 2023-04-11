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
import type {OverlayName} from "@/types/Objects";

export const overlays: {[name in OverlayName]: any} = {
    login,
    registration,
    controlPanel,
    nicheDist,
    unitEcon,
    widgetAdd,
    widgetSettings,
}