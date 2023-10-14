<script setup lang="ts">
import ViewWorkspaceHeader from "@/components/view-workspace/ViewWorkspaceHeader.vue";
import {WorkspaceActions} from "@/component-actions/view-workspace/WorkspaceActions";
import {reactive} from "vue";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import {useRequestStore} from "@/stores/requestStore";

const actions = reactive(new WorkspaceActions());

useRequestStore().executeInBackground(() => actions.initSection(), 100);
</script>

<template>
  <div class="workspace-wrapper">
    <ComponentPreloader :is-loading="actions.isPageLoading"/>
    <ViewWorkspaceHeader/>
    <div class="section-wrapper" v-if="!actions.isPageLoading">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.workspace-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  background: var.$dark-jarvis-color;
  color: white;
  overflow: auto;

  .section-wrapper {
    flex: 1 0;
  }
}
</style>
