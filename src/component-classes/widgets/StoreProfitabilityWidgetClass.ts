import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class StoreProfitabilityWidgetClass<N extends WidgetName = "storeProfitability"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    async render(): Promise<void> {
        // TODO: todo
    }
}
