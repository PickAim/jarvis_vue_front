<template>
  <div class="view-workspace-header">
    {{ request.request }}<br>
    {{ request.result }}
  </div>
</template>

<script setup lang="ts">
import {CalculateRequestData} from "@/types/RequestTypes";
import {
  TransitUnitEconomyRequestData,
  TransitUnitEconomyResultData
} from "@/types/DataTypes";

defineProps<{
  request: CalculateRequestData<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>
}>()
</script>

<style scoped lang="scss">

</style>