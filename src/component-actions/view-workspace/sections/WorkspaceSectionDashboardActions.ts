import {useOverlayStateStore} from "@/stores/overlayStore";
import type {WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";
import {PageActions} from "@/component-actions/view-workspace/PageActions";
import {useWidgetStore} from "@/stores/widgetStore";

export class WorkspaceSectionDashboardActions extends PageActions {
    overlayState;

    constructor() {
        super();
        this.overlayState = useOverlayStateStore();
    }

    protected async prepareSectionData() {
        await useWidgetStore().renderWidgets();
    }

    openWidgetAddOverlay() {
        this.overlayState.openOverlay('widgetAdd');

    }

    openWidgetPanelSettingsOverlay() {
        this.overlayState.openOverlay('widgetSettings');
    }

    openWidgetSettingsOverlay(options: WidgetOptionsOverlayProperties) {
        this.overlayState.openOverlay("widgetOptions", options);
    }
}