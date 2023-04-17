<template>
  <div class="unit-econ-wrapper">
    {{props.item.info.name}}
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {CalcRequestData} from "@/types/CalcRequestsTypes";

const props = defineProps<{
  item: CalcRequestData<any, any>
}>()
</script>

<style scoped lang="scss">

</style>