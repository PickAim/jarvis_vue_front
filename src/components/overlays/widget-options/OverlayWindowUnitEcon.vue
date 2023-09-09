<script setup lang="ts">
import {reactive} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";
import type {WidgetOptions} from "@/types/WidgetTypes";
import _ from "lodash";
import {useUnitEconCalcStore} from "@/stores/CalcStores";

type widgetName = "unitEcon";

defineProps<{
  options: WidgetClass<widgetName>
}>()

const emit = defineEmits<{
  (ev: 'submit', options: WidgetOptions[widgetName]): void
}>()

const requests = useUnitEconCalcStore().requests;

const widgetOptions = reactive<WidgetOptions[widgetName]>({
  saveResultID: "0"
});

function onSubmitClick() {
  emit('submit', _.cloneDeep(widgetOptions));
}
</script>

<template>
  <div class="overlay-body-average-check">
    <select v-model="widgetOptions.saveResultID">
      <option v-for="r in requests" :key="r.info.id" :value="r.info.id">
        {{ r.info.name }}
      </option>
    </select>
    <ControlButton class="submit-button" @click="onSubmitClick">
      Подтвердить
    </ControlButton>
  </div>
</template>

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
