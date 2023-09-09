import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class TurnoverWidgetClass<N extends WidgetName = "turnover"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    async render(): Promise<void> {
        // TODO: todo
    }
}
