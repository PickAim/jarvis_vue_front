<template>
  <div class="overlay-decorate-wrapper">
    <OverlayTemplate :header-text="headerText">
      <slot/>
    </OverlayTemplate>
  </div>
  <!--  TODO: make decoration-->
</template>

<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";
import {defineProps} from "vue";

defineProps<{
  headerText: string
}>()
</script>

<style scoped lang="scss">
.overlay-decorate-wrapper{
  background-color: white;
}
</style>