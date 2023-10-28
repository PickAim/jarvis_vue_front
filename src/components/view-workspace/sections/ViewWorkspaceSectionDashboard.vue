<script setup lang="ts">
import WidgetContainer
  from "@/components/view-workspace/widgets/WidgetContainer.vue";
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {computed, ref} from "vue";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import * as _ from "lodash";
import {storeToRefs} from "pinia";
import {useWidgetStore} from "@/stores/widgetStore";
import {
  WorkspaceSectionDashboardActions
} from "@/component-actions/view-workspace/sections/WorkspaceSectionDashboardActions";
import type {WidgetName} from "@/types/WidgetTypes";
import {widgetBodyWidth} from "@/component-actions/view-workspace/WidgetSizeCalculator";
import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";

const actions = new WorkspaceSectionDashboardActions();
const container = ref<HTMLElement>(null as HTMLElement);
const widgetStore = useWidgetStore();
const {widgetClassList, gridWidth, widgetSizeMode} = storeToRefs(widgetStore);

let startPos = [0, 0];
let isPanelScrolling = false;
let movingWidgetIndex = -1;

const isCtrl = ref(false);
const isWidgetMoving = ref(false);
const widgetWidth = computed(() => widgetBodyWidth(widgetSizeMode.value) + 'px');

const scrollTimerHandlersArray = [-1, -1, -1, -1];

actions.initSection();

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey)
    isCtrl.value = true;
});

window.addEventListener('keyup', (e) => {
  if (!e.ctrlKey)
    isCtrl.value = false;
});

window.addEventListener('mousemove', (e) => {
  onWidgetMoveEdgeScroll(e, container.value);
})

function onEditClick<N extends WidgetName>(w: WidgetClass<N>) {
  actions.openWidgetSettingsOverlay(w);
}

function onPanelMouseDown(e: MouseEvent) {
  if (!e.ctrlKey || !container.value) return;
  startPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  isPanelScrolling = true;
}

function onPanelMouseUp() {
  isPanelScrolling = false;
}

function onPanelMouseLeave() {
  isPanelScrolling = false;
  isCtrl.value = false;
}

function onPanelMouseMove(e: MouseEvent) {
  if (isPanelScrolling && !e.ctrlKey) isPanelScrolling = false;
  if (!isPanelScrolling || !container.value) return;
  e.preventDefault();
  const currentPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  const move = ([startPos[0] - currentPos[0], startPos[1] - currentPos[1]]);
  if (container.value) {
    container.value.scrollTop += move[1] * 2;
    container.value.scrollLeft += move[0] * 2;
  }
  startPos = currentPos;
}

function onWidgetMouseEnter(idx: number) {
  if (!isWidgetMoving.value || (idx === movingWidgetIndex)) return;
  widgetClassList.value[idx].targetIndex = widgetClassList.value[movingWidgetIndex].config.gridIndex;
}

function onWidgetMouseLeave(idx: number) {
  widgetClassList.value[idx].targetIndex = -1;
}

function onWidgetMoveStart(idx: number) {
  isWidgetMoving.value = true;
  movingWidgetIndex = idx;
}

function onWidgetMoveStop(ind: number) {
  isWidgetMoving.value = false;
  scrollTimerHandlersArray.forEach((t, ind) => clearScrollInterval(ind));
  widgetStore.swapPosition(ind);
}

const onWidgetMoveEdgeScroll = _.throttle((e: MouseEvent, panel: HTMLElement) => {
  if (!isWidgetMoving.value) return;
  const panelSize = panel.getBoundingClientRect();
  const panelPos = [panel.offsetLeft, panel.offsetTop];
  const mousePos = [e.pageX, e.pageY];
  const step = 10;
  const delay = 2;
  const offset = 150;
  const moveSpeedScale = [
    Math.min(1, (panelPos[0] + offset - mousePos[0]) / offset),
    Math.min(1, (panelPos[1] + offset - mousePos[1]) / offset),
    Math.min(1, (mousePos[0] - (panelPos[0] + panelSize.width - offset)) / offset),
    Math.min(1, (mousePos[1] - (panelPos[1] + panelSize.height - offset)) / offset),
  ]

  if (mousePos[0] < (panelPos[0] + offset)) {
    clearScrollInterval(0)
    scrollTimerHandlersArray[0] = window.setInterval(() => {
      panel.scrollLeft -= step * moveSpeedScale[0];
    }, delay);
  } else clearScrollInterval(0)

  if (mousePos[1] < (panelPos[1] + offset)) {
    clearScrollInterval(1)
    scrollTimerHandlersArray[1] = window.setInterval(() => {
      panel.scrollTop -= step * moveSpeedScale[1];
    }, delay);
  } else clearScrollInterval(1)

  if (mousePos[0] > (panelPos[0] + panelSize.width - offset)) {
    clearScrollInterval(2)
    scrollTimerHandlersArray[2] = window.setInterval(() => {
      panel.scrollLeft += step * moveSpeedScale[2];
    }, delay);
  } else clearScrollInterval(2)

  if (mousePos[1] > (panelPos[1] + panelSize.height - offset)) {
    clearScrollInterval(3)
    scrollTimerHandlersArray[3] = window.setInterval(() => {
      panel.scrollTop += step * moveSpeedScale[3];
    }, delay);
  } else clearScrollInterval(3)
}, 100);

function clearScrollInterval(id: number) {
  clearInterval(scrollTimerHandlersArray[id]);
  scrollTimerHandlersArray[id] = -1;
}
</script>

<template>
  <ViewWorkspaceSection :style="{'--widgetSizeMode': widgetSizeMode}">
    <template v-slot:header>Главная страница</template>
    <div class="section-body-wrapper">
      <!--      <div class="size-select">-->
      <!--        <ControlButton v-for="i in [1,2,3,4]" :key="i" @click="widgetSizeMode=i">{{ i }}</ControlButton>-->
      <!--      </div>-->
      <div class="widget-buttons-panel">
        <ControlButtonRound class="widget-panel-settings-button"
                            @click="actions.openWidgetPanelSettingsOverlay()">SET
        </ControlButtonRound>
        <ControlButtonRound class="widget-add-button"
                            @click="actions.openWidgetAddOverlay()">ADD
        </ControlButtonRound>
      </div>
      <div class="widget-panel"
           :class="{scrollable: isCtrl}"
           @mousedown="onPanelMouseDown"
           @mousemove="(e) => {onPanelMouseMove(e)}"
           @mouseup="onPanelMouseUp"
           @mouseleave="onPanelMouseLeave"
           ref="container">
        <WidgetContainer v-for="(w, ind) in widgetClassList"
                         :key="ind"
                         :options="w"
                         :grid-width="gridWidth"
                         :widget-size="widgetSizeMode"
                         :is-other-moving="isWidgetMoving"
                         @mouse-enter="onWidgetMouseEnter(ind)"
                         @mouse-leave="onWidgetMouseLeave(ind)"
                         @move-start="onWidgetMoveStart(ind)"
                         @move-stop="onWidgetMoveStop(ind)"
                         @close="widgetStore.deleteWidget(ind)"
                         @edit="onEditClick(w)"/>
      </div>
    </div>
  </ViewWorkspaceSection>
</template>

<style lang="scss">
.section-body-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  --grid-gap: 20px;

  .widget-panel {
    display: grid;
    grid-template-columns: repeat(v-bind(gridWidth), v-bind(widgetWidth));
    grid-gap: var(--grid-gap);
    padding: 0 10px 30px 10px;
    overflow-y: auto;
    overflow-x: auto;

    &.scrollable {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }

      * {
        pointer-events: none;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .widget-buttons-panel {
    position: absolute;
    bottom: 40px;
    right: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: fit-content;
    height: fit-content;
    z-index: 10;

    .widget-panel-settings-button {
      flex: 0 0 auto;
      width: 80px;
      height: 80px;
    }

    .widget-add-button {
      flex: 0 0 auto;
      width: 120px;
      height: 120px;
      margin-left: 20px;
    }
  }

  .size-select {
    display: inline-flex;
  }
}
</style>
