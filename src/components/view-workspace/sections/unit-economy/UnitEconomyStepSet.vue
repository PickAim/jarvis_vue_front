<script setup lang="ts">
import ProductsList from "@/components/view-workspace/ProductsList.vue";
import {
  AllProductsResultData, ProductData,
  SelectOptionType, SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData,
  TransitUnitEconomyRequestData,
  TransitUnitEconomyResultData
} from "@/types/DataTypes";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import type {CalculateRequestData} from "@/types/RequestTypes";
import {computed} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import UnitEconomyStep from "@/components/view-workspace/sections/unit-economy/UnitEconomyStep.vue";

const props = defineProps<{
  products?: AllProductsResultData,
  simpleRequests?: CalculateRequestData<SimpleUnitEconomyRequestData, SimpleUnitEconomyResultData>[]
  transitRequests?: CalculateRequestData<TransitUnitEconomyRequestData, TransitUnitEconomyResultData>[]
}>();

const emit = defineEmits<{
  (e: "select-product", ID: number, product: ProductData): void,
  (e: "select-request", ID, isTransit: boolean): void,
  (e: "just-continue"): void
}>()

const hasProducts = computed(() => {
  const products = props.products;
  return products &&
      Object.keys(products).some((key) => products && Object.keys(products[key]).length > 0)
})

const requests = computed<SelectOptionType[] | undefined>(() => {
  return [];
})
</script>

<template>
  <UnitEconomyStep class="unit-economy-set">
    <template v-slot:header>Надстройка</template>
    <template v-slot:body>
      <div v-if="hasProducts">
        <span class="select-product-label">Выберите один из своих продуктов для рассчёта:</span>
        <ProductsList v-if="props.products"
                      class="select-product"
                      :products="props.products"
                      @select-product="(ID, product) => emit('select-product', ID, product)"/>
      </div>
      <div v-if="requests && requests.length > 0">
        <span class="select-request-label">
          <span v-if="hasProducts">или </span>
          <span v-else>Выберите </span>
           один из своих сохранённых запросов:
        </span>
        <ControlSelect :options="requests" :selected-value="1"/>
      </div>
      <div>
        <ControlButton class="just-continue-button" @click="emit('just-continue')">Начать с нуля</ControlButton>
      </div>
    </template>
  </UnitEconomyStep>
</template>

<style scoped lang="scss">
.unit-economy-set {
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

  .just-continue-button {
    width: 300px;
  }
}
</style>
