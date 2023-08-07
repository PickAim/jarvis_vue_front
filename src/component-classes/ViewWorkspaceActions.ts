import {useWidgetStore} from "@/stores/widgetStore";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";

export class ViewWorkspaceActions {
    isLoading = false;

    async initWorkspacesSections() {
        this.isLoading = true;
        await this.prepareData();
        await this.renderWidgets();
        this.isLoading = false;
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