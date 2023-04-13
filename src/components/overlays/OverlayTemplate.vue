<template>
  <div class="template-wrapper" ref="templateWrapper">
    <ComponentPreloader :is-loading="isLoading"/>
    <OverlayHeader class="header">{{headerText}}</OverlayHeader>
    <div class="main-wrapper">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import OverlayHeader from "@/components/overlays/OverlayHeader.vue";
import {defineProps} from "vue";
import {storeToRefs} from "pinia";
import {useOverlayStateStore} from "@/stores/overlayStore";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";

const {isLoading} = storeToRefs(useOverlayStateStore())

defineProps<{
  headerText: string
}>()

console.log("TEMPLATE")
</script>

<style scoped lang="scss">
.template-wrapper{
  position: relative;
  max-height: 90vh;
  min-height: 65vh;
  display: flex;
  flex-direction: column;

  .header{
    width: 100%;
  }

  .main-wrapper{
    overflow-y: auto;
    height: 100%;
  }
}
</style>
