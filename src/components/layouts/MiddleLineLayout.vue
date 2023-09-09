<script setup lang="ts">

import PaddingLayout from "@/components/layouts/PaddingLayout.vue";
</script>

<template>
  <PaddingLayout class="middle-layout">
    <div class="middle-wrapper">
      <slot></slot>
    </div>
  </PaddingLayout>
</template>

<style scoped lang="scss">
.middle-layout {
  align-items: center;
}

.middle-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
}
</style>