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
import OverlayHeader from "@/components/overlays/OverlayHeader.vue";
import {defineProps} from "vue";

defineProps<{
  headerText: string
}>()
</script>

<style scoped>

</style>
