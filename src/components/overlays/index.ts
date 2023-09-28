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
import {default as settingsPanel} from './OverlayWindowSettingsPanel.vue';
import {default as widgetAdd} from './OverlayWindowWidgetAdd.vue';
import {default as widgetSettings} from './OverlayWindowWidgetSettings.vue';
import {default as widgetOptions} from './OverlayWindowWidgetOptions.vue';
import {default as mobileMenu} from './OverlayMobMenu.vue';
import type {OverlayName} from "@/types/OverlayTypes";

export const overlays: { [name in OverlayName]: any } = {
    login,
    registration,
    settingsPanel,
    widgetAdd,
    widgetSettings,
    widgetOptions,
    mobileMenu
}
