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

<style scoped lang="scss">

.text-input-wrapper {
  height: fit-content;
  display: block;
  margin: 0;
  $left-padding: 12px;

  .error-text {
    font-size: 17px;
    color: crimson;
    font-style: italic;
    height: 50px;
    width: 100%;
    margin-left: 5px;
    visibility: hidden;

    &.active {
      visibility: visible;
    }
  }

  .input-wrapper {
    position: relative;
    height: 50px;
    width: 100%;
    box-sizing: border-box;

    .title {
      position: absolute;
      top: 10px;
      left: $left-padding;
      font-size: 20px;
      line-height: 1em;
      width: calc(100% - $left-padding);
      pointer-events: none;
      transition: .1s;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    input {
      font-size: 18px;
      padding: 10px 0 0 $left-padding;
      height: 100%;
      width: 100%;
      bottom: 0;
      border-bottom: 1px solid rgba(183, 255, 68, 0.2);
      background-color: transparent;
      outline: none;
      box-sizing: border-box;
      transition: border-width 0.1s linear, border-color 0.1s linear;

      &:focus {
        border-bottom: 1px solid rgba(183, 255, 68, 1);
      }

      &:focus + .title, &:not(:placeholder-shown) + .title {
        font-size: 13px;
        top: 0;
      }
    }
  }
}
</style>
