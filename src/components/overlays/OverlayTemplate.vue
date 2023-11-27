<script setup lang="ts">
import {useOverlayStateStore} from "@/stores/overlayStore";

defineProps<{
  headerText: string
}>()

const {closeOverlay} = useOverlayStateStore()
</script>

<template>
  <div class="template-wrapper" ref="templateWrapper">
    <button class="close-button" @click="closeOverlay()">○</button>
    <div class="main-wrapper">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.template-wrapper {
  position: relative;
  //max-height: 900vh;
  //min-height: 65vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: visible;

  .close-button {
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
    color: #FFFFFF;
  }

  .main-wrapper {
    flex: 1 0 auto;
    display: flex;
    overflow-y: hidden;
    opacity: 1;
  }
}
</style>
