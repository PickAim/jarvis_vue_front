import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {WidgetName} from "@/types/WidgetTypes";

export class OrdersAndRedemptionsWidgetClass<N extends WidgetName = "ordersAndRedemptions"> extends WidgetClass<N> {
    constructor(config: WidgetClass<N>["config"]) {
        super(config);
    }

    render(): void {
        // TODO: todo
    }
}
