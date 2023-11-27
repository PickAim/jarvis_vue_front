<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import CalculateWithCategoryComponent from "@/components/view-workspace/sections/CalculateWithCategoryComponent.vue";
import type {NicheCharacteristicsResultData, NicheRequestData} from "@/types/DataTypes";
import {ref} from "vue";
import {NicheCharacteristicsActions} from "@/requests/request-actions/calculations/NicheCharacteristicsActions";
import CategoryAnalyzeResult
  from "@/components/view-workspace/sections/category-analyze/CategoryAnalyzeResult.vue";

const characteristics = ref<NicheCharacteristicsResultData | undefined>(undefined);

async function onCalculate(value: NicheRequestData) {
  characteristics.value = (await (new NicheCharacteristicsActions()).calculate(value)).result;
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.categoryAnalyze.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <CalculateWithCategoryComponent request-level="201"
                                        @calculate="onCalculate"/>
        <CategoryAnalyzeResult class="category-analyze-result"
                               v-if="characteristics"
                               :resultData="characteristics"/>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.section-body-wrapper {
  .niche-input-label {
    margin-bottom: 15px;
  }

  .calculate-button {
    margin-top: 10px;
  }

  .category-analyze-result {
    margin-top: 20px;
  }
}
</style>
