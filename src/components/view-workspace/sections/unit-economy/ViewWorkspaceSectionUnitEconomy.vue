<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import {
  WorkspaceSectionUnitEconomyActions
} from "@/component-actions/view-workspace/sections/WorkspaceSectionUnitEconomyActions";
import type {ProductData, TransitUnitEconomyResultData} from "@/types/DataTypes";
import UnitEconomyStepSet from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepSet.vue";
import UnitEconomyStepParameters from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepParameters.vue";
import UnitEconomyStepResult from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepResult.vue";
import {reactive, ref} from "vue";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import UnitEconomyPreloader from "@/components/view-workspace/sections/unit-economy/UnitEconomyPreloader.vue";
import {TransitUnitEconomyRequestData} from "@/types/DataTypes";
import {useRequestStore} from "@/stores/requestStore";

const actions = reactive(new WorkspaceSectionUnitEconomyActions());
const calculator = reactive(new UnitEconomyCalculator());

const settingSelected = ref(false);
const emptySettings = ref(true);
const calculated = ref(false);
const saveName = ref("");
// const parametersStep = ref(null);

/* REQUEST LEVELS
- 201: categories and niches
- 202: calculate
- 203: save
 */

actions.initPage().then(() => {
  if ((actions.products
          && Object.keys(actions.products).some(market => Object.keys(actions.products[market]).length > 0)) ||
      (actions.simpleRequests && actions.simpleRequests.length > 0) ||
      (actions.transitRequests && actions.transitRequests.length > 0)) {
    emptySettings.value = false;
  }
});

function onParameterChanged(key, value) {
  calculator.request[key] = value;
}

function onProductSelect(product: ProductData, parametersStep) {
  parametersStep.setNicheByNames(product.marketplaceID, ...product.category_niche_list[0]);
  calculator.request.product_exist_cost = product.cost;
  saveName.value = product.name;
  onSet();
}

function onRequestSelect(ID) {
  if (!actions.simpleRequests) return;
  const request = actions.simpleRequests.find(request => request.info.id === ID);
  if (!request) return;
  saveName.value = actions.simpleRequests[0].info.name;
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
  calculated.value = false;
  useRequestStore().setLevel(202);
  calculator.calculate().then(() => {
    if (!calculator.result || calculated.value) return;
    calculated.value = true;
    setTimeout(() => {
      document.querySelector('#unit-economy-resultData').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  });
}

function onSaveRequest(name: string) {
  useRequestStore().setLevel(203);
  calculator.saveRequest(name);
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <UnitEconomyPreloader v-if="actions.isPageLoading"/>
        <div class="steps-wrapper" v-else>
          <UnitEconomyStepSet v-if="!emptySettings"
                              :products="actions.products"
                              :simple-requests="actions.simpleRequests"
                              :transit-requests="actions.transitRequests"
                              @select-product="(ID, product) => onProductSelect(product, $refs.parametersStep)"
                              @select-request="onRequestSelect"
                              @just-continue="onSet"/>
          <div class="parameters-and-result">
            <UnitEconomyStepParameters :shown="settingSelected || emptySettings"
                                       :parameters="calculator.request as TransitUnitEconomyRequestData"
                                       @parameter-changed="onParameterChanged"
                                       @calculate="onCalculate"
                                       ref="parametersStep"
                                       v-model:is-calculate-transit="calculator.isTransitOn"/>
            <UnitEconomyStepResult :shown="calculated && !!calculator.result"
                                   :result-data="calculator.result as TransitUnitEconomyResultData"
                                   :save-name="saveName"
                                   @save-request="onSaveRequest"/>
          </div>
        </div>
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

  .steps-wrapper {
    width: 100%;
  }
}
</style>
