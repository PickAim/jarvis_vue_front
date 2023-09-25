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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  position: fixed;

  .background-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    transition: all 0.2s;
    opacity: 1;

    > * {
      transition: all 0.2s;
      opacity: 0;
    }
  }
}

.overlay-container-wrapper.active {
  pointer-events: all;

  .background-wrapper {
    background: rgba(0, 0, 0, 0.5);

    > * {
      opacity: 1;
    }
  }
}
</style>
