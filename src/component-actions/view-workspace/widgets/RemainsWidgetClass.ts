import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class RemainsWidgetClass<N extends WidgetName = "remains"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    async render(): Promise<void> {
        // TODO: todo
    }
}
