<script setup lang="ts">
import ProductItem from "@/components/view-workspace/ProductItem.vue";
import {computed, ref} from "vue";
import {AllProductsResultData, ProductData} from "@/types/DataTypes";

const props = defineProps<{
  products: AllProductsResultData
}>();

const emit = defineEmits<{
  (e: "select-product", ID: number, product: ProductData): void,
  (e: "update-products"): void
}>()

const products = computed<ProductData[] | undefined>(() => {
  if (!props.products) return;
  const requestedProducts = props.products;
  const products: ProductData[] = [];
  Object.keys(requestedProducts).forEach((marketplaceID) => {
    Object.keys(requestedProducts[marketplaceID]).forEach((productID) => {
      products.push(
          {
            ...requestedProducts[marketplaceID][productID],
            productID: Number(productID),
            marketplaceID: Number(marketplaceID)
          });
    })
  });
  return products;
});

const selectedProductID = ref("0");

function onProductSelect(id: number, product: ProductData) {
  selectedProductID.value = id.toString();
  emit("select-product", id, product);
}

function onProductUpdate() {
  emit("update-products");
}

</script>

<template>
  <div class="product-list">
    <div class="update-products-button" @click="onProductUpdate">
      <div class="update-icon"/>
    </div>
    <div class="shadow left"/>
    <div class="products-wrapper">
      <ProductItem v-for="product in products"
                   :class="{selected: selectedProductID === product.productID.toString()}"
                   :key="product.productID"
                   :product-item="product"
                   @select="onProductSelect(product.productID, product)"/>
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

  .update-products-button {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(100, 100, 100, 1) 0%, rgb(50, 50, 50, 1) 100%);
    border: 1px solid var.$gray-color;
    cursor: pointer;
    z-index: 2;

    .update-icon {
      width: 70%;
      height: 70%;
      background: url("/src/assets/images/Update-Icon-512px.png") center no-repeat;
      background-size: contain;
      transition: 0.1s transform, 0.2s margin-top;
    }

    &:hover .update-icon {
      transform: rotate(150deg);
    }

    &:active .update-icon {
      transition: 0.08s transform;
      margin-top: 2px;
      transform: rotate(150deg) scale(2);
    }
  }
}
</style>