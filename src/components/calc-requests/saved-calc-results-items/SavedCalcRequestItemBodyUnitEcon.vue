<template>
  <div class="niche-dist-wrapper">
    {{props.item.request}}<br>
    {{props.item.result}}
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