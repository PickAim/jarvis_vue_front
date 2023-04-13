<template>
  <div class="overlay-menu-wrapper">
    <OverlayTemplate :header-text="headerText">
      <slot name="menu"/>
      <slot/>
    </OverlayTemplate>
  </div>
  <!--  TODO: make decoration-->
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";

defineProps<{
  headerText: string
}>()
</script>

<style scoped>

</style>
