<template>
  <div class="ml-10">
    <TextboxControl input-type="text" placeholder="Логин" error-text="Error" v-model="textValue"/>
    {{textValue}}
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import TextboxControl from "@/component/controls/TextboxControl.vue"
const textValue = ref("");
</script>

<style scoped lang="scss">
  TextboxControl{
    width: 100px
  }
</style>
