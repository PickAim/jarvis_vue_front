<template>
  <div>
    <input class="error-checkbox" type="checkbox" v-model="inputError">
    <ControlTextInput
        class="textbox"
        title="Логин"
        error-text="Error"
        v-model="textValue"
        :error="inputError"
    />
    <div>{{textValue}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
const textValue = ref("");
const inputError = ref(true);
</script>

<style scoped lang="scss">
.error-checkbox{
  width: 30px;
  height: 30px;
}
</style>
