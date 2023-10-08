<script setup lang="ts">
import type {Ref} from "vue";
import {computed, reactive} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {SelectOptionType, TransitUnitEconomyRequestData} from "@/types/DataTypes";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import {niches} from "@/nichesData";
import UnitEconomyStep from "@/components/view-workspace/sections/unit-economy/UnitEconomyStep.vue";

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

const categoryOptions: SelectOptionType[] = Object.keys(niches).reduce(
    (accum, val, ind) => {
      accum.push({name: val, value: ind + 2})
      return accum;
    }, []);

const nicheOptions = computed<SelectOptionType[]>(() => {
  const nichesArray = niches[categoryOptions.find((option) => option.value == props.parameters.category_id)?.name];
  if (!nichesArray) return [];
  return nichesArray.reduce(
      (accum, val, ind) => {
        accum.push({name: val, value: ind + 2})
        return accum;
      }, []);
});

const nicheValue = computed<string>(() => {
  return props.parameters.niche_id.toString();
})

const baseParameters = reactive<ParametersType>([
  {
    name: "marketplace_id", type: "select", placeholder: "Маркетплейс", options: [
      {name: "Wildberries", value: "2"},
      {name: "OZON", value: "3"},
    ]
  },
  {name: "category_id", type: "select", placeholder: "Категория", options: categoryOptions, onChange: onCategoryChange},
  {
    name: "niche_id", type: "select", placeholder: "Ниша", options: nicheOptions.value, onChange: onNicheChange,
    value: nicheValue
  },
  {name: "product_exist_cost", type: "input", title: "Текущая цена товара", inputType: "number", value: "0"},
  {name: "cost_price", type: "input", title: "Себестоимость", inputType: "number"},
  {name: "length", type: "input", title: "Длина", inputType: "number"},
  {name: "width", type: "input", title: "Ширина", inputType: "number"},
  {name: "height", type: "input", title: "Высота", inputType: "number"},
  {name: "mass", type: "input", title: "Масса", inputType: "number"},
  {name: "target_warehouse_id", type: "input", title: "Склад назначения", inputType: "number"},
  {
    type: "check", value: computed(() => props.isCalculateTransit),
    placeholder: "Рассчитать стоимость транзита",
    onChange: onTransitCheckChanged
  }
])

const transitParameters: ParametersType = reactive([
  {name: "logistic_count", type: "input", title: "Количество штук в партии", inputType: "number"},
  {name: "logistic_price", type: "input", title: "Стоимость логистики партии", inputType: "number"},
  {name: "transit_cost_for_cubic_meter", type: "input", title: "Стоимость перевоза за м^3", inputType: "number"}
])

const parameters = computed(() => [
  ...baseParameters,
  ...(props.isCalculateTransit ? transitParameters : [])
]);

function onCategoryChange(value) {
  emits('parameterChanged', 'niche_id', 0);
  defaultOnChange('category_id', value);
}

function onNicheChange(nicheID) {
  emits('parameterChanged', 'niche_id', nicheID);
}

function onTransitCheckChanged(value) {
  emits('update:isCalculateTransit', value);
}

function defaultOnChange(parameter: keyof TransitUnitEconomyRequestData | undefined, value) {
  if (parameter !== undefined) {
    emits('parameterChanged', parameter, value);
  }
}

</script>

<template>
  <UnitEconomyStep id="unit-economy-parameters" :class="{active: props.shown}">
    <template v-slot:header>Параметры</template>
    <template v-slot:body>
      <div class="inputs-wrapper">
        <div class="input-item-wrapper" v-for="input in parameters" :key="input.name">
          <ControlTextInput v-if="input.type === 'input'"
                            :model-value="props.parameters[input.name] || input.value"
                            @update:model-value="(value) =>
                            {
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