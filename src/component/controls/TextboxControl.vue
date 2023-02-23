<template>
  <div class="wrapper">
    <span class="error-text">{{errorText}}</span>
    <div class="input-block">
      <span class="placeholder">{{placeholder}}</span>
      <input :type="inputType" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

defineProps<{
  inputType: string,
  placeholder: string,
  errorText: string,
  label: string,
  modelValue: string}>()
defineEmits(['update:modelValue'])

</script>

<style scoped lang="scss">

.wrapper{
  height: fit-content;
  display: block;
  .error-text{
    font-size: 12px;
    height: 50px;
  }
  .input-block{
    height: 50px;
    width: 100%;
    margin: 20px;
    border: 2px solid black;
    .placeholder{
      position: absolute;
      top: 0px;
    }
    input{

    }
  }
}

</style>
