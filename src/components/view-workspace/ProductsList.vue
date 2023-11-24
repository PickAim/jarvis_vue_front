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

function onProductSelect(id: number) {
  selectedProductID.value = id.toString();
  emit("select-product", id);
}

</script>

<template>
  <div class="product-list">
    <div class="shadow left"/>
    <div class="products-wrapper">
      <ProductItem v-for="product in props.products"
                   :class="{selected: selectedProductID === product.productID.toString()}"
                   :key="product.productID"
                   :product-item="product"
                   @select="onProductSelect(product.productID)"/>
    </div>
    <div class="shadow right"/>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.product-list {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 190px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  //box-shadow: rgba(0, 0, 0, 1) -50px 0px 36px -28px inset, rgba(0, 0, 0, 1) 50px 0px 36px -28px inset;

  .products-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-inline: 40px;
    overflow-x: auto;
  }

  .shadow {
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    z-index: 1;
    box-shadow: var.$dark-jarvis-color 0 0 30px 50px;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}
</style>