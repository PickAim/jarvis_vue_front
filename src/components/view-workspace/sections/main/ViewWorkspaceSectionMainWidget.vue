<template>
  <div class="widget-wrapper" :class="{move: isMoving}">
    <div class="widget"
         :class="{translated: targetIndex !== -1, move: isMoving}"
         :style="{top: topPosition + 'px', left: leftPosition + 'px'}"
         @mousedown="movingStart"
         @dragstart="()=>{return false;}">
      <header>
        <div class="move-button"/>
        <div class="close-button"/>
      </header>
      <main>
        {{index}}
      </main>
      <footer>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, withDefaults, computed, ref} from "vue";

const props = withDefaults(defineProps<{
  gridWidth: number,
  index: number,
  targetIndex?: number,
}>(), {
  targetIndex: -1
})

const gridColumn = computed(() => Math.floor(props.index % props.gridWidth) + 1);
const gridRow = computed(() => Math.floor(props.index / props.gridWidth) + 1);

const columnDelta = computed(() => Math.floor(props.targetIndex % props.gridWidth) + 1 - gridColumn.value);
const rowDelta = computed(() => Math.floor(props.targetIndex / props.gridWidth) + 1 - gridRow.value);

const isMoving = ref(false);
const startOffset = ref([0, 0])
const topPosition = ref(0);
const leftPosition = ref(0);

function movingStart(e: MouseEvent){
  const el = (e.target as HTMLElement);
  if(el.className === "move-button") {
    isMoving.value = true;
    console.log(e.offsetX)
    startOffset.value = [e.offsetX + 15, e.offsetY + 10];
    mouseMove(e);
  }
}

function movingStop(){
  isMoving.value = false;
  console.log("STOP");
}

function mouseMove(e: MouseEvent){
  topPosition.value = e.pageY - startOffset.value[1];
  leftPosition.value = e.pageX - startOffset.value[0];
}

document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', movingStop)

</script>

<style scoped lang="scss">
$width: 500px;
$height: 350px;

.widget-wrapper {
  width: $width;
  height: $height;
  border: 0 solid black;
  grid-column: v-bind(gridColumn);
  grid-row: v-bind(gridRow);
  border-radius: 20px;

  &.move{
    border: 2px dashed black;
  }
}
.widget{
  background-color: black;
  display: flex;
  width: $width;
  height: $height;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0;
  transition: box-shadow 0.1s, opacity 0.1s;
  user-select: none;

  &.translated{
    transform: translate(
            calc(v-bind(columnDelta) * calc(100% + 10px)),
            calc(v-bind(rowDelta) * calc(100% + 10px)));
  }
  &.move{
    position: absolute;
    opacity: 0.8;
    box-shadow: 10px 10px 20px 5px black;
  }
  header{
    height: 40px;
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
    }
  }
  main{
    color: white;
    flex: 1 0;
    background-color: #000;
  }
  footer{
    height: 40px;
    background-color: #111;
  }
}
</style>