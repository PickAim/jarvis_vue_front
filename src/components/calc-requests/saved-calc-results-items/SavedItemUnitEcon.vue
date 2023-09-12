<template>
  <div class="view-start-wrapper">
    {{ request.request }}<br>
    {{ request.result }}
  </div>
</template>

<script setup lang="ts">
import {CalculateRequestData} from "@/types/RequestTypes";
import {
  UnitEconomyRequestData,
  UnitEconomyResultData
} from "@/types/DataTypes";

defineProps<{
  request: CalculateRequestData<UnitEconomyRequestData, UnitEconomyResultData>
}>()
</script>

<style scoped lang="scss">

</style>