<script setup lang="ts">
import {sections} from "@/components/view-workspace/workspaceSections";
import ViewWorkspaceHeaderMenu from "@/components/view-workspace/ViewWorkspaceHeaderMenu.vue";
import ViewWorkspaceHeaderMenuPopup from "@/components/view-workspace/ViewWorkspaceHeaderMenuPopup.vue";

</script>

<template>
  <header class="view-start-wrapper">
    <div class="logo" @click="$router.push(sections.dashboard.link)" title="На главную страницу">
      <img src="/src/assets/images/jarvis_icon_big.png" alt="">
    </div>
    <div class="menu-and-profile-wrapper">
      <ViewWorkspaceHeaderMenu/>
      <div class="header-popup-wrapper">
        <div class="profile-button">
          <span class="profile-logo"/>
        </div>
        <ViewWorkspaceHeaderMenuPopup class="header-popup"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

$header-height: 70px;

.view-start-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 30px;
  background-color: black;
  height: $header-height;
  width: 100%;
  flex: 0 0 auto;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 0 0 auto;
    height: 85%;
    cursor: pointer;

    img {
      height: 100%;
    }
  }

  .menu-and-profile-wrapper {
    flex: 1 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header-popup-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
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
