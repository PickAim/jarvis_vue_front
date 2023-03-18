<template>
  <div class="overlay-container-wrapper" :class="{active: isOpen}">
    <div class="background-wrapper" @click="backgroundClick">
      <component :is="loadedOverlays[overlayName]" :options="overlayState.overlayOptions"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {overlays} from "@/components/overlays/index"
import {useOverlayStateStore} from "@/stores/overlayStore";
import {storeToRefs} from "pinia";
import {defineAsyncComponent} from "vue";
import type {OverlayName} from "@/Objects";

const overlayState = useOverlayStateStore();
const {overlayName, isOpen} = storeToRefs(overlayState)

const loadedOverlays = Object.keys(overlays).reduce((obj, name)=>{
  return Object.assign(obj, {
    [name]: defineAsyncComponent(() => import(overlays[name as OverlayName]))
  })
}, {})

function backgroundClick(e: Event){
  if(e.target === e.currentTarget) overlayState.closeOverlay();
  console.log("CLICK")
}

console.log("CONTAINER")
</script>

<style scoped lang="scss">
.overlay-container-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  position: fixed;

  .background-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    transition: all 0.6s;
    clip-path: circle(0% at 105% -5%);
  }
}

.overlay-container-wrapper.active{
  pointer-events: all;

  .background-wrapper{
    clip-path: circle(100%);
    background: rgba(0,0,0,0.5);
  }
}
</style>
