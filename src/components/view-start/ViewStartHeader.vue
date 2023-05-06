<template>
  <header>
    <img src="\src\assets\19-19 1.png" alt="">
    <div class="buttons-wrapper">
      <button class="about-product" >О продукте</button>
      <button class="tarifs" >Тарифы</button>
      <button class="question" >Вопросы</button>
      <button class="login-button"
                     @click="router.push('workspace')">На работу</button>
      <button class="login-button"
                     @click="actions.openLoginOverlay()">Вход</button>
      <button class="reg-button"
                     @click="actions.openRegistrationOverlay()">Регистрация</button>
                  
    </div>
  </header>
</template>

<script setup lang="ts">
//import ControlButton from "@/components/controls/ControlButton.vue";
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
  height: 156px;
  background: url(src/assets/Rectangl.png);
  background-repeat: no-repeat;
  img{
    height: 128px;
    width: 127px;
    margin: 8px 37px 0px 62px;
  }
  h1{
      @font-face {
          font-family:Inter;
          src: url(src\assets\Inter-SemiBold.otf);
          }
    }
  p{
      @font-face {
        font-family:Montserrat ;
        src: url(src\assets\Montserrat-LightItalic.ttf);
      }
    }
}
.buttons-wrapper { 
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 100%;
    align-items: center;
    button {
      @font-face {
        font-family:Inter;
        src: url(src\assets\Inter-SemiBold.otf);
      }
      width: 136px;
      height: 37px;
      font-weight: 400;
      font-size: 24px;
      color: #FFFFFF;
    }
}
</style>