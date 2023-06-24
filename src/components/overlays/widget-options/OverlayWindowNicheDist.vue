<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="">
    <main>
      <header>Настройка виджета цен ниши {{saveResultID}}</header>
      <div class="input-block">
      </div>
      <ControlButton class="submit">Подтвердить</ControlButton>
    </main>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {OverlayWidgetSettingsActions} from "@/component-classes/overlays-actions/OverlayWidgetSettingsActions";
import {useWidgetStore} from "@/stores/widgetStore";
import {storeToRefs} from "pinia";
import {useOverlayStateStore} from "@/stores/overlayStore";
import {computed} from "vue";
import type {Widget} from "@/types/WidgetTypes";

const widgetStore = useWidgetStore();
const {overlayOptions} = storeToRefs(useOverlayStateStore());
const {widgetList} = storeToRefs(widgetStore)
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
    font-size: 30px;
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
