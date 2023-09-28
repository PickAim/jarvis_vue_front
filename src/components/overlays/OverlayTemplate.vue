<script setup lang="ts">
import OverlayHeader from "@/components/overlays/OverlayHeader.vue";

defineProps<{
  headerText: string
}>()
</script>

<template>
  <div class="template-wrapper" ref="templateWrapper">
    <OverlayHeader class="header">{{ headerText }}</OverlayHeader>
    <div class="main-wrapper">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.template-wrapper {
  position: relative;
  max-height: 90vh;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    width: 100%;
  }

  .main-wrapper {
    flex: 1 0 auto;
    display: flex;
    overflow-y: auto;
    opacity: 1;
  }
}
</style>
