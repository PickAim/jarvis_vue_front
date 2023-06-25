<template>
  <div class="button-wrapper">
    <button @click="(e) => $emit('click', e)" :disabled="disabled" :class="{enabled: !disabled}">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, withDefaults} from "vue";

defineEmits(['click'])
withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<style scoped lang="scss">
.button-wrapper{
  width: 200px;
  height: 70px;
}

button{
  width: 100%;
  background-color: transparent;
  border: 1px solid #B7FF44;
border-radius: 11px;
color: #FFFFFF;
padding: 14px 49px;
 &.enabled {
    &:hover {
      border-width: 3px;
    }
    &:active {
      border-width: 2px;
    }
  }
}
</style>
