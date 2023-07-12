<template>
  <div class="niche-dist-wrapper">
    {{ request.info.name }}
  </div>
</template>

<script setup lang="ts">
import {CalculateRequestData} from "@/types/CalculateRequestsTypes";
import type {NicheDistRequestData, NicheDistResultData} from "@/types/DataTypes";

defineProps<{
  request: CalculateRequestData<NicheDistRequestData, NicheDistResultData>
}>()
</script>

<style scoped lang="scss">

</style>