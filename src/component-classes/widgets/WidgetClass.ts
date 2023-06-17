import type {Widget, WidgetName, WidgetOptions, WidgetSaveInfo} from "@/types/WidgetTypes";

export abstract class WidgetClass <W extends WidgetName> {
    abstract render(): void;
    targetIndex = -1;

    protected constructor(public config: WidgetSaveInfo) {}
}