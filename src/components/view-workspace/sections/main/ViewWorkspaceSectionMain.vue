<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>Главная страница</template>
    <div class="main-section-wrapper">
      <div class="widget-table"
           :class="{scrollable: isCtrl}"
           @mousedown="onMouseDown"
           @mousemove="onMouseMove"
           @mouseup="onMouseUp"
           @mouseleave="onMouseLeave"
           ref="container">
        <ViewWorkspaceSectionMainWidget v-for="w in [...Array(10).keys()]"
                                        :key="w"
                                        :index="w"
                                        :grid-width="3"/>
      </div>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/sections/ViewWorkspaceSectionContainer.vue";
import ViewWorkspaceSectionMainWidget
  from "@/components/view-workspace/sections/main/ViewWorkspaceSectionMainWidget.vue";
import {ref} from "vue";

// @ts-ignore
const container = ref<HTMLElement>(null);

let scrollPos = [0,0];
let startPos = [0,0];
let isScrolling = false;
let isCtrl = ref(false);

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey)
    isCtrl.value = true;
});

window.addEventListener('keyup', (e) => {
  if (!e.ctrlKey)
    isCtrl.value = false;
});

function onMouseDown(e: MouseEvent){
  if(!e.ctrlKey) return;
  startPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  console.log(startPos)
  if(container.value)
    scrollPos = [container.value.scrollLeft, container.value.scrollTop];
  isScrolling = true;
}

function onMouseLeave(){
  isScrolling = false;
}

// function onMouseMove(e: MouseEvent){
//   if(isScrolling && !e.ctrlKey) isScrolling = false;
//   if(!isScrolling) return;
//   e.preventDefault();
//   const currentPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
//   const move = ([startPos[0] - currentPos[0], startPos[1] - currentPos[1]]);
//   console.warn(currentPos);
//   if(container.value) {
//     container.value.scrollTop = scrollPos[1] + move[1];
//     container.value.scrollLeft = scrollPos[0] + move[0];
//   }
// }
function onMouseMove(e: MouseEvent){
  if(isScrolling && !e.ctrlKey) isScrolling = false;
  if(!isScrolling) return;
  e.preventDefault();
  const currentPos = [e.pageX - container.value.offsetLeft, e.pageY - container.value.offsetTop];
  const move = ([startPos[0] - currentPos[0], startPos[1] - currentPos[1]]);
  if(container.value) {
    container.value.scrollTop += move[1] * 2;
    container.value.scrollLeft += move[0] * 2;
  }
  startPos = currentPos;
}

function onMouseUp(){
  isScrolling = false;
}
</script>

<style scoped lang="scss">
.main-section-wrapper {
  height: 100%;

  .widget-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;

    &.scrollable {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }
  }
}
</style>