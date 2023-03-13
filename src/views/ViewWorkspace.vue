<template>
  <div class="workspace-wrapper">
    <ViewWorkspaceHeader/>
    <div class="middle-wrapper">
      <ViewWorkspaceLeftPanel/>
      <div class="section-wrapper">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewWorkspaceHeader from "@/components/view-workspace/ViewWorkspaceHeader.vue";
import ViewWorkspaceLeftPanel from "@/components/view-workspace/ViewWorkspaceLeftPanel.vue";
</script>

<style scoped lang="scss">
.workspace-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;

  .middle-wrapper{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: stretch;
    overflow-y: hidden;

    .section-wrapper{
      flex-grow: 1;
    }
  }
}
</style>
