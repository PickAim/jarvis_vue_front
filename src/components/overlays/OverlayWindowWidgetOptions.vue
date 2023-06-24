<template>
  <OverlayTemplateDecorated class="overlay-window-widget-options" header-text="Изменение виджета">
    <component :is="widgetOptionsOverlays[options.config.widgetName]"
               @submit="onSubmitClick"
               :options="options"/>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {WidgetClass} from "@/component-classes/widgets/WidgetClass";
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import {OverlayWidgetSettingsActions} from "@/component-classes/overlays-actions/OverlayWidgetOptionsActions";
import type {WidgetName, WidgetOptions} from "@/types/WidgetTypes";
import {widgetOptionsOverlays} from "@/components/overlays/widget-options";

const props = defineProps<{
  options: WidgetClass<WidgetName>
}>()

function onSubmitClick<N extends WidgetName>(options: WidgetOptions[N]) {
  actions.onSubmit(props.options, options);
}

// TODO: CHANGE PROPS OPTIONS TYPE, MOVE ALL AND ADD DYNAMIC COMPONENT!
const actions = new OverlayWidgetSettingsActions();
</script>

<style scoped lang="scss">
.overlay-window-widget-options {
  width: 400px;
}
</style>