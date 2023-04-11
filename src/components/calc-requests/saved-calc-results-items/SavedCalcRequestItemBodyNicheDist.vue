<template>
  <div class="unit-econ-wrapper">
    {{props.calcRequestData.info.name}}
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {CalcRequestData} from "@/types/CalcRequestsTypes";

const props = defineProps<{
  calcRequestData: CalcRequestData<any, any>
}>()
</script>

<style scoped lang="scss">

</style>