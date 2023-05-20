<template>
  <header>
    <div class="buttons-wrapper">
      <button class="about-product">О продукте</button>
      <button class="tariffs">Тарифы</button>
      <button class="question">Вопросы</button>
      <button class="login-button" @click="router.push('workspace')">На работу</button>
      <button class="login-button" @click="actions.openLoginOverlay()">Вход</button>
      <button class="reg-button" @click="actions.openRegistrationOverlay()">Регистрация</button>
    </div>
  </header>
</template>

<script setup lang="ts">

import { ViewStartActions } from "@/component-actions/ViewStartActions";
import { useRouter } from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  background-color:#191919;

  h1 {
    @font-face {
      font-family: Inter;
      src: url(src\assets\Inter-SemiBold.otf);
    }
  }

  p {
    @font-face {
      font-family: Montserrat;
      src: url(src\assets\Montserrat-LightItalic.ttf);
    }
  }
}

.buttons-wrapper {
  display: flex;
  flex-direction: row;
  height: 109px;
  max-width: 70vw;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  button {
    @font-face {
      font-family: Inter;
      src: url(src\assets\fonts\Inter-SemiBold.otf);
    }

    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
}
</style>