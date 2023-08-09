<template>
  <div class="workspace-wrapper">
    <ViewWorkspaceHeader/>
    <div class="section-wrapper">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewWorkspaceHeader from "@/components/view-workspace/ViewWorkspaceHeader.vue";
import {ViewWorkspaceActions} from "@/component-classes/ViewWorkspaceActions";
import {reactive} from "vue";

const viewMain = reactive(new ViewWorkspaceActions());
viewMain.initWorkspacesSections();
</script>

<style scoped lang="scss">
.workspace-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .section-wrapper {
    flex: 1 0;
    overflow: hidden;
  }
}
</style>
