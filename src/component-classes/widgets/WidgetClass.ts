import type {WidgetName, WidgetSaveInfo} from "@/types/WidgetTypes";

export abstract class WidgetClass<W extends WidgetName> {
    abstract render(): void;

    setOptions(options: WidgetClass<W>["config"]["options"]): void {
        this.config.options = options;
    }

    targetIndex = -1;

    protected constructor(public config: WidgetSaveInfo<W>) {
    }
}