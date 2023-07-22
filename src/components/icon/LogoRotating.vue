<template>
  <div class="logo_rotating" ref="logo">
    <img src="/src/assets/Logo.svg" alt="">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@keyframes logoRounding {
  0% {
    transform: rotate3d(0, 1, 0, 0);
  }
  50% {
    transform: rotate3d(0, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0);
  }
}

.logo_rotating {
  max-width: v-bind("maxWidth");
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in;

  animation-name: logoRounding;
  animation-timing-function: cubic-bezier(.47, .1, .52, .85);
  animation-duration: 2s;
  animation-iteration-count: infinite;

  img {
    height: 100%;
    width: 100%;
  }
}

</style>
