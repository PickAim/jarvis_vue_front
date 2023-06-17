import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class NicheDistWidgetClass<N extends WidgetName = "nicheDist"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    render(): void {
        // TODO: todo
    }
}
