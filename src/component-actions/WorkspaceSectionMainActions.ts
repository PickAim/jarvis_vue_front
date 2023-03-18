import {useOverlayStateStore} from "@/stores/overlayStore";

export class WorkspaceSectionMainActions{
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    openWidgetAddOverlay(){
        this.overlayState.setOverlayName('widgetAdd');
        this.overlayState.openOverlay();
    }

    openWidgetPanelSettingsOverlay(){
        this.overlayState.setOverlayName('widgetSettings');
        this.overlayState.openOverlay();
    }
}