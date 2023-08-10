<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-wrapper">

    </div>
  </ViewWorkspaceSection>
</template>

<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/ViewWorkspaceSection.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
import {
  WorkspaceSectionUnitEconomyActions
} from "@/component-actions/view-workspace/WorkspaceSectionUnitEconomyActions";

const actions = new WorkspaceSectionUnitEconomyActions();
actions.initSection();

</script>

<style scoped lang="scss">
</style>