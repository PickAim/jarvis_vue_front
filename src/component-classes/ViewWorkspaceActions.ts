import {useWidgetStore} from "@/stores/widgetStore";
import {UnitEconomyCalculator} from "@/component-classes/calculators/UnitEconomyCalculator";

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
            (new UnitEconomyCalculator()).loadAll()
        ]
        return Promise.allSettled(operations);
    }

    renderWidgets() {
        return useWidgetStore().renderWidgets();
    }
}