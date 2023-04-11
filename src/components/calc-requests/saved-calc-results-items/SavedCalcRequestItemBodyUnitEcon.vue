<template>
  <div class="niche-dist-wrapper">
    {{props.calcRequestData.info.id}}
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