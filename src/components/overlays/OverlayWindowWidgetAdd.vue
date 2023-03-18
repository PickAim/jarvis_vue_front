<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Добавление виджета</header>
      <div class="input-block">
        <ControlTextbox
            placeholder="Логин"
            input-type="text"
            v-model="loginInput"/>
        <ControlTextbox
            placeholder="Пароль"
            input-type="password"
            v-model="passwordInput"/>
      </div>
      <ControlButton
          class="submit"
          @click="actions.login({login: loginInput, password: passwordInput})">Подтвердить</ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {ref} from "vue";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";

const loginInput = ref("")
const passwordInput = ref("")
const actions = new OverlayLoginActions()

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
  margin-bottom: 50px;

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
