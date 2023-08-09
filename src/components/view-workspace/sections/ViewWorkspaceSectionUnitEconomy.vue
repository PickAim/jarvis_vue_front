<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-wrapper">

    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/sections/ViewWorkspaceSectionContainer.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
</script>

<style scoped lang="scss">
</style>