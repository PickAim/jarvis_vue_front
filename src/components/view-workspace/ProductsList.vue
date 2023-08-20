<script setup lang="ts">
import ProductItem from "@/components/view-workspace/ProductItem.vue";
import {ref} from "vue";
import {ProductData} from "@/types/DataTypes";

const props = defineProps<{
  products: ProductData[]
}>();

const emit = defineEmits<{
  (e: "select-product", ID): void
}>()

const selectedProductID = ref("0");

function onProductSelect(id: string) {
  selectedProductID.value = id;
  emit("select-product", id);
}

</script>

<template>
  <div class="product-list">
    <ProductItem v-for="product in props.products"
                 :class="{selected: selectedProductID === product.productID}"
                 :key="product.productID"
                 :product-item="product"
                 @select="onProductSelect(product.productID)"/>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: row;
  height: 190px;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
}
</style>