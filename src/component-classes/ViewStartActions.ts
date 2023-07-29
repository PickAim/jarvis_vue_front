import {useOverlayStateStore} from "@/stores/overlayStore";

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

    openMobMenu(){
        this.overlayState.openOverlay('mobmenu');
    }
}
