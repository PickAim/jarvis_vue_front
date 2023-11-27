<script setup lang="ts">
import {overlays} from "@/components/overlays/index"
import {useOverlayStateStore} from "@/stores/overlayStore";
import {storeToRefs} from "pinia";

const overlayState = useOverlayStateStore();
const {overlayName, isOpen} = storeToRefs(overlayState)

function backgroundPointerDown() {
  overlayState.closeOverlay();
}

</script>

<template>
  <div class="overlay-container-wrapper" :class="{active: isOpen}">
    <div class="background-wrapper"
         @pointerdown="backgroundPointerDown">
      <component :is="overlays[overlayName]"
                 :options="overlayState.overlayOptions" @pointerdown="(e) => e.stopPropagation()"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay-container-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  clip-path: inset(0 0 100% 0);
  pointer-events: none;
  z-index: 100;
  transition: clip-path 0.2s;
  overflow: auto;

  .background-wrapper {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 10px;
    overflow: auto;
  }
}

.overlay-container-wrapper.active {
  pointer-events: all;
  clip-path: inset(0 0 0 0);
}
</style>
