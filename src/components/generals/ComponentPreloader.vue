<script setup lang="ts">
import LogoRotating from "@/components/icon/LogoRotating.vue";

defineProps<{ isLoading: boolean }>()
</script>

<template>
  <div :class="{active: isLoading}" class="preloader">
    <LogoRotating/>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  background-color: black;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  perspective: 225px;
  transition: 0.3s;
  pointer-events: none;

  &.active {
    pointer-events: all;
    opacity: 1;
  }
}
</style>
