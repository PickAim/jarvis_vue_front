import {useOverlayStateStore} from "@/stores/overlayStore";
import type {WidgetName, WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";

export class WorkspaceSectionDashboardActions {
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    openWidgetAddOverlay() {
        this.overlayState.openOverlay('widgetAdd');

    }

    openWidgetPanelSettingsOverlay() {
        this.overlayState.openOverlay('widgetSettings');
    }

    openWidgetSettingsOverlay<N extends WidgetName>(options: WidgetOptionsOverlayProperties) {
        this.overlayState.openOverlay("widgetOptions", options);
    }
}