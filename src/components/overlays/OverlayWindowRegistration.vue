<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";

import {ref} from "vue";
import {OverlayRegistrationActions} from "@/component-actions/overlays-actions/OverlayRegistrationActions";
import ControlButtonTransparent from "@/components/controls/ControlButtonTransparent.vue";
import ControlTextInputTransparent from "@/components/controls/ControlTextInputTransparent.vue";
import {useOverlayStateStore} from "@/stores/overlayStore";
import {ResultCode} from "@/requests/ResultCode";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";
import {useRouter} from "vue-router";
import FormComponent from "@/components/generals/FormComponent.vue";

const emailInput = ref("")
const phoneInput = ref("")
const passwordInput = ref("")
const passwordRepeatInput = ref("")
const actions = new OverlayRegistrationActions();
const loginActions = new OverlayLoginActions();
const router = useRouter();
const overlayState = useOverlayStateStore();

async function onRegistration() {
  const res = await actions.registration({
    phone: phoneInput.value,
    email: emailInput.value,
    password: passwordInput.value
  });
  if (res.code === ResultCode.OK) {
    await loginActions.login({login: emailInput.value, password: passwordInput.value}).then((resp) => {
      if (resp.code === ResultCode.OK) {
        router.replace('/workspace');
        useOverlayStateStore().closeOverlay();
      }
    });
  }
}
</script>

<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Регистрация</header>
      <FormComponent class="input-wrapper" @submit="onRegistration">
        <ControlTextInputTransparent title="Почта" input-type="email" v-model="emailInput"/>
        <ControlTextInputTransparent title="Телефон" input-type="text" v-model="phoneInput"/>
        <ControlTextInputTransparent title="Пароль" input-type="password" v-model="passwordInput"/>
        <ControlTextInputTransparent title="Пароль ещё раз" input-type="password" v-model="passwordRepeatInput"/>
      </FormComponent>
      <ControlButtonTransparent class="submit" :disabled="passwordInput !== passwordRepeatInput"
                                @click="onRegistration">
        Подтвердить
      </ControlButtonTransparent>
      <div class="other-options">
        <div class="login-link" @click="overlayState.openOverlay('login')">Уже есть аккаунт?<br><b>ВХОД</b></div>
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
  padding-block: 25px;
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
    user-select: none;

    .login-link {
      line-height: normal;
      text-align: center;
      margin-top: 17px;
      cursor: pointer;

      b {
        font-weight: 700;
      }
    }
  }
}
</style>
