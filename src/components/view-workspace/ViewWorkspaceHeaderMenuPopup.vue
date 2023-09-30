<script setup lang="ts">
import {useOverlayStateStore} from "@/stores/overlayStore";
import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";
import {ErrorHandler} from "@/requests/ErrorHandler";
import {ResultCode} from "@/requests/ResultCode";

const overlayState = useOverlayStateStore();
const accountActions = new AccountRequestActions();

async function onExitClick() {
  await accountActions.logout();
  ErrorHandler.handle(ResultCode.INCORRECT_TOKEN);
}
</script>

<template>
  <div class="workspace-header-popup-wrapper">
<!--    <div class="top-triangle"/>-->
    <div class="popup-body">
      <button class="menu-item" @click="overlayState.openOverlay('settingsPanel')">Панель управления</button>
      <div class="separator"/>
      <button class="menu-item exit" @click="onExitClick">Выход</button>
      <div class="separator"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
$popup-body-height: 200px;
$popup-body-width: 230px;
$arrow-height: 16px;
$arrow-width: 15px;
$popup-top-gap: 10px;

.workspace-header-popup-wrapper {
  position: absolute;
  top: 100%;
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
    left: 0;
    background: #fff;
    width: 100%;
    height: $popup-body-height;
    border-radius: 15px;

    .menu-item {
      width: 100%;
      padding: 10px 15px;
      color: black;
      font-size: 20px;

      &.exit {
        color: red;
      }
    }

    .separator {
      width: 100%;
      height: 1px;
      background: #000;
    }
  }
}
</style>