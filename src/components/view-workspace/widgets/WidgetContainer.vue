<template>
  <div class="widget-place"
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
      <div class="move-button">M</div>
      <div class="right-buttons-wrapper">
        <ControlButtonRound class="edit-button" @click="emit('edit')">E</ControlButtonRound>
        <ControlButtonRound class="close-button" @click="emit('close')">C</ControlButtonRound>
      </div>
    </header>
    <main>
      <component :is="widgets[options.widgetName]"
                 :options="options"
                 :widgetSize="WidgetSize"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed, ref} from "vue";
import type {Widget} from "@/types/Objects";
import {widgets} from "@/components/view-workspace/widgets/index";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";

const props = defineProps<{
  gridWidth: number,
  options: Widget,
  widgetSize: number
  isOtherMoving: boolean
}>();

const emit = defineEmits<{
  (e: 'moveStart'): void,
  (e: 'moveStop'): void,
  (e: 'mouseEnter', ev: MouseEvent): void,
  (e: 'mouseLeave', ev: MouseEvent): void,
  (e: 'edit'): void,
  (e: 'close'): void
}>();

// const loadedWidgets = Object.keys(widgets).reduce((obj, name)=>{
//   return Object.assign(obj, {
//     [name]: defineAsyncComponent(() => import(widgets[name as WidgetName]))
//   })
// }, {})

const isMoving = ref(false);
const startOffset = ref([0, 0])
const topPosition = ref(0);
const leftPosition = ref(0);

const gridColumn = computed(() => Math.floor((props.options.gridIndex) % props.gridWidth) + 1);
const gridRow = computed(() => Math.floor((props.options.gridIndex) / props.gridWidth) + 1);

const columnDelta = computed(() => Math.floor(props.options.targetIndex % props.gridWidth) + 1 - gridColumn.value);
const rowDelta = computed(() => Math.floor(props.options.targetIndex / props.gridWidth) + 1 - gridRow.value);
const gridStyle = computed(() => { return {
  gridColumn: gridColumn.value,
  gridRow: gridRow.value,
  top: topPosition.value + 'px',
  left: leftPosition.value + 'px'
}})

function movingStart(e: MouseEvent){
  const target = e.target as HTMLElement;
  const widget = e.currentTarget as HTMLElement;
  const panel = widget.parentElement;

  if(target.className === "move-button" && widget && panel) {
    emit('moveStart');
    document.addEventListener('mouseup', movingStop);
    isMoving.value = true;
    startOffset.value = [e.pageX - widget.offsetLeft + panel.scrollLeft, e.pageY - widget.offsetTop + panel.scrollTop];
    mouseMove(e);
  }
}

function movingStop(){
  emit('moveStop');
  document.removeEventListener('mouseup', movingStop);
  isMoving.value = false;
}

function mouseMove(e: MouseEvent){
  if(!isMoving.value) return;
  topPosition.value = e.pageY - startOffset.value[1];
  leftPosition.value = e.pageX - startOffset.value[0];
}

document.addEventListener('mousemove', mouseMove);


</script>

<style scoped lang="scss">
$width: var(--widget-width);
$height: var(--widget-height);
$grid-gap: var(--grid-gap);

.widget-place {
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
  justify-content: flex-start;
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
      margin-left: 20px;
      width: 20px;
      height: 30px;
      background-color: #444444;
      cursor: move;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right-buttons-wrapper{
      display: flex;
      flex-direction: row;
      margin-right: 10px;

      *{
        flex: 0 0 auto;
        margin-left: 8px;
        width: 30px;
        height: 30px;
      }
    }
  }

  main {
    color: white;
    flex: 1 0;
    overflow: hidden;
    background-color: #000;
    display: flex;
  }
}
</style>