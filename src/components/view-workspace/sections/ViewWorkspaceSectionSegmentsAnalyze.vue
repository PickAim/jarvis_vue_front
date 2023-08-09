<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>{{ sections.segmentsAnalyze.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/sections/ViewWorkspaceSectionContainer.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
</script>

<style scoped lang="scss">
</style>