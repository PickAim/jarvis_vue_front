<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Логин</header>
      <div class="input-wrapper">
        <ControlTextInput title="Логин"
                          input-type="text"
                          v-model="loginInput"/>
        <ControlTextInput title="Пароль"
                          input-type="password"
                          v-model="passwordInput"/>
      </div>
      <ControlButton class="submit"
                     @click="onLoginClick"
      >Подтвердить</ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {ref} from "vue";
import {OverlayLoginActions} from "@/component-actions/overlays-actions/OverlayLoginActions";
import {ResultCode} from "@/requests/ResultCode";
import {useRouter} from "vue-router";
import {useOverlayStateStore} from "@/stores/overlayStore";

const loginInput = ref("cooluser@jarvis.ru");
const passwordInput = ref("IfYouReadThisYouAwesome<666>");
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
  margin-bottom: 50px;

  header {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
  }

  .input-wrapper {
    color: white;
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
