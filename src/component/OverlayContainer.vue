<template>
  <div class="block-background" />
  <div class="overlay-body">
    <component :is="overlayName"/>
  </div>
</template>

<script setup lang="ts">
  import LoginOverlay from "@/component/overlay/LoginOverlay.vue"
  import RegOverlay from "@/component/overlay/RegOverlay.vue"
  import ControlPanelOverlay from "@/component/overlay/ControlPanelOverlay.vue"

  let overlayName = ""
  overlayName = "LoginOverlay"
</script>

<style scoped>

</style>
