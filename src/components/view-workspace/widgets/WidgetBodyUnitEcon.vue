<script setup lang="ts">
import {computed} from "vue";
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";
import {UnitEconWidgetClass} from "@/component-actions/view-workspace/widgets/UnitEconWidgetClass";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";

const props = defineProps<{
  options: UnitEconWidgetClass,
  widgetSize: number
}>();

const chartResult = computed<[number | undefined, string][] | undefined>(() => props.options.request ? [
  [props.options.request.result.logistic_price, "Логистики"],
  [props.options.request.result.margin, "Маржа"],
  [props.options.request.result.marketplace_commission, "Комиссия маркетплейса"],
  [props.options.request.result.pack_cost, "Стоиомсть упаковки"],
  [props.options.request.result.product_cost, "Себестоимость"],
  [props.options.request.result.storage_price, "Хранение"]
] : undefined);

const chartTitle = computed(() => `Рекомендуемая цена: `);
</script>

<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">UNIT экономика</div>
    <div class="calc-result-wrapper">
      <DoughnutBar v-if="chartResult && chartResult[0][0] >= 0"
                   class="result-chart"
                   :data-and-labels="chartResult"
                   :title="chartTitle"/>
    </div>
  </WidgetBodyContainer>
</template>

<style scoped lang="scss">
.calc-result-wrapper {
  flex: 1;
  overflow: hidden;

  .result-chart {
    height: 100%;
    width: 100%;
  }
}
</style>
