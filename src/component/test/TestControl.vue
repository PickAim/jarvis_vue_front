<template>
  <div class="m-10">
    <input class="error-checkbox" type="checkbox" v-model="inputError">
    <ControlTextbox
        class="textbox"
        input-type="text"
        placeholder="Логин"
        error-text="Error"
        v-model="textValue"
        :error="inputError"
    />
    {{textValue}}
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ControlTextbox from "@/component/controls/ControlTextbox.vue"
const textValue = ref("");
const inputError = ref(false);

</script>

<style scoped lang="scss">
  .error-checkbox{
    width: 30px;
    height: 30px;
  }

  .textbox{
    width: 500px;
  }
</style>
