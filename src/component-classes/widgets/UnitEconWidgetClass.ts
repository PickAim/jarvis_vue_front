import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import type {CalculateRequestData} from "@/types/RequestTypes";
import {useUnitEconCalcStore} from "@/stores/CalcStores";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyRequestData} from "@/types/DataTypes";

export class UnitEconWidgetClass extends WidgetClass<"unitEcon"> {
    request: CalculateRequestData<UnitEconomyRequestData, UnitEconomyResultData> | undefined = undefined;

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
