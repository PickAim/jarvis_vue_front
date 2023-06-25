import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {CalcRequestData} from "@/types/CalcRequestsTypes";
import type {UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import {useUnitEconCalcStore} from "@/stores/CalcStores";

export class UnitEconWidgetClass extends WidgetClass<"unitEcon"> {
    request: CalcRequestData<UnitEconRequestData, UnitEconResultData> | undefined = undefined;

    constructor(config: WidgetClass<"unitEcon">["config"]) {
        if(config.options === undefined) {
            config.options = {
                saveResultID: "0"
            };
        }
        super(config);
    }

    async render(): Promise<void> {
        if(this.config.options) {
            this.request = useUnitEconCalcStore().getRequest(this.config.options.saveResultID);
        }
    }
}
