<template>
  <div class="button-wrapper">
    <button @click="(e) => $emit('click', e)" :disabled="disabled" :class="{enabled: !disabled}">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])
withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<style scoped lang="scss">
.button-wrapper{
  color: black;
  border-radius: 15px;
  overflow: hidden;
}

button {
  width: 100%;
  border: 2px solid black;
  background-color: white;
  padding: 10px 20px;
}
</style>
