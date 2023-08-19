import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import type {WidgetName, WidgetOptions} from "@/types/WidgetTypes";
import type {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";

export class OverlayWidgetSettingsActions extends OverlayActions {
    constructor() {
        super();
    }

    onSubmit<N extends WidgetName>(w: WidgetClass<N>, options: WidgetOptions[N]) {
        w.setOptions(options);
        w.render();
        this.closeOverlay();
    }
}
