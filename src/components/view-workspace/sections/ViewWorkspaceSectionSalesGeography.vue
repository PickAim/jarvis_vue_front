<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "../workspaceSections";
import TestRequestLevels from "@/components/test/TestRequestLevels.vue";
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.salesGeography.title }}</template>
    <div class="section-body-wrapper">
      <MiddleLineLayout>
        <TestRequestLevels/>
      </MiddleLineLayout>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
</style>
