import {useOverlayStateStore} from "@/stores/overlayStore";
import type {WidgetName, WidgetOptionsOverlayProperties} from "@/types/WidgetTypes";
import {WorkspaceSectionActions} from "@/component-actions/view-workspace/WorkspaceSectionActions";
import {useWidgetStore} from "@/stores/widgetStore";

export class WorkspaceSectionDashboardActions extends WorkspaceSectionActions {
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

    openWidgetSettingsOverlay<N extends WidgetName>(options: WidgetOptionsOverlayProperties) {
        this.overlayState.openOverlay("widgetOptions", options);
    }
}