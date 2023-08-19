<template>
  <div class="template-wrapper" ref="templateWrapper">
    <OverlayHeader class="header">{{headerText}}</OverlayHeader>
    <div class="main-wrapper">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import OverlayHeader from "@/components/overlays/OverlayHeader.vue";

defineProps<{
  headerText: string
}>()
</script>

<style scoped lang="scss">
.template-wrapper{
  position: relative;
  max-height: 90vh;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;

  .header{
    width: 100%;
  }

  .main-wrapper{
    overflow-y: auto;
    height: 100%;
  }
}
</style>
