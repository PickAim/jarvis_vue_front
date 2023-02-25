import { useOverlayStateStore } from "@/stores/overlayStore";
export class WorkerOverlay {
    overlayState;
    constructor() {
        this.overlayState = useOverlayStateStore();
    }
    closeOverlay() {
        this.overlayState.closeOverlay();
    }
    changeOverlay(name) {
        //TODO
    }
    startLoading() {
        this.overlayState.startLoading();
    }
    stopLoading() {
        this.overlayState.stopLoading();
    }
}
