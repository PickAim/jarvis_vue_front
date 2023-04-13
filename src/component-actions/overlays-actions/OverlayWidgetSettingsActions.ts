import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import {useWidgetStore} from "@/stores/widgetStore";
import type {WidgetName} from "@/types/Objects";

export class OverlayWidgetSettingsActions<N extends WidgetName> extends OverlayActions{
    widgetStore;

    constructor() {
        super();
        this.widgetStore = useWidgetStore();
    }


}
