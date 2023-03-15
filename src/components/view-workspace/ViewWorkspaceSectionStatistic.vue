<template>
  <ViewWorkspaceSectionContainer>
    <template v-slot:header>Статистика</template>
    <div>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
      <ViewWorkspaceSectionMainWidget/>
    </div>
  </ViewWorkspaceSectionContainer>
</template>

<script setup lang="ts">
import ViewWorkspaceSectionContainer from "@/components/view-workspace/ViewWorkspaceSectionContainer.vue";
import ViewWorkspaceSectionMainWidget
  from "@/components/view-workspace/widgets/WidgetContainer.vue";
</script>

<style scoped lang="scss">
</style>