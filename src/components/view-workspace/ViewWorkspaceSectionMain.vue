<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>Главная страница</template>
    <div class="main-section-wrapper">
      <div class="size-select">
        <ControlButton v-for="i in [1,2,3,4]" :key="i" @click="widgetSize=i">{{i}}</ControlButton>
      </div>
      <div class="widget-panel-buttons">
        <ControlButtonRound class="widget-panel-settings-button"/>
        <ControlButtonRound class="add-widget-button"/>
      </div>
      <div class="widget-panel"
           :class="{scrollable: isCtrl}"
           @mousedown="onPanelMouseDown"
           @mousemove="(e) => {onPanelMouseMove(e); onWidgetMoveEdgeScroll(e);}"
           @mouseup="onPanelMouseUp"
           @mouseleave="onPanelMouseLeave"
           ref="container">
        <WidgetContainer v-for="(w, idx) in widgetList"
                         :key="idx"
                         :options="w"
                         :grid-width="gridWidth"
                         :widget-size="widgetSize"
                         :is-other-moving="isWidgetMoving"
                         @mouse-enter="onWidgetMouseEnter(idx)"
                         @mouse-leave="onWidgetMouseLeave(idx)"
                         @move-start="onWidgetMoveStart(idx)"
                         @move-stop="onWidgetMoveStop(idx)"/>
      </div>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/ViewWorkspaceSectionContainer.vue";
import WidgetContainer
  from "@/components/view-workspace/widgets/WidgetContainer.vue";
import {computed, ref} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {WidgetOptions} from "@/Objects";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";

const container = ref<HTMLElement | null>(null);
const widgetList = ref<WidgetOptions[]>([]);

for(let i = 0; i < 12; i++){
  widgetList.value.push({
    index: i,
    targetIndex: -1,
    widgetName: "unitCalcResult"
  });
}

let startPos = [0,0];
let isPanelScrolling = false;
let movingWidgetIndex = -1;
let mouseOverWidgetIndex = -1;

const gridWidth = ref(5);
const widgetSize = ref(4);
const isCtrl = ref(false);
let isWidgetMoving = ref(false);

const widgetWidthVariants = [100,200,300,400];
const widgetWidth = computed(() => widgetWidthVariants[widgetSize.value - 1] + 'px')

// const widgetHeightVariants = [100,200,300,400];
const widgetHeightVariants = [300,300,300,300];
const widgetHeight = computed(() => widgetHeightVariants[widgetSize.value - 1] + 'px')

const scrollTimerHandlersArray = [-1,-1,-1,-1];

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey)
    isCtrl.value = true;
});

window.addEventListener('keyup', (e) => {
  if (!e.ctrlKey)
    isCtrl.value = false;
});

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
  widgetList.value[idx].targetIndex = widgetList.value[movingWidgetIndex].index;
  mouseOverWidgetIndex = idx;
}

function onWidgetMouseLeave(idx: number) {
  widgetList.value[idx].targetIndex = -1;
  mouseOverWidgetIndex = -1;
}

function onWidgetMoveStart(idx: number){
  isWidgetMoving.value = true;
  movingWidgetIndex = idx;
}

function onWidgetMoveStop(idx: number){
  isWidgetMoving.value = false;
  scrollTimerHandlersArray.forEach((t, ind) => clearScrollInterval(ind));
  if(mouseOverWidgetIndex === -1 || (mouseOverWidgetIndex === movingWidgetIndex)) return;
  widgetList.value[idx].index = [widgetList.value[mouseOverWidgetIndex].index,
    widgetList.value[mouseOverWidgetIndex].index = widgetList.value[idx].index][0];
  mouseOverWidgetIndex = -1;
}

function onWidgetMoveEdgeScroll(e: MouseEvent){
  if(!isWidgetMoving.value) return;
  const panel = e.currentTarget as HTMLElement;
  const panelSize = panel.getBoundingClientRect();
  const panelPos = [panel.offsetLeft, panel.offsetTop];
  const mousePos = [e.pageX, e.pageY];
  const step = 10;
  const delay = 7;
  const offset = 200;

  if(mousePos[0] < (panelPos[0] + offset)){
    if(scrollTimerHandlersArray[0] === -1)
      scrollTimerHandlersArray[0] = setInterval(() => {
        panel.scrollLeft -= step;
      }, delay);
  } else clearScrollInterval(0)

  if (mousePos[1] < (panelPos[1] + offset)){
    if(scrollTimerHandlersArray[1] === -1)
      scrollTimerHandlersArray[1] = setInterval(() => {
        panel.scrollTop -= step;
      }, delay);
  } else clearScrollInterval(1)

  if (mousePos[0] > (panelPos[0] + panelSize.width - offset)){
    if(scrollTimerHandlersArray[2] === -1)
      scrollTimerHandlersArray[2] = setInterval(() => {
        panel.scrollLeft += step;
      }, delay);
  } else clearScrollInterval(2)

  if (mousePos[1] > (panelPos[1] + panelSize.height - offset)){
    if(scrollTimerHandlersArray[3] === -1)
      scrollTimerHandlersArray[3] = setInterval(() => {
        panel.scrollTop += step;
      }, delay);
  } else clearScrollInterval(3)
}

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
  justify-content: start;
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
    align-items: end;
    width: fit-content;
    height: fit-content;

    .widget-panel-settings-button{
      flex: 0 0 auto;
      width: 80px;
      height: 80px;
    }

    .add-widget-button{
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