<template>
  <div class="ml-10">
    <div v-if="!isCookieEnabled()">Куки недоступны! Всё в локале</div>
    <div v-else>Куки доступны</div>
    <div>Ответ: {{requestResult}}</div>
    <button @click="loginPassword()">Логин (пароль)</button>
    <button @click="loginToken()">Логин (токен)</button>
    <button @click="registration()">Регистрация</button>
    <button @click="registrationWrong()">Регистрация (Неправильный пароль)</button>
    <button @click="logout()">Выйти</button>
    <button @click="openOverlay()">Открыть оверлей</button>
  </div>
  <div class="overlay flex items-center justify-center" :class="{active: isLoading}">
    <div class="w-4/12 h-2/3 bg-gray-400 rounded-xl"></div>
  </div>
</template>

<script lang="ts">
import AccountRequestClass from "@/packages/RequestHandler/AccountRequestClass";
import {ResponseData, ResultCodes} from "@/packages/Entities";
import {defineComponent} from "vue";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";

const password = "qwe123@#$QWE"
const passwordWrong = "qwe123"

export default defineComponent({
  name: "JAuthTestComponent",
  inject: ['requestHandler'],
  data(){
    return{
      accountHandler: new AccountRequestClass(this.requestHandler as unknown as IRequestHandler),
      requestResult: "0",
      isLoading: false,
    }
  },
  methods: {
    async loginPassword(){
      this.requestResult = "";
      this.setResult(await this.accountHandler
          .loginPassword({login: "k.buiko04@mail.ru", password: password}));
    },
    async loginToken(){
      this.requestResult = "";
      this.setResult(await this.accountHandler
          .loginToken());
    },
    async registration(){
      this.requestResult = "";
      this.setResult(await this.accountHandler
          .registration({email: "k.buiko04@mail.ru", phone: "79137428483", password: password}));
    },
    async registrationWrong(){
      this.requestResult = "";
      this.setResult(await this.accountHandler
          .registration({email: "k.buiko05@mail.ru", phone: "70137428483", password: passwordWrong}));
    },
    async logout(){
      this.requestResult = "";
      this.setResult(await this.accountHandler
          .logout());
    },
    openOverlay(){
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    setResult(response: ResponseData<object>){
      let res;
      switch(response.code){
        case ResultCodes.OK:
          res = "ОК";
          break;
        case ResultCodes.CONNECTION_ERROR:
          res = "Ошибка сети";
          break;
        case ResultCodes.CONFIGURATION_ERROR:
          res = "Ошибка конфигурации";
          break;
        default:
          if(response.error !== undefined)
            res = response.error.description
          else res = "Ошибка";
      }
      this.requestResult = res;
    },
    isCookieEnabled(){
      return navigator.cookieEnabled;
    }
  },
  computed: {

  }
});
</script>

<style scoped lang="scss">
  button{
    display: block;
    width: 200px;
    height: 70px;
    margin-block: 10px;
    border: 2px solid black;
    &:hover{
      border-width: 3px;
    }
    &:active{
      border-width: 2px;
    }
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    transition: all 0.6s;
    clip-path: circle(0% at 105% -5%);
    &.active{
      clip-path: circle(100%);
      background: rgba(0,0,0,0.5);
    }
  }
</style>