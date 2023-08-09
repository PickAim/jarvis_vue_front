<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>{{ sections.categoryAnalyze.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/sections/ViewWorkspaceSectionContainer.vue";
import {sections} from "../workspaceSections";
</script>

<style scoped lang="scss">
</style>