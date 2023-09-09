<script setup lang="ts">
import {onMounted, ref} from "vue";

defineProps<{ isLoading: boolean }>()
const gradientDegrees = ref("95deg");
const preloader = ref<HTMLElement>(null);
onMounted(() => {
  if (!preloader.value) return;
  gradientDegrees.value = (Math.atan(preloader.value.clientWidth / 2 / preloader.value.clientHeight) * 180 / Math.PI + 90) + "deg";
});
</script>

<template>
  <div :class="{active: isLoading}" class="preloader" ref="preloader">
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  //z-index: 100;
  background: linear-gradient(100deg, rgba(0, 0, 0, 0.8) 40%, rgba(100, 100, 100, 0.5) 42%,
      rgba(100, 100, 100, 0.5) 58%, rgba(0, 0, 0, 0.8) 60%);

  background-size: 300% 100%;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
  animation: 4s linear infinite paused line-animation;

  &.active {
    animation-play-state: running;
    pointer-events: all;
    opacity: 1;
  }
}

@keyframes line-animation {
  0% {
    background-position-x: 300%;
  }
  100% {
    background-position-x: -300%;
  }
}
</style>
