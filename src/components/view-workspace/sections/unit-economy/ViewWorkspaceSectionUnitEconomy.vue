<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
import {
  WorkspaceSectionUnitEconomyActions
} from "@/component-actions/view-workspace/WorkspaceSectionUnitEconomyActions";
import type {ProductData} from "@/types/DataTypes";
import UnitEconomyStepSet from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepSet.vue";
import UnitEconomyStepParameters from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepParameters.vue";
import UnitEconomyStepResult from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepResult.vue";
import {computed, reactive, ref} from "vue";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";
import {niches} from "@/nichesData";

const actions = reactive(new WorkspaceSectionUnitEconomyActions());
const calculator = reactive(new UnitEconomyCalculator());
actions.initSection();

const settingSelected = ref(false);
const calculated = ref(false);
const saveName = ref("");

const products = computed<ProductData[] | undefined>(() => {
  if (!actions.products) return;
  const requestedProducts = actions.products;
  console.log(requestedProducts);
  const products: ProductData[] = [];
  Object.keys(requestedProducts).forEach((marketplaceID) => {
    Object.keys(requestedProducts[marketplaceID]).forEach((productID) => {
      products.push({...requestedProducts[marketplaceID][productID], productID, marketplaceID});
    })
  });
  return products;
});

function onParameterChanged(key, value) {
  calculator.request[key] = value;
}

function onProductSelect(ID) {
  const productsArray = products.value;
  if (!productsArray) return;
  const product = productsArray.find((product) => product.productID === ID);
  if (!product) return;
  calculator.request.niche = product.niche[0].toUpperCase() + product.niche.substring(1).toLowerCase();
  calculator.request.marketplace_id = Number(product.marketplaceID);
  calculator.request.category_id = Object.keys(niches).indexOf(product.category) + 2;
  saveName.value = product.name;
  onSet();
}

function onRequestSelect(ID) {
  if (!actions.requests) return;
  const request = actions.requests.find(request => request.info.id === ID);
  if (!request) return;
  saveName.value = actions.requests[0].info.name;
  onSet();
}

function onSet() {
  calculated.value = false;
  if (!settingSelected.value) {
    setTimeout(() => {
      document.querySelector('#unit-economy-parameters').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  }
  settingSelected.value = true;
}

function onCalculate() {
  calculator.calculate().then(() => {
    if (!calculator.result) return;
    calculated.value = true;
    setTimeout(() => {
      document.querySelector('#unit-economy-result').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  });
}

function onSaveRequest(name: string) {
  calculator.saveRequest(name);
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-body-wrapper">
      <div class="steps-wrapper">
        <UnitEconomyStepSet :products="products" :requests="actions.requests"
                            @select-product="onProductSelect"
                            @select-request="onRequestSelect"/>
        <UnitEconomyStepParameters :shown="settingSelected"
                                   :parameters="calculator.request"
                                   @parameter-changed="onParameterChanged"
                                   @calculate="onCalculate"
                                   v-model:is-calculate-transit-cost="calculator.isTransitCostOn"
                                   v-model:is-calculate-transit="calculator.isTransitOn"/>
        <UnitEconomyStepResult :shown="calculated && !!calculator.result"
                               :result-data="calculator.result"
                               :save-name="saveName"
                               @save-request="onSaveRequest"/>
      </div>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-inline: 30px;

  .steps-wrapper {
    width: 100%;
    max-width: 1280px;
  }
}
</style>
