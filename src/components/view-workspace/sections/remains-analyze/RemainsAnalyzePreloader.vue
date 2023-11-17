<script setup lang="ts">
import BlinkingPreloader from "@/components/generals/BlinkingPreloader.vue";
</script>

<template>
  <div class="remains-analyze-preloader-wrapper">
    <BlinkingPreloader class="label"></BlinkingPreloader>
    <div class="products-wrapper">
      <BlinkingPreloader class="product" :key="i" v-for="i in Array(5).map((i, ind) => ind)"></BlinkingPreloader>
    </div>
    <BlinkingPreloader class="label"></BlinkingPreloader>
    <BlinkingPreloader class="select"></BlinkingPreloader>
  </div>
</template>

<style scoped lang="scss">
.remains-analyze-preloader-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .label {
    height: 25px;
    width: 300px;
  }

  .select {
    height: 40px;
    width: 250px;
  }

  .products-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .product {
      width: 150px;
      aspect-ratio: 1/1;
    }
  }
}
</style>