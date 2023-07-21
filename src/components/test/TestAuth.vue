<template>
  <div>
    <div>
      <div v-if="!isCookieEnabled()">Куки недоступны! Всё в локале</div>
      <div v-else>Куки доступны</div>
      <div>Ответ: {{requestResult}}</div>
      <ControlButton @click="loginPassword()">Логин (пароль)</ControlButton>
      <ControlButton @click="loginToken()">Логин (токен)</ControlButton>
      <ControlButton @click="registration()">Регистрация</ControlButton>
      <ControlButton @click="registrationWrong()">Регистрация (Неправильный пароль)</ControlButton>
      <ControlButton @click="logout()">Выйти</ControlButton>
    </div>
    <div class="overlay flex items-center justify-center" :class="{active: isLoading}">
      <div class="w-4/12 h-2/3 bg-gray-400 rounded-xl"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountRequester from "@/requests/requesters/AccountRequester";
import type {LoginData, RegData, ResponseData} from "@/types/DataTypes";
import {ref} from "vue";
import {ResultCode} from "@/types/ResultCode";
import ControlButton from "@/components/controls/ControlButton.vue";
import {useAuthStore} from "@/stores/authStore";

const rightRegData: RegData = {email: "k.buiko20@mail.ru", password: "qwe123@#$QWE", phone: "89087428483"}
const rightLoginData: LoginData = {login: rightRegData.email, password: rightRegData.password}
const wrongRegData: RegData = {email: "k.buiko05@mail.ru", phone: "79137428483", password: "qwe123"}

const accountHandler = new AccountRequester(useAuthStore());
let requestResult = ref("0");
let isLoading = ref(false);

async function loginPassword(){
    requestResult.value = "";
    setResult(await accountHandler.loginPassword(rightLoginData));
}

async function loginToken(){
    requestResult.value = "";
    setResult(await accountHandler.loginToken());
}

async function registration(){
  requestResult.value = "";
  setResult(await accountHandler
      .registration(rightRegData));
}

async function registrationWrong(){
  requestResult.value = "";
  setResult(await accountHandler
      .registration(wrongRegData));
}

async function logout(){
  requestResult.value = "";
  setResult(await accountHandler.logout());
}

function setResult(response: ResponseData<object>){
  let res: string;
  switch(response.code){
    case ResultCode.OK:
      res = "ОК";
      break;
    case ResultCode.CONNECTION_ERROR:
      res = "Ошибка сети";
      break;
    case ResultCode.CONFIGURATION_ERROR:
      res = "Ошибка конфигурации";
      break;
    default:
      res = response.code.toString();
  }
  requestResult.value = res;
}

function isCookieEnabled(){
  return navigator.cookieEnabled;
}
</script>

<style scoped lang="scss">
</style>
