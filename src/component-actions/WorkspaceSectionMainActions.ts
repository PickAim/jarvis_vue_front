import {useOverlayStateStore} from "@/stores/overlayStore";

export class WorkspaceSectionMainActions{
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    openAddWidgetOverlay(){
        this.overlayState.setOverlayName('login');
        this.overlayState.openOverlay();
    }

    openWidgetPanelSettingsOverlay(){
        this.overlayState.setOverlayName('registration');
        this.overlayState.openOverlay();
    }
}