<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlButton from "@/components/controls/ControlButton.vue";

import {ref} from "vue";
import {OverlayRegistrationActions} from "@/component-actions/overlays-actions/OverlayRegistrationActions";

const emailInput = ref("")
const phoneInput = ref("")
const passwordInput = ref("")
const passwordRepeatInput = ref("")
const actions = new OverlayRegistrationActions()
</script>

<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Регистрация</header>
      <div class="input-wrapper">
        <ControlTextInput title="Почта" input-type="email" v-model="emailInput"/>
        <ControlTextInput title="Телефон" input-type="text" v-model="phoneInput"/>
        <ControlTextInput title="Пароль" input-type="password" v-model="passwordInput"/>
        <ControlTextInput title="Пароль ещё раз" input-type="password" v-model="passwordRepeatInput"/>
      </div>
      <ControlButton class="submit" :disabled="passwordInput !== passwordRepeatInput"
                     @click="actions.registration({ phone: phoneInput, email: emailInput, password: passwordInput })">
        Подтвердить
      </ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<style scoped lang="scss">
.overlay-window-wrapper {
  width: 450px;
  background: linear-gradient(180deg, rgba(52, 52, 52, 0.5) 0%, rgba(217, 217, 217, 0.07) 100%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 21px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;


  border-radius: 21px;

  header {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
  }

  .input-wrapper {
    width: 100%;
  }

  .submit {
    font-size: 22px;
    margin-top: 30px;
    height: 50px;
    width: 250px;
  }
}
</style>
