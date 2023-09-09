import {useOverlayStateStore} from "@/stores/overlayStore";

export class OverlayActions {
    overlayState;

    constructor() {
        this.overlayState = useOverlayStateStore();
    }

    closeOverlay() {
        this.overlayState.closeOverlay();
    }

    changeOverlay(name: string) {
        //TODO
    }

    startLoading() {
        this.overlayState.startLoading();
    }

    stopLoading() {
        this.overlayState.stopLoading();
    }
}
