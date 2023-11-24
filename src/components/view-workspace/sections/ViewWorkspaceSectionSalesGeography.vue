<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import ViewWorkspaceUnderConstruction from "@/components/view-workspace/sections/ViewWorkspaceUnderConstruction.vue";
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.salesGeography.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <ViewWorkspaceUnderConstruction/>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
</style>
