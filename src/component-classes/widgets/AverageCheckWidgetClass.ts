import {WidgetClass} from "@/component-classes/widgets/WidgetClass";

export class AverageCheckWidgetClass extends WidgetClass<"averageCheck"> {
    inputText = "";

    constructor(config: WidgetClass<"averageCheck">["config"]) {
        super(config);
        if (config.options === undefined) {
            config.options = {
                inputText: ""
            }
        }
    }

    async render(): Promise<void> {
        if(this.config.options) {
            this.inputText = this.config.options.inputText;
        }
    }
}
