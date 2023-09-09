<template>
  <button class="button-wrapper" @click="(e) => $emit('click', e)" :disabled="disabled" :class="{ enabled: !disabled }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from "vue";

defineEmits(['click'])
withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<style scoped lang="scss">
.button-wrapper {
  min-width: 200px;
  min-height: 40px;
  color: #000;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: #B7FF44;
  padding: 5px 40px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 20px;
  backdrop-filter: blur(15px);

  &.enabled {
    &:hover {
      border-color: #B7FF44;
    }

    &:active {
      border-color: #d2ff8d;
    }
  }
}
</style>
