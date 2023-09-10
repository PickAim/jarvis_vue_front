<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";
import {useRouter} from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<template>
  <header>
    <div class="buttons-wrapper">
      <button class="about-product">О продукте</button>
      <button class="tariffs" @click="router.push('ViewTariffs')">Тарифы</button>
      <button class="question">Вопросы</button>
      <!--      <button class="login-button" @click="router.push('workspace')">На работу</button>-->
      <button class="login-button" @click="actions.openLoginOverlay()">Вход</button>
      <button class="reg-button" @click="actions.openRegistrationOverlay()">Регистрация</button>
    </div>
    <button class="mob-menu" @click="actions.openMobMenu()">
      <img src="src\assets\images\icon-mob-menu.png" alt="">
    </button>
  </header>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

header {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  background-color: #191919;
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  height: 130px;
  max-width: 90vw;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  button {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
}

.mob-menu {
  display: none;
}

@media (max-width: $tag-width) {
  header {
    display: flex;
    flex-direction: column;

    .buttons-wrapper {
      display: none;
    }

    .mob-menu {
      display: flex;
      justify-content: flex-end;
      margin: 50px 50px 0px 50px;

      img {
        width: 40px;
        height: 20px;
      }
    }
  }
}</style>
