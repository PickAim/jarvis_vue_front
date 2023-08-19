<script setup lang="ts">
import {ref} from "vue";
import type {ProductData} from "@/types/DataTypes";

const props = defineProps<{
  productItem: ProductData
}>();

const emit = defineEmits<{
  (e: 'select'): void
}>()

const xDegrees = ref('0deg');
const yDegrees = ref('0deg');
const maxAngle = -30;

function onMouseMove(e: MouseEvent) {
  const currentTarget = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const target = (e.target as HTMLElement).getBoundingClientRect();
  const mouseX = target.x - currentTarget.x + e.offsetX;
  const mouseY = target.y - currentTarget.y + e.offsetY;
  xDegrees.value = ((mouseX / currentTarget.width) - 0.5) * maxAngle + 'deg';
  yDegrees.value = -((mouseY / currentTarget.height) - 0.5) * maxAngle + 'deg';
}

function onMouseLeave() {
  xDegrees.value = yDegrees.value = '0deg';
}

</script>

<template>
  <div class="product-effect-container"
       @mousemove="onMouseMove"
       @mouseleave="onMouseLeave">
    <div class="product" @click="emit('select')">
      <div class="product-icon"/>
      <div class="product-name">{{ props.productItem.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-effect-container {
  display: flex;
  flex-direction: column;
  width: 180px;
  perspective: 250px;
  padding: 10px 5px;
  overflow: visible;

  &.selected {
    .product {
      border-color: white;
      transform: rotateX(0) rotateY(0);
      transition: transform 0.2s cubic-bezier(0, 0.35, 0.14, 0.99), border-color 0.3s;
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 30px;
  border: 2px solid black;
  overflow: hidden;
  background: #000;
  transform-style: preserve-3d;
  transform: rotateY(v-bind(xDegrees)) rotateX(v-bind(yDegrees));
  transition: transform 1s cubic-bezier(0, 0.35, 0.14, 0.99), border-color 0.3s;

  .product-icon {
    flex: 1 0;
    background: white;
  }

  .product-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    font-size: 12px;
    width: 100%;
  }

  &:hover {
    border-color: #666;
  }
}
</style>