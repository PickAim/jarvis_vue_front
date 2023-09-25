<script setup lang="ts">

</script>

<template>
  <div class="preloader-wrapper"/>
</template>

<style scoped lang="scss">
@keyframes blinking-animation {
  0% {
    background: #222;
  }

  100% {
    background: #999;
  }
}

.preloader-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  animation: blinking-animation 0.5s infinite running;
  animation-direction: alternate;
}
</style>