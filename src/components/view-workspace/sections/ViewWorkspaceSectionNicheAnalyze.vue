<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "../workspaceSections";
</script>

<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.nicheAnalyze.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSection>
</template>

<style scoped lang="scss">
</style>
