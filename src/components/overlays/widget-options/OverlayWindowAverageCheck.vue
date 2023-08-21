<template>
  <div class="overlay-body-average-check">
    <ControlTextInput placeholder="Текст"
                      :modelValue="options.config.options.inputText"
                      @update:model-value="v => widgetOptions.inputText = v"/>
    <ControlButton class="submit-button" @click="onSubmitClick">
      Подтвердить
    </ControlButton>
  </div>
</template>

<script setup lang="ts">
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import {reactive} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {WidgetOptions} from "@/types/WidgetTypes";
import _ from "lodash";
type widgetName = "averageCheck";

defineProps<{
  options: WidgetClass<widgetName>
}>()

const emit = defineEmits<{
  (ev: 'submit', options: WidgetOptions[widgetName]): void
}>()

const widgetOptions = reactive<WidgetOptions[widgetName]>({
  inputText: ""
});

function onSubmitClick() {
  emit('submit', _.cloneDeep(widgetOptions));
}
</script>

<style scoped lang="scss">
.overlay-body-average-check {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-inline: 20px;
  align-items: stretch;

  .submit-button {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
