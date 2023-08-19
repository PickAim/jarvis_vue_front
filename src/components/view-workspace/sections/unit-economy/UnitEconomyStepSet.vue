<script setup lang="ts">
import ProductsList from "@/components/view-workspace/ProductsList.vue";
import {ProductData} from "@/types/DataTypes";
import "./unit-economy-step-style.scss";

const props = defineProps<{
  products: ProductData[]
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
      <ProductsList class="select-product"
                    :products-list="props.products" @select-product="(ID) => emit('select-product', ID)"/>
      <span class="select-request-label">или один из своих сохранённых запросов:</span>
      <select class="select-request" name="" id="" @change="(e) => emit('select-request', e)">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  .select-product-label {
    margin-bottom: 15px;
  }

  .select-product {
    margin-bottom: 10px;
  }

  .select-request-label {
    margin-bottom: 10px;
  }

  .select-request {
    color: black;
  }
}
</style>