<script setup lang="ts">
defineEmits(['click'])
withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<template>
  <button class="button-wrapper" @click="(e) => $emit('click', e)" :disabled="disabled" :class="{ enabled: !disabled }">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.button-wrapper {
  min-width: 200px;
  min-height: 63px;
  color: #000;
  border-radius: 12px;
  background: var.$green-jarvis-color;
  padding: 5px 14px;
  font-weight: 700;
  font-size: 23px;
  backdrop-filter: blur(15px);

  &.enabled {
    &:hover {
      //border-color: var.$green-jarvis-color;
    }

    &:active {
      //border-color: #d2ff8d;
    }
  }
}
</style>
