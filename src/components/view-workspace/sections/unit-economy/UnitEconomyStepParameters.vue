<script setup lang="ts">
import {computed, reactive, Ref, ref} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {TransitUnitEconomyRequestData} from "@/types/DataTypes";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import UnitEconomyStep from "@/components/view-workspace/sections/unit-economy/UnitEconomyStep.vue";
import NicheSelect from "@/components/view-workspace/NicheSelect.vue";
import {UnitEconomyParameterLabelType, unitEconomyParameters} from "@/component-actions/view-workspace/workspaceLabels";

const props = defineProps<{
  shown: boolean,
  parameters: TransitUnitEconomyRequestData,
  isCalculateTransit: boolean
}>();

const emits = defineEmits<{
  <A extends keyof TransitUnitEconomyRequestData>(e: "parameterChanged", key: A, value: TransitUnitEconomyRequestData[A]): void,
  (e: "calculate"): void,
  (e: "update:isCalculateTransit", value): void
}>()

const nicheSelectComp = ref(null);

type InputInfoType<VType> =
    {
      name?: keyof TransitUnitEconomyRequestData,
      value?: VType | Ref<VType>,
      onChange?: (value: VType) => void,
      placeholder?: string
    }
type InputTextInfoType = InputInfoType<string> &
    ({ type: "input" } & {
      inputType: "text" | "number" | "password",
      title: string
    });
type InputSelectInfoType = InputInfoType<string> &
    ({ type: "select" } & {
      options: { name: string, value: string }[]
    });
type InputCheckInfoType = InputInfoType<boolean> &
    ({ type: "check" });
type ParametersType =
    (InputTextInfoType | InputSelectInfoType | InputCheckInfoType)[];

function makeTitle(titleData: UnitEconomyParameterLabelType) {
  return titleData.title + (titleData.unit ? ` (${titleData.unit})` : "");
}

const baseInputParametersKeys = ["product_exist_cost", "cost_price", "length", "width", "height", "mass", "target_warehouse_id"];

const baseParameters = reactive<ParametersType>([
  ...(baseInputParametersKeys.map((key: keyof TransitUnitEconomyRequestData) =>
      ({name: key, type: "input", title: makeTitle(unitEconomyParameters[key]), inputType: "number"}))),
  {
    type: "check", value: computed(() => props.isCalculateTransit),
    placeholder: "Рассчитать стоимость транзита",
    onChange: onTransitCheckChanged
  }
])

const transitInputParametersKeys = ["logistic_count", "logistic_price", "transit_cost_for_cubic_meter"];

const transitParameters = reactive<ParametersType>(
    transitInputParametersKeys.map((key: keyof TransitUnitEconomyRequestData) =>
        ({name: key, type: "input", title: makeTitle(unitEconomyParameters[key]), inputType: "number"})));

const parameters = computed(() => [
  ...baseParameters,
  ...(props.isCalculateTransit ? transitParameters : [])
]);

function onMarketplaceChange(value) {
  defaultOnChange('marketplace_id', value);
}

function onCategoryChange(value) {
  defaultOnChange('category_id', value);
}

function onNicheChange(value) {
  defaultOnChange('niche_id', value);
}

function onTransitCheckChanged(value) {
  emits('update:isCalculateTransit', value);
}

async function setNicheByNames(marketplaceID: number, categoryName: string, nicheName: string) {
  await nicheSelectComp.value.setByNames(marketplaceID, categoryName, nicheName);
}

function defaultOnChange(parameter: keyof TransitUnitEconomyRequestData | undefined, value) {
  if (parameter !== undefined) {
    emits('parameterChanged', parameter, value);
  }
}

defineExpose({setNicheByNames});

</script>

<template>
  <UnitEconomyStep id="unit-economy-parameters" :class="{active: props.shown}">
    <template v-slot:header>Параметры</template>
    <template v-slot:body>
      <div class="inputs-wrapper">
        <NicheSelect ref="nicheSelectComp"
                     @update:marketplaceID="onMarketplaceChange"
                     @update:categoryID="onCategoryChange"
                     @update:nicheID="onNicheChange"
                     :request-level="201"/>
        <div class="input-item-wrapper" v-for="input in parameters" :key="input.name">
          <ControlTextInput v-if="input.type === 'input'"
                            :model-value="props.parameters[input.name] || input.value"
                            @update:model-value="(value) => {
                              input.onChange ? input.onChange(value) : defaultOnChange(input.name, value);
                            }"
                            :title="input.title"
                            :input-type="input.inputType"/>
          <ControlSelect v-if="input.type === 'select'"
                         :selected-value="input.value || props.parameters[input.name]"
                         @update:selected-value="(value) => {
                           input.onChange ? input.onChange(value) : defaultOnChange(input.name, value);
                         }"
                         :placeholder="input.placeholder"
                         :options="input.options"/>
          <ControlCheckBox v-if="input.type === 'check'"
                           :model-value="input.value || props.parameters[input.name]"
                           @update:model-value="(value) => {
                             input.onChange ? input.onChange(value) : defaultOnChange(input.name, value);
                           }">
            {{ input.placeholder }}
          </ControlCheckBox>
        </div>
      </div>
      <ControlButton class="calculate-button" @click="emits('calculate')">Рассчитать</ControlButton>
    </template>
  </UnitEconomyStep>
</template>

<style scoped lang="scss">
#unit-economy-parameters {
  position: relative;
  visibility: hidden;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    width: 400px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
    margin: 10px 0 50px 0;
    gap: 30px;

    .input-item-wrapper {
      flex: 0 0 auto;
    }
  }

  .calculate-button {
    flex: 0 0;
    width: 250px;
  }

  &.active {
    height: auto;
    visibility: visible;
    overflow: visible;
    opacity: 1;

    .inputs-wrapper {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>