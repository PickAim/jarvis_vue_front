<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";

defineProps<{
  headerText: string
}>()
</script>

<template>
  <div class="overlay-decorate-wrapper">
    <OverlayTemplate :header-text="headerText">
      <slot/>
    </OverlayTemplate>
  </div>
  <!--  TODO: make decoration-->
</template>

<style scoped lang="scss">
.overlay-decorate-wrapper {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
}
</style>
