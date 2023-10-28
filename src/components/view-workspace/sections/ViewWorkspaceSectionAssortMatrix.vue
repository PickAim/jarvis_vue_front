<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/component-actions/view-workspace/WorkspaceLabels";
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.assortMatrix.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
</style>
