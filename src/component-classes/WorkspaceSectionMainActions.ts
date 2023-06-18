import {useOverlayStateStore} from "@/stores/overlayStore";
import type {WidgetName, WidgetOptions, WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";
import type {OverlayOptions} from "@/types/OverlayTypes";

export class WorkspaceSectionMainActions{
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    openWidgetAddOverlay(){
        this.overlayState.openOverlay('widgetAdd');
    }

    openWidgetPanelSettingsOverlay(){
        this.overlayState.openOverlay('widgetSettings');
    }

    openWidgetSettingsOverlay<N extends WidgetName>(options: WidgetOptionsOverlayProperties){
        this.overlayState.openOverlay("widgetOptions", options);
    }
}