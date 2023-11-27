<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";

defineProps<{
  headerText: string
}>()
</script>

<template>
  <OverlayTemplate :header-text="headerText">
    <slot/>
  </OverlayTemplate>
  <!--  TODO: make decoration-->
</template>

<style scoped lang="scss">
</style>
