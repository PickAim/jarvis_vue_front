<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>Главная страница</template>
    <div class="main-section-wrapper">
      <div class="size-select">
        <ControlButton v-for="i in [1,2,3,4]" :key="i" @click="widgetSizeMode=i">{{i}}</ControlButton>
      </div>
      <div class="widget-panel-buttons">
        <ControlButtonRound class="widget-panel-settings-button"
                            @click="actions.openWidgetPanelSettingsOverlay()">SET</ControlButtonRound>
        <ControlButtonRound class="widget-add-button"
                            @click="actions.openWidgetAddOverlay()">ADD</ControlButtonRound>
      </div>
      <div class="widget-panel"
           :class="{scrollable: isCtrl}"
           @mousedown="onPanelMouseDown"
           @mousemove="(e) => {onPanelMouseMove(e)}"
           @mouseup="onPanelMouseUp"
           @mouseleave="onPanelMouseLeave"
           ref="container">
        <WidgetContainer v-for="(w, ind) in widgetList"
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
                         @edit="onEditClick(w, ind)"/>
      </div>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import WidgetContainer
  from "@/components/view-workspace/widgets/WidgetContainer.vue";
import ViewWorkspaceSectionContainer from "@/components/view-workspace/ViewWorkspaceSectionContainer.vue";
import {computed, ref} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import * as _ from "lodash";
import {storeToRefs} from "pinia";
import {useWidgetStore} from "@/stores/widgetStore";
import {WorkspaceSectionMainActions} from "@/component-actions/WorkspaceSectionMainActions";
import type {Widget} from "@/types/Objects";

const actions = new WorkspaceSectionMainActions();
const container = ref<HTMLElement | null>(null);
const widgetStore = useWidgetStore();
const {widgetList, gridWidth, widgetSizeMode} = storeToRefs(widgetStore);

for(let i = 0; i < 8; i++) widgetStore.addWidget("nicheDist", {
  saveResultID: Math.random().toString().substring(2,4)
});

let startPos = [0,0];
let isPanelScrolling = false;
let movingWidgetIndex = -1;

const isCtrl = ref(false);
const isWidgetMoving = ref(false);

const widgetSize = [250,200];
const widgetSizeScale = computed(() => (1 + (widgetSizeMode.value - 1) * 0.3));
const widgetWidth = computed(() => (widgetSize[0] * widgetSizeScale.value + 'px'))
const widgetHeight = computed(() => (widgetSize[1] * widgetSizeScale.value + 'px'))

const scrollTimerHandlersArray = [-1,-1,-1,-1];

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey)
    isCtrl.value = true;
});

window.addEventListener('keyup', (e) => {
  if (!e.ctrlKey)
    isCtrl.value = false;
});

window.addEventListener('mousemove', (e) => {
  if(container.value) onWidgetMoveEdgeScroll(e, container.value);
})

function onEditClick(w: Widget, ind: number){
  actions.openWidgetSettingsOverlay(w.widgetName, {index: ind})
}

function onPanelMouseDown(e: MouseEvent){
  if(!e.ctrlKey || !container.value) return;
  startPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  isPanelScrolling = true;
}

function onPanelMouseUp(){
  isPanelScrolling = false;
}

function onPanelMouseLeave(){
  isPanelScrolling = false;
  isCtrl.value = false;
}

function onPanelMouseMove(e: MouseEvent){
  if(isPanelScrolling && !e.ctrlKey) isPanelScrolling = false;
  if(!isPanelScrolling || !container.value) return;
  e.preventDefault();
  const currentPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  const move = ([startPos[0] - currentPos[0], startPos[1] - currentPos[1]]);
  if(container.value) {
    container.value.scrollTop += move[1] * 2;
    container.value.scrollLeft += move[0] * 2;
  }
  startPos = currentPos;
}

function onWidgetMouseEnter(idx: number){
  if(!isWidgetMoving.value || (idx === movingWidgetIndex)) return;
  widgetStore.getWidget(idx).targetIndex = widgetStore.getWidget(movingWidgetIndex).gridIndex;
}

function onWidgetMouseLeave(idx: number) {
  widgetStore.getWidget(idx).targetIndex = -1;
}

function onWidgetMoveStart(idx: number){
  isWidgetMoving.value = true;
  movingWidgetIndex = idx;
}

function onWidgetMoveStop(ind: number){
  isWidgetMoving.value = false;
  scrollTimerHandlersArray.forEach((t, ind) => clearScrollInterval(ind));
  widgetStore.swapPosition(ind);
}

const onWidgetMoveEdgeScroll = _.throttle((e: MouseEvent, panel: HTMLElement) => {
  if(!isWidgetMoving.value) return;
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

  if(mousePos[0] < (panelPos[0] + offset)){
    clearScrollInterval(0)
    scrollTimerHandlersArray[0] = window.setInterval(() => {
      panel.scrollLeft -= step * moveSpeedScale[0];
    }, delay);
  } else clearScrollInterval(0)

  if (mousePos[1] < (panelPos[1] + offset)){
    clearScrollInterval(1)
    scrollTimerHandlersArray[1] = window.setInterval(() => {
      panel.scrollTop -= step * moveSpeedScale[1];
    }, delay);
  } else clearScrollInterval(1)

  if (mousePos[0] > (panelPos[0] + panelSize.width - offset)){
    clearScrollInterval(2)
    scrollTimerHandlersArray[2] = window.setInterval(() => {
      panel.scrollLeft += step * moveSpeedScale[2];
    }, delay);
  } else clearScrollInterval(2)

  if (mousePos[1] > (panelPos[1] + panelSize.height - offset)){
    clearScrollInterval(3)
    scrollTimerHandlersArray[3] = window.setInterval(() => {
      panel.scrollTop += step * moveSpeedScale[3];
    }, delay);
  } else clearScrollInterval(3)
}, 100);

function clearScrollInterval(id: number){
  clearInterval(scrollTimerHandlersArray[id]);
  scrollTimerHandlersArray[id] = -1;
}
</script>

<style lang="scss">
.main-section-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  --widget-width: v-bind(widgetWidth);
  --widget-height: v-bind(widgetHeight);
  --grid-gap: 20px;

  .widget-panel {
    display: grid;
    grid-template-columns: repeat(v-bind(gridWidth), var(--widget-width));
    grid-gap: var(--grid-gap);
    width: fit-content;
    height: fit-content;
    padding: 30px;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: auto;

    &.scrollable {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
      *{
        pointer-events: none;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .widget-panel-buttons{
    position: absolute;
    bottom: 40px;
    right: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: fit-content;
    height: fit-content;
    z-index: 10;

    .widget-panel-settings-button{
      flex: 0 0 auto;
      width: 80px;
      height: 80px;
    }

    .widget-add-button{
      flex: 0 0 auto;
      width: 120px;
      height: 120px;
      margin-left: 20px;
    }
  }

  .size-select{
    display: inline-flex;
  }
}
</style>