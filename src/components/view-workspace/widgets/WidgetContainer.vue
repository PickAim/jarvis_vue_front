<template>
  <div class="widget-wrapper"
       :class="{move: isMoving, otherMove: isOtherMoving}"
       :style="gridStyle"
       @mouseover="(e) => emit('mouseEnter', e)"
       @mouseleave="(e) => emit('mouseLeave', e)">
  </div>
  <div class="widget"
       :class="{translated: options.targetIndex !== -1, move: isMoving, otherMove: isOtherMoving}"
       :style="gridStyle"
       @mousedown="movingStart"
       @dragstart="()=>{return false;}">
    <header>
      <div class="move-button"/>
      <div class="close-button"/>
    </header>
    <main>
      <BarChart class="bar-chart" :font-size="widgetSize*4"/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed, ref} from "vue";
import BarChart from "@/components/view-workspace/visualizers/BarChart.vue";
import type {WidgetOptions} from "@/Objects";

const props = defineProps<{
  gridWidth: number,
  options: WidgetOptions,
  widgetSize: number
  isOtherMoving: boolean
}>();

const emit = defineEmits<{
  (e: 'moveStart'): void,
  (e: 'moveStop'): void,
  (e: 'mouseEnter', ev: MouseEvent): void,
  (e: 'mouseLeave', ev: MouseEvent): void,
}>();

const isMoving = ref(false);
const startOffset = ref([0, 0])
const topPosition = ref(0);
const leftPosition = ref(0);

const gridColumn = computed(() => Math.floor((props.options.index) % props.gridWidth) + 1);
const gridRow = computed(() => Math.floor((props.options.index) / props.gridWidth) + 1);

const columnDelta = computed(() => Math.floor(props.options.targetIndex % props.gridWidth) + 1 - gridColumn.value);
const rowDelta = computed(() => Math.floor(props.options.targetIndex / props.gridWidth) + 1 - gridRow.value);
const gridStyle = computed(() => { return {
  gridColumn: gridColumn.value,
  gridRow: gridRow.value,
  top: topPosition.value + 'px',
  left: leftPosition.value + 'px'
}})

function movingStart(e: MouseEvent){
  const el = (e.target as HTMLElement);
  if(el.className === "move-button") {
    emit('moveStart');
    document.addEventListener('mouseup', movingStop);
    isMoving.value = true;
    startOffset.value = [e.offsetX + 15, e.offsetY + 10];
    mouseMove(e);
  }
}

function movingStop(){
  emit('moveStop');
  document.removeEventListener('mouseup', movingStop);
  isMoving.value = false;
}

function mouseMove(e: MouseEvent){
  topPosition.value = e.pageY - startOffset.value[1];
  leftPosition.value = e.pageX - startOffset.value[0];
}

document.addEventListener('mousemove', mouseMove);


</script>

<style scoped lang="scss">
$width: var(--widget-width);
$height: var(--widget-height);
$grid-gap: var(--grid-gap);

.widget-wrapper {
  width: $width;
  height: $height;
  border-radius: 20px;
  background-color: transparent;
  pointer-events: none;
  z-index: 2;
  border: 1px dashed transparent;
  transition: border-color 0.2s;

  &.move, &.otherMove{
    pointer-events: unset;
    border-color: white;
  }
}

.widget{
  background-color: black;
  display: flex;
  width: $width;
  max-height: $height;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0;
  opacity: 1;
  transition: box-shadow 0.1s, opacity 0.1s;
  user-select: none;

  &.translated{
    transform: translate(
            calc(v-bind(columnDelta) * calc(100% + $grid-gap)),
            calc(v-bind(rowDelta) * calc(100% + $grid-gap)));
  }

  &.move{
    position: absolute;
    opacity: 0.8;
    box-shadow: 10px 10px 20px 5px black;
    pointer-events: none;
    z-index: 5;
  }

  &.otherMove{
    transition: box-shadow 0.1s, opacity 0.1s, transform 0.2s;
  }

  header{
    height: 40px;
    flex: 0 0 auto;
    background-color: #111;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .move-button{
      flex: 0 0 auto;
      width: 20px;
      height: 20px;
      margin-left: 15px;
      background-color: #444444;
      cursor: move
    }
  }

  main {
    color: white;
    flex: 1 0;
    overflow: hidden;
    background-color: #000;

    .bar-chart {
      height: 100%;
    }
  }

  footer{
    height: 40px;
    flex: 0 0 auto;
    background-color: #111;
  }
}
</style>