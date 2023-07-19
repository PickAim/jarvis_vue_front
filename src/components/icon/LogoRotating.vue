<template>
  <div class="logo_rotating" ref="logo">
    <img src="/src/assets/Logo.svg" alt="">
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const logo = ref<HTMLElement>();
const width = ref<string>("100%");
const maxWidth = ref("unset");

onMounted(() => {
  if (logo.value) {
    width.value = Math.min(logo.value.clientHeight, logo.value.clientWidth) * 0.7 + 'px';
    maxWidth.value = "100px";
  }
})
</script>

<style scoped lang="scss">
@keyframes logoRounding {
  0% {
    transform: rotate3d(0, 1, 0, 0);
  }
  6.25% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  12.5% {
    transform: rotate3d(0, 1, 0, 0);
  }
  18.75% {
    transform: rotate3d(1, 1, 0, 180deg);
  }
  25% {
    transform: rotate3d(1, 1, 0, 0);
  }
  31.25% {
    transform: rotate3d(1, 0, 0, 180deg);
  }
  37.5% {
    transform: rotate3d(1, 0, 0, 0);
  }
  43.75% {
    transform: rotate3d(1, -1, 0, 180deg);
  }
  50% {
    transform: rotate3d(1, -1, 0, 0);
  }
  56.25% {
    transform: rotate3d(0, -1, 0, 180deg);
  }
  62.5% {
    transform: rotate3d(0, -1, 0, 0);
  }
  68.75% {
    transform: rotate3d(-1, -1, 0, 180deg);
  }
  75% {
    transform: rotate3d(-1, -1, 0, 0);
  }
  81.25% {
    transform: rotate3d(-1, 0, 0, 180deg);
  }
  87.5% {
    transform: rotate3d(-1, 0, 0, 0);
  }
  93.75% {
    transform: rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(-1, 1, 0, 0);
  }
}

.logo_rotating {
  max-width: v-bind("maxWidth");
  width: v-bind("width");
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in;

  animation-name: logoRounding;
  animation-timing-function: cubic-bezier(.47, .1, .52, .85);
  animation-duration: 12s;
  animation-iteration-count: infinite;
}

</style>
