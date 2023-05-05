<template>
  <header>
    <img src="\src\assets\19-19 1.png" alt="">
    <div class="buttons-wrapper">
      <ControlButton class="about_product" >О продукте</ControlButton>
      <ControlButton class="Tarifs" >Тарифы</ControlButton>
      <ControlButton class="question" >Вопросы</ControlButton>
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
import {ViewStartActions} from "@/component-actions/ViewStartActions";
import {useRouter} from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<style scoped lang="scss">
header{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1280px;
  height: 160px;
  background: linear-gradient(286.19deg, #1E1C4C 22.13%, #33298F 97.7%);

  img{
  width: 127px;
  height: 128px;
  margin-top: 8px;
  margin-left: 62px;
  margin-right: 37px;
  }
.buttons-wrapper{
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 100%;
    align-items: center;

  .login-button, .reg-button, .about_product, .Tarifs, .question{
      width: 136px;
      height: 29px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
    }
  }
}
</style>