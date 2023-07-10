<template>
  <div class="niche-dist-wrapper">
    {{props.item.request}}<br>
    {{props.item.result}}
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