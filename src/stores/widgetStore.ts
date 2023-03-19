import { defineStore } from 'pinia'
import type {Widget, WidgetName, WidgetOptions} from "@/Objects";

export const useWidgetStore = defineStore('widgets', {
    state: () => ({
        widgetList: [] as Widget[],
        saveWidgetPosition: false,
        gridWidth: 4,
        widgetSizeMode: 2
    }),
    getters: {
    },
    actions: {
        addWidget<N extends WidgetName>(widgetName: N, options: WidgetOptions[N]){
            const widget: Widget<N> = {
                widgetName: widgetName,
                settings: options,
                gridIndex: this.widgetList.length,
                targetIndex: -1,
            };
            this.widgetList.push(widget);
        },
        getWidget(ind: number): Widget<WidgetName>{
            return this.widgetList[ind];
        },
        swapPosition(ind: number){
            const widgetTo = this.widgetList.find((w) => w.targetIndex != -1);
            if(!widgetTo) return;
            this.getWidget(ind).gridIndex = widgetTo.gridIndex;
            widgetTo.gridIndex = widgetTo.targetIndex;
            widgetTo.targetIndex = -1;
        },
        deleteWidget(ind: number){
            if(ind >= this.widgetList.length || ind < 0) return;
            const gridIndex = this.getWidget(ind).gridIndex;
            if(!this.saveWidgetPosition)
                this.widgetList.forEach(w => { if(w.gridIndex > gridIndex) w.gridIndex-- });
            this.widgetList.splice(ind, 1);
        },
        editWidget(ind: number, options: WidgetOptions[WidgetName]){
            this.getWidget(ind).settings = options;
        }
    }
})
