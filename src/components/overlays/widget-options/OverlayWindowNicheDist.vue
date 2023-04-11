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
import {OverlayWidgetSettingsActions} from "@/component-actions/overlays-actions/OverlayWidgetSettingsActions";
import {useWidgetStore} from "@/stores/widgetStore";
import {Widget} from "@/types/Objects";
import {storeToRefs} from "pinia";
import {useOverlayStateStore} from "@/stores/overlayStore";
import {computed} from "vue";

const actions = new OverlayWidgetSettingsActions<"nicheDist">();
const widgetStore = useWidgetStore();
const {overlayOptions} = storeToRefs(useOverlayStateStore());
const {widgetList} = storeToRefs(widgetStore)

const saveResultID = computed(() => {
  if(!overlayOptions.value) return "";
  const settings = (widgetList.value[overlayOptions.value.index] as Widget<"nicheDist">).settings;
  if(!settings) return "";
  return settings.saveResultID;
})
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
