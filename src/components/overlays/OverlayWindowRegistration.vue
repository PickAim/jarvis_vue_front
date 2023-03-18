<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Регистрация</header>
      <div class="input-block">
        <ControlTextbox
            placeholder="Почта"
            input-type="email"
            v-model="emailInput"/>
        <ControlTextbox
            placeholder="Телефон"
            input-type="text"
            v-model="phoneInput"/>
        <ControlTextbox
            placeholder="Пароль"
            input-type="password"
            v-model="passwordInput"/>
        <ControlTextbox
            placeholder="Пароль ещё раз"
            input-type="password"
            v-model="passwordRepeatInput"/>
      </div>
      <ControlButton
          class="submit"
          :disabled="passwordInput!==passwordRepeatInput"
          @click="actions.registration({phone: phoneInput, email: emailInput, password: passwordInput})"
      >Подтвердить</ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {ref} from "vue";
import {OverlayRegistrationActions} from "@/component-actions/overlays-actions/OverlayRegistrationActions";

const emailInput = ref("")
const phoneInput = ref("")
const passwordInput = ref("")
const passwordRepeatInput = ref("")
const actions = new OverlayRegistrationActions()

console.log("LOGIN WINDOW")

</script>

<style scoped lang="scss">
.overlay-window-wrapper{
  width:450px;
}

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;

  header{
    font-size: 40px;
  }

  .input-block{
    width: 300px;
  }

  .submit{
    font-size: 22px;
    margin-top: 30px;
    height: 50px;
    width: 250px;
  }
}
</style>
