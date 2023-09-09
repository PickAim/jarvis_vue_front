<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.financialHealth.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
</style>
