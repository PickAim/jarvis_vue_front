import type {OverlayName} from "@/Objects";

export const overlays: {[name in OverlayName]: any} = {
    login: import('./OverlayWindowLogin.vue'),
    registration: import('./OverlayWindowRegistration.vue'),
    controlPanel: import('./OverlayWindowControlPanel.vue'),
    unitCalcNiche: import('./OverlayWindowLogin.vue'),
    unitCalcResult: import('./OverlayWindowLogin.vue'),
}