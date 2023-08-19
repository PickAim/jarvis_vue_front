<script setup lang="ts">
import ProductsItem from "@/components/view-workspace/ProductsItem.vue";
import {ref} from "vue";
import type {ProductData} from "@/types/DataTypes";

const props = defineProps<{
  productsList: ProductData[]
}>();

const emit = defineEmits<{
  (e: "select-product", ID): void
}>()

const selectedProductID = ref(0);

function onProductSelect(id: number) {
  selectedProductID.value = id;
  emit("select-product", id);
}

</script>

<template>
  <div class="product-list">
    <ProductsItem v-for="product in props.productsList"
                  :class="{selected: selectedProductID === product.productID}"
                  :key="product"
                  :product-item="product"
                  @select="onProductSelect(product.productID)"/>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
}
</style>