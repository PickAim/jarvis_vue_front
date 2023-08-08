<template>
  <div class="workspace-wrapper">
    <ViewWorkspaceHeader/>
    <div class="middle-wrapper">
      <div class="section-wrapper">
        <RouterView/>
      </div>
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
.workspace-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .middle-wrapper{
    display: flex;
    flex-direction: row;
    flex: 1 0 0;
    align-items: stretch;
    overflow: hidden;

    .section-wrapper{
      flex: 1 0;
      width: 100px;
    }
  }
}
</style>
