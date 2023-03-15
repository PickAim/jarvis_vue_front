<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>Главная страница</template>
    <div class="main-section-wrapper">
      <div class="widget-table"
           :class="{scrollable: isCtrl}"
           @mousedown="onPanelMouseDown"
           @mousemove="onPanelMouseMove"
           @mouseup="onPanelMouseUp"
           @mouseleave="onPanelMouseLeave"
           ref="container">
        <WidgetContainer v-for="(w, idx) in widgetList"
                                        :key="idx"
                                        :index="w.index"
                                        :grid-width="gridWidth"
                                        :target-index="w.targetIndex"
                                        :isOtherMoving="isWidgetMoving"
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
import {ref} from "vue";

type Widget = {
  index: number,
  targetIndex: number,
}

const container = ref<HTMLElement | null>(null);
const widgetList = ref<Widget[]>([]);
for(let i = 0; i < 12; i++){
  widgetList.value.push({
    index: i,
    targetIndex: -1
  });
}

let startPos = [0,0];
let isPanelScrolling = false;
let isWidgetMoving = ref(false);
let movingWidgetIndex = -1;
let mouseOverWidgetIndex = -1;

const gridWidth = ref(5);
const isCtrl = ref(false);

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
  onWidgetMouseMove(e);
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
  scrollTimerHandlersArray.forEach(t => clearInterval(t));
  if(mouseOverWidgetIndex === -1 || (mouseOverWidgetIndex === movingWidgetIndex)) return;
  widgetList.value[idx].index = [widgetList.value[mouseOverWidgetIndex].index,
    widgetList.value[mouseOverWidgetIndex].index = widgetList.value[idx].index][0];
  mouseOverWidgetIndex = -1;
}

function onWidgetMouseMove(e: MouseEvent){
  if(!isWidgetMoving.value){
    return;
  }
  const panel = e.currentTarget as HTMLElement;
  const panelSize = panel.getBoundingClientRect();
  const panelPos = [panel.offsetLeft, panel.offsetTop];
  const mousePos = [e.pageX, e.pageY];
  const step = 10;
  const delay = 10;
  const offset = 100;

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

  function clearScrollInterval(id: number){
    console.warn(`Timer ${id} cleared`);
    clearInterval(scrollTimerHandlersArray[id]);
    scrollTimerHandlersArray[id] = -1;
  }
}
</script>

<style lang="scss">
.main-section-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  --widget-width: 200px;
  --widget-height: 200px;
  //--widget-width: 200px;
  //--widget-height: 150px;
  --grid-gap: 20px;

  .widget-table {
    display: grid;
    grid-template-columns: repeat(v-bind(gridWidth), var(--widget-width));
    grid-gap: var(--grid-gap);
    width: fit-content;
    height: fit-content;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    //overflow-y: hidden;
    //overflow-x: hidden;

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
}
</style>