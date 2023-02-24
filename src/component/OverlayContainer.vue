<template>
  <div class="block-background" />
  <div class="overlay-body">
    <component :is="overlayName"/>
  </div>
</template>

<script setup lang="ts">
  import OverlayBodyLogin from "@/component/OverlayBodyLogin.vue"
  import OverlayBodyRegistration from "@/component/OverlayBodyRegistration.vue"
  import OverlayBodyControlPanel from "@/component/OverlayBodyControlPanel.vue"

  let overlayName = ""
  overlayName = "LoginOverlay"
</script>

<style scoped>

</style>
