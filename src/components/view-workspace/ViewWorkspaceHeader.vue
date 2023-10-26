<script setup lang="ts">
import {sections} from "@/components/view-workspace/workspaceSections";
import ViewWorkspaceHeaderMenu from "@/components/view-workspace/ViewWorkspaceHeaderMenu.vue";
import ViewWorkspaceHeaderMenuPopup from "@/components/view-workspace/ViewWorkspaceHeaderMenuPopup.vue";

</script>

<template>
  <header class="view-workspace-header">
    <div class="logo" @click="$router.push(sections.dashboard.link)" title="На главную страницу"/>
    <div class="menu-and-profile-wrapper">
      <ViewWorkspaceHeaderMenu/>
      <div class="header-popup-wrapper">
        <div class="profile-button">
          <span class="profile-logo"/>
        </div>
        <ViewWorkspaceHeaderMenuPopup tabindex="0" class="header-popup"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

$header-height: 80px;

.view-workspace-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 60px 0 40px;
  height: $header-height;
  margin-top: 25px;
  width: 100%;
  flex: 0 0 auto;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 0 0 auto;
    height: 85%;
    width: 70px;
    cursor: pointer;
    background: url("/src/assets/images/Jarvis-Logo-White-128px.png") no-repeat top;
    background-size: contain;
  }

  .menu-and-profile-wrapper {
    position: relative;
    flex: 1 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    height: 100%;
    border: 1px solid var.$gray-color;
    background: var.$dark-gradient-color;
    //backdrop-filter: blur(1px);
    align-items: center;

    .header-popup-wrapper {
      //position: relative;
      display: flex;
      flex-direction: row;
      margin-right: 30px;
      height: 60px;

      .profile-button {
        display: inherit;
        width: 60px;
        height: 60px;
        aspect-ratio: 1/1;

        .profile-logo {
          width: 60px;
          height: 60px;
          border-radius: 999px;
          border: 2px solid var.$green-jarvis-color;
        }
      }

      .header-popup:hover, .profile-button:hover + .header-popup {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>
