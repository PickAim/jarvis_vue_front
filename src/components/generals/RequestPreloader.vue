<template>
  <div :class="{active: isLoading}" class="preloader">
    <LogoRotating/>
  </div>
</template>

<script setup lang="ts">
import LogoRotating from "@/components/icon/LogoRotating.vue";

defineProps<{ isLoading: boolean }>()
</script>

<style scoped lang="scss">
.preloader {
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 90px;
  bottom: 50px;
  left: 50px;
  padding: 10px;
  opacity: 0;
  border-radius: 999px;
  z-index: 200;
  transition: 0.3s;

  &.active {
    pointer-events: all;
    opacity: 1;
  }
}
</style>
