import {useOverlayStateStore} from "@/stores/overlayStore";
import type {OverlayOptions, WidgetName} from "@/Objects";

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

    openWidgetSettingsOverlay<N extends WidgetName, O extends OverlayOptions[N]>(name: N, options: O){
        this.overlayState.openOverlay(name, options);
    }
}