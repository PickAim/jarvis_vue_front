<template>
  <div class="saved-calc-list-wrapper">
    <SavedItem v-for="request in calculator.getStore().requests"
               class="request-item"
               :key="request.info.id"
               :request="request"
               :name="name"
               :calculator-class="calculatorClass"
               @edit="editHandler(request.info.id)"/>
  </div>
</template>

<script setup lang="ts">
import SavedItem from "@/components/calc-requests/saved-calc-results-items/SavedItem.vue";
import {CalculateRequestInfoData, CalculateRequestName} from "@/types/CalculateRequestsTypes";
import type {SavableCalculator} from "@/requests/calculators/SavableCalculator";

const props = defineProps<{
  name: CalculateRequestName,
  calculator: SavableCalculator<any, any>,
  calculatorClass: new () => SavableCalculator<any, any>
}>()

function editHandler(id: CalculateRequestInfoData["id"]) {
  props.calculator.selectCalcRequest(id);
}
</script>

<style scoped lang="scss">
.saved-calc-list-wrapper {
  display: flex;
  flex-direction: column;

  .request-item {
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>