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
  display: block;
  width: 136px;
  height: 100%;
  background-color: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

 /* &.enabled {
    &:hover {
      border-width: 3px;
    }
    &:active {
      border-width: 2px;
    }
  }
*/}
</style>
