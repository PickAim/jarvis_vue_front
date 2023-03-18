import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import {useWidgetStore} from "@/stores/widgetStore";

export class OverlayWidgetAddActions extends OverlayActions{
    widgetStore;

    constructor() {
        super();
        this.widgetStore = useWidgetStore();
    }

    addWidget(){
        this.widgetStore.addWidget("unitCalcNiche", {
            nicheName: Math.random().toString().substring(2,4)
        });
        this.overlayState.closeOverlay();
    }
}
