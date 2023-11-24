<script setup lang="ts">
const emit = defineEmits<{
  (e: "submit"): void
}>()

function onKeyDown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    emit("submit");
  }
}
</script>

<template>
  <div class="form-wrapper" @keydown="onKeyDown">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>