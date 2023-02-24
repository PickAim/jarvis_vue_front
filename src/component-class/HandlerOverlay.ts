import type {OverlayName} from "@/packages/Objects";
import {useOverlayStateStore} from "@/stores/overlayStore";
import type {Store} from "pinia";

export class HandlerOverlay {
    overlayStore;

    constructor() {
        this.overlayStore = useOverlayStateStore();
    }

    setOverlayName(name: OverlayName){
        this.overlayStore.setOverlayName(name);
    }

    setEffect(effect: string, options: object){

    }

    openOverlay(){
        this.overlayStore.openOverlay();
    }

    closeOverlay(){
        this.overlayStore.closeOverlay();
    }

    isOpen(){
        return this.overlayStore.isOpen
    }

    isLoading(){
        return this.overlayStore.isLoading
    }
}
