<script setup lang="ts">
import {defineEmits, defineProps, withDefaults} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";

const emits = defineEmits(['click']);
const props = withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})
</script>

<template>
  <ControlButton class="transparent-button" @click="(e) => emits('click', e)" :disabled="props.disabled">
    <slot/>
  </ControlButton>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.transparent-button {
  color: white;
  border: 2px solid var.$green-jarvis-color;
  background: transparent;
}
</style>
