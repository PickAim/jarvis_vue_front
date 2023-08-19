<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-body-wrapper">
      <UnitEconomyStepSet :products="products"
                          @select-product="onProductSelect"
                          @select-request="onRequestSelect"/>
      <UnitEconomyStepParameters :shown="settingSelected"/>
      <UnitEconomyStepResult/>
    </div>
  </ViewWorkspaceSection>
</template>

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
import {ref} from "vue";

const actions = new WorkspaceSectionUnitEconomyActions();
actions.initSection();

const settingSelected = ref(false);

const products: ProductData[] = [
  {name: 'Аккумулятор', productID: 1},
  {name: 'Бензин', productID: 2},
  {name: 'Покрышка', productID: 3}
];

function onProductSelect(ID) {
  onSet();
}

function onRequestSelect(ID) {
  onSet();
}

function onSet() {
  if (!settingSelected.value) {
    setTimeout(() => {
      document.querySelector('#unit-economy-parameters').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  }
  settingSelected.value = true;
}

</script>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>