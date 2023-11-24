<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import {
  WorkspaceSectionUnitEconomyActions
} from "@/component-actions/view-workspace/sections/WorkspaceSectionUnitEconomyActions";
import type {ProductData} from "@/types/DataTypes";
import {computed, reactive, ref} from "vue";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import DefaultPagePreloader from "@/components/generals/DefaultPagePreloader.vue";
import NearestKeywordsSet from "@/components/view-workspace/sections/nearest-keywords/NearestKeywordsSet.vue";

const actions = reactive(new WorkspaceSectionUnitEconomyActions());
// const parametersStep = ref(null);

actions.initPage();

const products = computed<ProductData[] | undefined>(() => {
  if (!actions.products) return;
  const requestedProducts = actions.products;
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
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.nearestKeywords.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <DefaultPagePreloader v-if="actions.isPageLoading"/>
        <NearestKeywordsSet :products="products"/>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;

  .parameters-and-result {
    display: flex;
    flex-direction: row;
  }
}
</style>
