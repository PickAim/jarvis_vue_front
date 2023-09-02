<script setup lang="ts">
import ProductsList from "@/components/view-workspace/ProductsList.vue";
import {ProductData, UnitEconomyRequestData, UnitEconomyResultData} from "@/types/DataTypes";
import "./unit-economy-step-style.scss";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import type {CalculateRequestData} from "@/types/RequestTypes";

const props = defineProps<{
  products?: ProductData[],
  requests?: CalculateRequestData<UnitEconomyRequestData, UnitEconomyResultData>[]
}>();

const emit = defineEmits<{
  (e: "select-product", ID): void,
  (e: "select-request", ID): void
}>()

</script>

<template>
  <div class="unit-economy-step">
    <h2>Шаг 1. Надстройка</h2>
    <div class="step-body">
      <span class="select-product-label">Выберите свой один из продуктов для рассчёта:</span>
      <ProductsList v-if="props.products"
                    class="select-product"
                    :products="props.products"
                    @select-product="(ID) => emit('select-product', ID)"/>
      <span class="select-request-label">или один из своих сохранённых запросов:</span>
      <ControlSelect :options="[
          {name: 'Запрос на расчёт пижам 1', value: '1'},
          {name: 'Запрос на расчёт пижам 2', value: '2'},
          {name: 'Запрос на расчёт пижам 3', value: '3'},
      ]" :selected-value="1"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  .select-product-label {
    margin-bottom: 15px;
  }

  .select-product {
    margin-bottom: 30px;
  }

  .select-request-label {
    margin-bottom: 10px;
  }

  .select-request {
    color: black;
  }
}
</style>