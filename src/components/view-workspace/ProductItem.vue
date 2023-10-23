<script setup lang="ts">
import {ref} from "vue";
import type {ResultProductData} from "@/types/DataTypes";

const props = defineProps<{
  productItem: ResultProductData
}>();

const emit = defineEmits<{
  (e: 'select'): void
}>()

const xDegrees = ref('0deg');
const yDegrees = ref('0deg');
const maxAngle = -17;

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
      <div class="product-info">
        <div class="cost-info info-text">Стоимость: {{ props.productItem.cost }} ₽</div>
        <div class="category-info info-text">Категория: {{ props.productItem.category }}</div>
        <div class="niche-info info-text">Ниша: {{ props.productItem.niche }}</div>
      </div>
      <div class="product-name">{{ props.productItem.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.product-effect-container {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 180px;
  perspective: 250px;
  padding: 10px 5px;
  overflow: visible;
  user-select: none;

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
  background: var.$dark-gradient-color;
  backdrop-filter: blur(15px);
  border: 1px solid gray;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: rotateY(v-bind(xDegrees)) rotateX(v-bind(yDegrees));
  transition: transform 1s cubic-bezier(0, 0.35, 0.14, 0.99), border-color 0.3s;

  .product-info {
    flex: 1 0;
    border-bottom: 1px solid white;
    padding-top: 5px;

    .info-text {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-inline: 15px;
      font-size: 12px;
    }
  }

  .product-name {
    width: 100%;
    font-size: 12px;
    padding: 5px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    border-color: #666;
  }
}
</style>