<script setup lang="ts">

import {useOverlayStateStore} from "@/stores/overlayStore";

const {closeOverlay} = useOverlayStateStore()
</script>

<template>
  <header>
    <span class="header-text">
      <slot/>
    </span>
    <button class="close-button" @click="closeOverlay()">○</button>
  </header>
  <!--  TODO: make header-->
</template>

<style scoped lang="scss">
$headerHeight: 50px;
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: $headerHeight;

  .header-text {
    font-size: 30px;
    height: 100%;
    line-height: $headerHeight;
    vertical-align: center;
    flex-grow: 1;
    text-align: center;
  }

  .close-button {
    height: $headerHeight;
    width: $headerHeight;
    color: #FFFFFF;
  }
}
</style>
