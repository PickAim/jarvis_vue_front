<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";
import {useRouter} from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<template>
  <header>

    <div class="buttons-wrapper">
      <div class="logo"/>
      <button class="about-product">О продукте</button>
      <button class="tariffs" @click="router.push('ViewTariffs')">Тарифы</button>
      <button class="question">Вопросы</button>
      <!--      <button class="login-button" @click="router.push('workspace')">На работу</button>-->
      <button class="login-button" @click="actions.openLoginOverlay()">
        <span class="login-label">Войти</span>
        <span class="arrow"/>
      </button>
      <!--      <button class="reg-button" @click="actions.openRegistrationOverlay()">Регистрация</button>-->
    </div>
    <button class="mobile-menu-button" @click="actions.openMobMenu()"/>
  </header>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

header {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  height: 60px;
  background-color: #191919;

  .logo {
    //flex: 1;
    width: 80px;
    background: url("/src/assets/images/Jarvis-Logo-White-128px.png") center no-repeat;
    background-size: contain;
    height: 100%;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 90vw;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    button {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
    }

    .login-button {
      display: grid;
      grid-template-columns: 2fr 5fr 2fr;
      align-items: center;
      width: 179px;
      height: 66px;
      border-radius: 20px;
      border: 1px solid #B7FF44;

      .login-label {
        grid-column: 2;
      }

      .arrow {
        grid-column: 3;
        height: 100%;
        background: url("/src/assets/images/Arrow-64px.png") no-repeat top;
        background-size: contain;
        margin: 15px 15px 0 0;
        transform: rotate(5deg);
      }
    }
  }

  .mobile-menu-button {
    display: none;
  }
}

@media (max-width: $tag-width) {
  header {
    display: flex;
    flex-direction: column;

    .buttons-wrapper {
      display: none;
    }

    .mobile-menu-button {
      display: flex;
      justify-content: flex-end;
      margin-left: 20px;
      background: url("/src/assets/images/Mobile-Menu-64px.png") no-repeat top;
      background-size: contain;
      width: 40px;
      height: 40px;
    }
  }
}</style>
