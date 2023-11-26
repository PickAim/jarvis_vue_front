<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import {reactive, ref} from "vue";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import DefaultPagePreloader from "@/components/generals/DefaultPagePreloader.vue";
import NearestKeywordsSet from "@/components/view-workspace/sections/nearest-keywords/NearestKeywordsSet.vue";
import {useRequestStore} from "@/stores/requestStore";
import {
  NearestKeywordsActions,
  NearestKeywordsForProductActions
} from "@/requests/request-actions/calculations/NearestKeywordsActions";
import NearestKeywordsResult from "@/components/view-workspace/sections/nearest-keywords/NearestKeywordsResult.vue";
import {
  WorkspaceSectionNearestKeywordsActions
} from "@/component-actions/view-workspace/sections/WorkspaceSectionNearestKeywordsActions";

const actions = reactive(new WorkspaceSectionNearestKeywordsActions());
const keywords = ref<string[] | undefined>(undefined);
const requestText = ref<string | undefined>(undefined);

actions.initPage();

async function onCalculateProduct(productID: number) {
  requestText.value = undefined;
  useRequestStore().setLevel(201);
  keywords.value = (await (new NearestKeywordsForProductActions()).calculate({
    marketplace_id: 2,
    product_id: productID
  })).result;
}

async function onCalculateText(text: string) {
  requestText.value = text;
  useRequestStore().setLevel(201);
  keywords.value = (await (new NearestKeywordsActions()).calculate({
    marketplace_id: 2,
    sentence: text
  })).result;
}
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.nearestKeywords.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <DefaultPagePreloader v-if="actions.isPageLoading"/>
        <div class="steps-wrapper" v-else>
          <NearestKeywordsSet :products="actions.products"
                              @calculate-product="onCalculateProduct"
                              @calculate-text="onCalculateText"/>
          <NearestKeywordsResult class="nearest-keywords-result" v-if="keywords"
                                 :keywords="keywords"
                                 :text="requestText"/>
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

  .nearest-keywords-result {
    margin-top: 30px;
  }

  .steps-wrapper {
    width: 100%;
  }
}
</style>
