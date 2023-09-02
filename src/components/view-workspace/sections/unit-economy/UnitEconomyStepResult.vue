<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";
import {computed, ref} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlButton from "@/components/controls/ControlButton.vue";

const props = defineProps<{
  shown: boolean,
  saveName: string,
  resultData: UnitEconomyResultData | undefined
}>();

const emits = defineEmits<{
  (e: "saveRequest", name: string): void
}>();

const requestName = ref("");
const requestNamePlaceholder = computed(() => `${props.saveName}, ${
    (new Date()).toLocaleDateString('ru-RU', {day: "2-digit", month: "short"})
}`);

const chartKeyToTitle: { [ind in keyof UnitEconomyResultData]: string } = {
  margin: "Маржа",
  logistic_price: "Стоимость логистики",
  pack_cost: "Стоимость упаковки",
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
    if (["transit_margin", "transit_profit"].includes(key)) return;
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
    <div class="save-wrapper">
      <ControlTextInput v-model="requestName" :placeholder="requestNamePlaceholder"/>
      <ControlButton class="save-button" @click="emits">Сохранить запрос</ControlButton>
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

  .save-wrapper {
    display: flex;
    flex-direction: row;
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