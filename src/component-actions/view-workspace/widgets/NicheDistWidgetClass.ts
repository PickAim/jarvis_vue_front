import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class NicheDistWidgetClass<N extends WidgetName = "nicheDist"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    async render(): Promise<void> {
        // TODO: todo
    }
}
