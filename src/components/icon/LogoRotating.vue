<script setup lang="ts">
import {onMounted, ref} from "vue";

const logo = ref<HTMLElement>(null as HTMLElement);
const logoHeight = ref("100%");

onMounted(() => {
  logoHeight.value = Math.min(logo.value.clientWidth, logo.value.clientHeight) * 0.8 + 'px';
});

</script>

<template>
  <div class="logo_rotating" ref="logo">
    <div class="logo"/>
  </div>
</template>

<style scoped lang="scss">
@keyframes logoRounding {
  0% {
    transform: rotate3d(0, 1, 0, 0);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}

.logo_rotating {
  height: min(300px, v-bind(logoHeight));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: opacity 0.3s ease-in;

  background-image: url('src/assets/images/jarvis_icon_big.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  animation-name: logoRounding;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

</style>
