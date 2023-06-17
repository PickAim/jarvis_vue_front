<template>
  <header>
    <div class="logo"/>
    <div class="buttons-wrapper">
      <ControlButton class="login-button"
                     @click="router.push('workspace')">На работу</ControlButton>
      <ControlButton class="login-button"
                     @click="actions.openLoginOverlay()">Вход</ControlButton>
      <ControlButton class="reg-button"
                     @click="actions.openRegistrationOverlay()">Регистрация</ControlButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import ControlButton from "@/components/controls/ControlButton.vue";
import {ViewStartActions} from "@/component-classes/ViewStartActions";
import {useRouter} from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<style scoped lang="scss">
header{
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 60px;
  padding-block: 10px;
  padding-inline: 20px;
  background-color: black;

  .logo{
    width: 40px;
    height: 40px;
    background-color: white;
  }
  .buttons-wrapper{
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 100%;

    .login-button, .reg-button{
      flex-grow: 1;
      width: 100%;
      height: 100%;
    }
  }
}
</style>