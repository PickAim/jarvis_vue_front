<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {useWidgetStore} from "@/stores/widgetStore";
import {storeToRefs} from "pinia";
import {useOverlayStateStore} from "@/stores/overlayStore";

const widgetStore = useWidgetStore();
const {overlayOptions} = storeToRefs(useOverlayStateStore());
const {widgetList} = storeToRefs(widgetStore)

</script>

<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Настройка виджета цен ниши</header>
      <div class="input-wrapper">
      </div>
      <ControlButton class="submit">Подтвердить</ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<style scoped lang="scss">
.overlay-window-wrapper {
  width: 450px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  header {
    font-size: 30px;
  }

  .input-wrapper {
    width: 300px;
  }

  .submit {
    font-size: 22px;
    margin-top: 30px;
    height: 50px;
    width: 250px;
  }
}
</style>
