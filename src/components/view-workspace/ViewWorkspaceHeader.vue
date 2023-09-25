<script setup lang="ts">
import {sections} from "@/components/view-workspace/workspaceSections";
import ViewWorkspaceHeaderMenu from "@/components/view-workspace/ViewWorkspaceHeaderMenu.vue";
import {useOverlayStateStore} from "@/stores/overlayStore";

const overlayState = useOverlayStateStore();

function onProfileClick() {
  overlayState.openOverlay("login");
}

</script>

<template>
  <header class="view-start-wrapper">
    <div class="logo" @click="$router.push(sections.dashboard.link)" title="На главную страницу">
      <img src="/src/assets/images/jarvis_icon_big.png" alt="">
    </div>
    <div class="menu-and-profile-wrapper">
      <ViewWorkspaceHeaderMenu/>
      <button class="profile-button" @click="onProfileClick">
      </button>
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
  }

  .profile-button {
    width: 60px;
    aspect-ratio: 1/1;
    border-radius: 999px;
    border: 2px solid var.$green-jarvis-color;
  }
}
</style>
