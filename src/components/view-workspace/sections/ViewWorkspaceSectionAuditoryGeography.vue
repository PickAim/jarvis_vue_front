<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.auditoryGeography.title }}</template>
    <div>
    </div>
  </ViewWorkspaceSection>
</template>

<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "../workspaceSections";
</script>

<style scoped lang="scss">
</style>