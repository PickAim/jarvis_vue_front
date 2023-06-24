import {WorkspaceSectionUnitEconActions} from "@/component-classes/WorkspaceSectionUnitEconActions";
import {useWidgetStore} from "@/stores/widgetStore";

export class ViewWorkspaceActions {
    isLoading = false;

    async initWorkspacesSections() {
        console.log("LOADING START");
        this.isLoading = true;
        await this.prepareData();
        await this.renderWidgets();
        this.isLoading = false;
        console.log("LOADING END");
    }

    prepareData() {
        const operations = [
            (new WorkspaceSectionUnitEconActions()).loadAll()
        ]
        return Promise.allSettled(operations);
    }

    renderWidgets() {
        return useWidgetStore().renderWidgets();
    }
}