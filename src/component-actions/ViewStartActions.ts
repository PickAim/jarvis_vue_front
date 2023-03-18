import {useOverlayStateStore} from "@/stores/overlayStore";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";

export class ViewStartActions {
    overlayState;
    overlayLoginActions: OverlayLoginActions;
    overlayRegistrationActions: OverlayLoginActions;

    constructor() {
        this.overlayState = useOverlayStateStore();
        this.overlayLoginActions = new OverlayLoginActions();
        this.overlayRegistrationActions = new OverlayLoginActions();
    }

    openLoginOverlay(){
        this.overlayState.setOverlayName('login');
        this.overlayState.openOverlay();
    }

    openRegistrationOverlay(){
        this.overlayState.setOverlayName('registration');
        this.overlayState.openOverlay();
    }
}
