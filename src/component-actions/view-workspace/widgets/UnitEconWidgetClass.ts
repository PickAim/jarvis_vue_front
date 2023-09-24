import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {CalculateRequestData} from "@/types/RequestTypes";
import {useSimpleUnitEconCalcStore} from "@/stores/CalcStores";
import type {SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData} from "@/types/DataTypes";

export class UnitEconWidgetClass extends WidgetClass<"unitEcon"> {
    request: CalculateRequestData<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData> | undefined = undefined;

    constructor(config: WidgetClass<"unitEcon">["config"]) {
        if (config.options === undefined) {
            config.options = {
                saveResultID: "0"
            };
        }
        super(config);
    }

    async render(): Promise<void> {
        if (this.config.options) {
            this.request = useSimpleUnitEconCalcStore().getRequest(this.config.options.saveResultID);
        }
    }
}
