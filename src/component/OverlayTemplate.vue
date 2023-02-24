<template>
  <div class="template-wrapper" ref="templateWrapper">
    <div :class="{active: isLoading}" class="loader">
      <LogoRotating/>
    </div>
    <OverlayHeader class="header">{{headerText}}</OverlayHeader>
    <div class="main-wrapper">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import OverlayHeader from "./OverlayHeader.vue"
import {defineProps} from "vue";
import {storeToRefs} from "pinia";
import {useOverlayStateStore} from "@/stores/overlayStore";
import LogoRotating from "@/component/icon/LogoRotating.vue"

const {isLoading} = storeToRefs(useOverlayStateStore())

defineProps<{
  headerText: string
}>()
</script>

<style scoped lang="scss">
  .template-wrapper{
    position: relative;

    .loader{
      background-color: black;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      top:0;
      left:0;
      z-index: 10;
      background-color: rgba(0,0,0,0.8);
      opacity: 0;
      transition: 0.3s;
      pointer-events: none;

      &.active{
        pointer-events: all;
        opacity: 1;
      }
    }

    .header{
      width: 100%;
    }

    .main-wrapper{

    }
  }
</style>
