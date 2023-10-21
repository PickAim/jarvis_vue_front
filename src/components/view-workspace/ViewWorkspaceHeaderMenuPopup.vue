<script setup lang="ts">
import {useOverlayStateStore} from "@/stores/overlayStore";
import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";
import {ErrorHandler} from "@/requests/ErrorHandler";
import {ResultCode} from "@/requests/ResultCode";
import {useRequestStore} from "@/stores/requestStore";

const overlayState = useOverlayStateStore();
const accountActions = new AccountRequestActions();

async function onExitClick() {
  await useRequestStore().executeInBackground(async () => {
    await accountActions.logout();
  });
  ErrorHandler.handle(ResultCode.INCORRECT_TOKEN);
}
</script>

<template>
  <div class="workspace-header-popup-wrapper">
    <!--    <div class="top-triangle"/>-->
    <div class="popup-body">
      <div class="menu-item" @click="overlayState.openOverlay('settingsPanel')">Панель управления</div>
      <div class="separator"/>
      <div class="menu-item exit" @click="onExitClick">Выход</div>
      <!--      <div class="separator"/>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

$menu-item-height: 60px;
$popup-body-height: $menu-item-height * 2 + 1px;
$popup-body-width: 210px;
$arrow-height: 0;
$arrow-width: 15px;
$popup-top: -10px;
$popup-top-gap: 10px;

.workspace-header-popup-wrapper {
  position: absolute;
  top: calc(100% + $popup-top);
  right: 0;
  height: $popup-body-height + $arrow-height + $popup-top-gap;
  width: $popup-body-width;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
  z-index: 22;

  .top-triangle {
    position: absolute;
    top: $popup-top-gap;
    right: 15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 $arrow-width $arrow-height $arrow-width;
    border-color: transparent transparent #ffffff transparent;
  }

  .popup-body {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: $popup-top-gap + $arrow-height;
    right: 0;
    background: var.$dark-gradient-color;
    border: 1px solid rgba(255, 255, 255, 0.25);
    width: 100%;
    height: $popup-body-height;
    border-radius: 15px 0 15px 15px;

    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: $popup-body-height;
      color: white;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;

      &.exit {
        color: #EA5F5F;
      }
    }

    .separator {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.25);
    }
  }
}
</style>