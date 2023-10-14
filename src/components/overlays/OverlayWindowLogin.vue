<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import {ref} from "vue";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";
import {ResultCode} from "@/requests/ResultCode";
import {useRouter} from "vue-router";
import {useOverlayStateStore} from "@/stores/overlayStore";
import ControlTextInputTransparent from "@/components/controls/ControlTextInputTransparent.vue";
import ControlButtonTransparent from "@/components/controls/ControlButtonTransparent.vue";

const loginInput = ref("dummy");
const passwordInput = ref("dummy");
const actions = new OverlayLoginActions();
const router = useRouter();

function onLoginClick() {
  actions.login({login: loginInput.value, password: passwordInput.value}).then((resp) => {
    if (resp.code === ResultCode.OK) {
      router.replace('/workspace');
      useOverlayStateStore().closeOverlay();
    }
  });
}
</script>

<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Вход</header>
      <div class="input-wrapper">
        <ControlTextInputTransparent title="Логин"
                                     input-type="text"
                                     v-model="loginInput"/>
        <ControlTextInputTransparent title="Пароль"
                                     input-type="password"
                                     v-model="passwordInput"/>
      </div>
      <ControlButtonTransparent class="submit"
                                @click="onLoginClick">
        ОТПРАВИТЬ
      </ControlButtonTransparent>
      <div class="other-options">
        <div class="forgot-password">Забыли пароль?</div>
        <div class="registration-link">Ещё нет аккаунта?<br><b>РЕГИСТРАЦИЯ</b></div>
      </div>
    </main>
  </OverlayTemplateDecorated>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.overlay-window-wrapper {
  width: 500px;
  background: linear-gradient(180deg, rgba(84, 84, 84, 0.50) 0%, rgba(94, 94, 94, 0.09) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 21px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 25px;

  header {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    width: 100%;
    margin-top: 40px;
  }

  .submit {
    font-size: 17px;
    margin-top: 30px;
    min-height: 50px;
    height: 20px !important;
    //width: 250px;
  }

  .other-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 300;

    .registration-link {
      line-height: normal;
      text-align: center;
      margin-top: 17px;

      b {
        font-weight: 700;
      }
    }
  }
}
</style>
