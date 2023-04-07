import {useOverlayStateStore} from "@/stores/overlayStore";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";

export class ViewStartActions {
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    openLoginOverlay(){
        this.overlayState.openOverlay('login');
    }

    openRegistrationOverlay(){
        this.overlayState.openOverlay('registration');
    }
}
