<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";

defineProps<{
  headerText: string
}>()
</script>

<template>
  <div class="overlay-menu-wrapper">
    <OverlayTemplate :header-text="headerText">
      <slot name="menu"/>
      <slot/>
    </OverlayTemplate>
  </div>
  <!--  TODO: make decoration-->
</template>

<style scoped>

</style>
