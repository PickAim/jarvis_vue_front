<script setup lang="ts">
withDefaults(defineProps<{
  inputType?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week",
  title: string,
  errorText?: string,
  modelValue?: string | number,
  error?: boolean
}>(), {
  inputType: "text",
  errorText: "",
  error: false
})
defineEmits(['update:modelValue'])

</script>

<template>
  <div class="text-input-wrapper">
    <!--    <span :class="{active: error}" class="error-text">{{errorText}}</span>-->
    <div class="input-wrapper">
      <input
          :type="inputType"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          placeholder=" "/>
      <label class="title">{{ title }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.text-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 50px;
  border-radius: 12px 12px 12px 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: var.$dark-gradient-color;
  backdrop-filter: blur(15px);
  $left-padding: 12px;

  .error-text {
    font-size: 17px;
    color: crimson;
    font-style: italic;
    height: 100%;
    width: 100%;
    margin-left: 5px;
    visibility: hidden;

    &.active {
      visibility: visible;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
    position: relative;
    height: 50px;
    box-sizing: border-box;

    .title {
      position: absolute;
      top: 15px;
      left: $left-padding;
      font-size: 20px;
      line-height: 1em;
      pointer-events: none;
      transition: .1s;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    input {
      font-size: 18px;
      margin-left: $left-padding;
      padding: 15px 5px 3px 0;
      background-color: transparent;
      outline: none;
      box-sizing: border-box;
      transition: border-width 0.1s linear, border-color 0.1s linear;

      &:focus + .title, &:not(:placeholder-shown) + .title {
        font-size: 13px;
        top: 2px;
      }
    }
  }
}
</style>
