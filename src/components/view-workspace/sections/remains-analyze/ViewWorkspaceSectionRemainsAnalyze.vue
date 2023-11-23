<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/WorkspaceLabels";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import RemainsAnalyzePreloader from "@/components/view-workspace/sections/remains-analyze/RemainsAnalyzePreloader.vue";
import {
  WorkspaceSectionRemainsAnalyze
} from "@/component-actions/view-workspace/sections/WorkspaceSectionRemainsAnalyze";
import {reactive} from "vue";
import RemainsAnalyzeTable from "@/components/view-workspace/sections/remains-analyze/RemainsAnalyzeTable.vue";

const actions = reactive(new WorkspaceSectionRemainsAnalyze());
actions.initPage();

</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.remainsAnalyze.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <RemainsAnalyzePreloader v-if="actions.isPageLoading"/>
        <div class="remains-table-wrapper" v-else-if="actions.remainsInfo">
          <RemainsAnalyzeTable :remains-info="actions.remainsInfo"/>
        </div>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
.middle-wrapper {
  align-items: center;
}

.section-body-wrapper {
  width: 100%;
  height: 100%;

  .remains-table-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
