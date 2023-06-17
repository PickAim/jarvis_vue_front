import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class AverageCheckWidgetClass<N extends WidgetName = "averageCheck"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    render(): void {
        // TODO: todo
    }
}
