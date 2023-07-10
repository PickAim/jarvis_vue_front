<template>
  <div class="unit-econ-wrapper">
    {{props.item.info.name}}
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {CalculateRequestData} from "@/types/CalculateRequestsTypes";

const props = defineProps<{
  item: CalculateRequestData<any, any>
}>()
</script>

<style scoped lang="scss">

</style>