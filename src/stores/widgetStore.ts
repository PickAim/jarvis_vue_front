import {defineStore} from 'pinia'
import type {Widget, WidgetName, WidgetOptions, WidgetSaveInfo} from "@/types/WidgetTypes";
import type {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import {useLocalStorage} from "@vueuse/core";
import {reactive, ref, watch} from "vue";
import {AverageCheckWidgetClass} from "@/component-classes/widgets/AverageCheckWidgetClass";
import {LostRevenueWidgetClass} from "@/component-classes/widgets/LostRevenueWidgetClass";
import {NicheDistWidgetClass} from "@/component-classes/widgets/NicheDistWidgetClass";
import {OrdersAndRedemptionsWidgetClass} from "@/component-classes/widgets/OrdersAndRedemptionsWidgetClass";
import {RemainsWidgetClass} from "@/component-classes/widgets/RemainsWidgetClass";
import {StoreProfitabilityWidgetClass} from "@/component-classes/widgets/StoreProfitabilityWidgetClass";
import {TurnoverWidgetClass} from "@/component-classes/widgets/TurnoverWidgetClass";
import {UnitEconWidgetClass} from "@/component-classes/widgets/UnitEconWidgetClass";

function getWidgetClassInstance<N extends WidgetName, C extends WidgetClass<N>>(config: WidgetClass<N>["config"]):
    WidgetClass<N> {
    switch (config.widgetName) {
        case "averageCheck":
            return new AverageCheckWidgetClass(config);
        case "lostRevenue":
            return new LostRevenueWidgetClass(config);
        case "nicheDist":
            return new NicheDistWidgetClass(config);
        case "ordersAndRedemptions":
            return new OrdersAndRedemptionsWidgetClass(config);
        case "remains":
            return new RemainsWidgetClass(config);
        case "storeProfitability":
            return new StoreProfitabilityWidgetClass(config);
        case "turnover":
            return new TurnoverWidgetClass(config);
        case "unitEcon":
            return new UnitEconWidgetClass(config);
    }
}

export const useWidgetStore = defineStore('widgets', () => {
    const widgetConfigs = useLocalStorage("widgetConfigs", [] as WidgetSaveInfo[], {deep: true});
    watch(widgetConfigs, () => {
        console.log("changed2");
    }, {deep: true})
    const gridWidth = useLocalStorage("widgetGridSize", 4);
    const widgetSizeMode = useLocalStorage("widgetSize", 2);
    const widgetClassList = ref([] as WidgetClass<WidgetName>[]);
    const saveWidgetPosition = useLocalStorage("widgetSavePosition", false);

    function initWidgets() {
        widgetConfigs.value.forEach(w => addClass(w))
        console.log(widgetClassList.value)
    }

    function addClass(configs: WidgetSaveInfo) {
        const widgetClass = getWidgetClassInstance(configs);
        widgetClassList.value.push(widgetClass);
    }

    function addWidget<N extends WidgetName>(widgetName: N, options: WidgetOptions[N]) {
        const widget: WidgetSaveInfo<N> = {
            widgetName: widgetName,
            options: options,
            gridIndex: widgetConfigs.value.length
        };
        widgetConfigs.value.push(widget);
        addClass(widgetConfigs.value[widgetConfigs.value.length - 1]);
    }

    function swapPosition(ind: number) {
        const widgetTo = widgetClassList.value.find((w) => w.targetIndex != -1);
        if (!widgetTo) return;
        widgetClassList.value[ind].config.gridIndex = widgetTo.config.gridIndex;
        widgetTo.config.gridIndex = widgetTo.targetIndex;
        widgetTo.targetIndex = -1;
    }

    function deleteWidget(ind: number) {
        if (ind >= widgetConfigs.value.length || ind < 0) return;
        const gridIndex = widgetConfigs.value[ind].gridIndex;
        if (!saveWidgetPosition.value)
            widgetClassList.value.forEach(w => {
                if (w.config.gridIndex > gridIndex) w.config.gridIndex--;
            });
        widgetClassList.value.splice(ind, 1);
        widgetConfigs.value.splice(ind, 1);
    }

    function editWidget(ind: number, options: WidgetOptions[WidgetName]) {
        widgetConfigs.value[ind].options = options;
    }

    initWidgets();

    return {
        widgetConfigs, gridWidth, widgetSizeMode, widgetClassList, saveWidgetPosition, addClass, addWidget,
        swapPosition, deleteWidget, editWidget, initWidgets
    }
})
