import {defineStore} from 'pinia'
import type {WidgetName, WidgetOptions, WidgetSaveInfo} from "@/types/WidgetTypes";
import type {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import {useLocalStorage} from "@vueuse/core";
import {ref} from "vue";
import {AverageCheckWidgetClass} from "@/component-classes/widgets/AverageCheckWidgetClass";
import {LostRevenueWidgetClass} from "@/component-classes/widgets/LostRevenueWidgetClass";
import {NicheDistWidgetClass} from "@/component-classes/widgets/NicheDistWidgetClass";
import {OrdersAndRedemptionsWidgetClass} from "@/component-classes/widgets/OrdersAndRedemptionsWidgetClass";
import {RemainsWidgetClass} from "@/component-classes/widgets/RemainsWidgetClass";
import {StoreProfitabilityWidgetClass} from "@/component-classes/widgets/StoreProfitabilityWidgetClass";
import {TurnoverWidgetClass} from "@/component-classes/widgets/TurnoverWidgetClass";
import {UnitEconWidgetClass} from "@/component-classes/widgets/UnitEconWidgetClass";

function getWidgetClassInstance<N extends WidgetName>(config: WidgetClass<N>["config"]) {
    switch (config.widgetName) {
        case "averageCheck":
            return new AverageCheckWidgetClass(config as WidgetSaveInfo<"averageCheck">);
        case "lostRevenue":
            return new LostRevenueWidgetClass(config as WidgetSaveInfo<"lostRevenue">);
        case "nicheDist":
            return new NicheDistWidgetClass(config as WidgetSaveInfo<"nicheDist">);
        case "ordersAndRedemptions":
            return new OrdersAndRedemptionsWidgetClass(config as WidgetSaveInfo<"ordersAndRedemptions">);
        case "remains":
            return new RemainsWidgetClass(config as WidgetSaveInfo<"remains">);
        case "storeProfitability":
            return new StoreProfitabilityWidgetClass(config as WidgetSaveInfo<"storeProfitability">);
        case "turnover":
            return new TurnoverWidgetClass(config as WidgetSaveInfo<"turnover">);
        case "unitEcon":
            return new UnitEconWidgetClass(config as WidgetSaveInfo<"unitEcon">);
    }
}

export const useWidgetStore = defineStore('widgets', () => {
    const widgetConfigs = useLocalStorage("widgetConfigs", [] as WidgetSaveInfo[],
        {listenToStorageChanges: false});
    const gridWidth = useLocalStorage("widgetGridSize", 4);
    const widgetSizeMode = useLocalStorage("widgetSize", 2);
    const widgetClassList = ref([] as WidgetClass<WidgetName>[]);
    const saveWidgetPosition = useLocalStorage("widgetSavePosition", false);

    function initWidgets() {
        widgetConfigs.value.forEach(w => {
            addClass(w).render();
        })
    }
    initWidgets();

    function addClass(configs: WidgetSaveInfo) {
        const widgetClass = getWidgetClassInstance(configs);
        widgetClassList.value.push(widgetClass);
        return widgetClass;
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
        const gridIndex = widgetClassList.value[ind].config.gridIndex;
        if (!saveWidgetPosition.value)
            widgetClassList.value.forEach((w) => {
                if (w.config.gridIndex > gridIndex) w.config.gridIndex--;
            });
        widgetClassList.value.splice(ind, 1);
        widgetConfigs.value.splice(ind, 1);
    }

    function editWidget(ind: number, options: WidgetOptions[WidgetName]) {
        widgetConfigs.value[ind].options = options;
    }

    return {
        widgetConfigs, gridWidth, widgetSizeMode, widgetClassList, saveWidgetPosition, addClass, addWidget,
        swapPosition, deleteWidget, editWidget, initWidgets
    }
})
