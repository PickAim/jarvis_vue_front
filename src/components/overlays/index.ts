import type {OverlayName} from "@/Objects";

export const overlays: {[name in OverlayName]: string} = {
    login: './OverlayWindowLogin.vue',
    registration: './OverlayWindowRegistration.vue',
    controlPanel: './OverlayWindowControlPanel.vue',
    unitCalcNiche: './OverlayWindowLogin.vue',
    unitCalcResult: './OverlayWindowLogin.vue',
    widgetAdd: './OverlayWindowWidgetAdd.vue',
    widgetSettings: './OverlayWindowWidgetSettings.vue',
}