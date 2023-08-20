<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {UnitEconomyResultData} from "@/types/DataTypes";

const props = defineProps<{
  resultData: UnitEconomyResultData | undefined
}>();

</script>

<template>
  <div class="unit-economy-step">
    <h2>Шаг 3. Результат</h2>
    {{ props.resultData }}
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  //display: none;
  flex: 0 0 auto;
  height: 1000px;
}
</style>