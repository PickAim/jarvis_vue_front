<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";
import {computed} from "vue";

const props = defineProps<{
  shown: boolean,
  resultData: UnitEconomyResultData | undefined
}>();

const chartKeyToTitle: { [ind in keyof UnitEconomyResultData]: string } = {
  margin: "Маржа",
  logistic_price: "Логистики",
  pack_cost: "Стоиомсть упаковки",
  product_cost: "Себестоимость",
  storage_price: "Хранение",
  marketplace_commission: "Комиссия маркетплейса",
  transit_margin: "Комиссия транзита",
  transit_profit: "Транизтная выручка",
  recommended_price: "",
  roi: ""
}

const chartResult = computed(() => {
  const result = [];
  if (!props.resultData) return result;
  Object.keys(props.resultData).forEach((key) => {
    const value = props.resultData && props.resultData[key];
    if (value !== undefined) {
      const title = chartKeyToTitle[key];
      if (title === "") return;
      result.push([value, title]);
    }
  });
  return result;
});

const chartTitle = computed(() => `Рекомендуемая цена: ${props.resultData?.recommended_price}`);

</script>

<template>
  <div class="unit-economy-step" id="unit-economy-result" :class="{active: props.shown}">
    <h2>Шаг 3. Результат</h2>
    <div class="result-wrapper">
      <DoughnutBar class="result-chart"
                   :data-and-labels="chartResult"
                   :title="chartTitle" v-if="chartResult.length >= 0"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  position: relative;
  visibility: hidden;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;

  .result-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
    margin-block: 5px;

    .result-chart {
      height: 100%;
    }
  }

  &.active {
    height: auto;
    visibility: visible;
    opacity: 1;

    .result-wrapper {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>