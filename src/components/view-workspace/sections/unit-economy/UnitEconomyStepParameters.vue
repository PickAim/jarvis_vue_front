<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {Ref} from "vue";
import {computed, reactive} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {SelectOptionType, UnitEconomyRequestData} from "@/types/DataTypes";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import {niches} from "@/nichesData";

const props = defineProps<{
  shown: boolean,
  parameters: UnitEconomyRequestData,
  isCalculateTransit: boolean,
  isCalculateTransitCost: boolean
}>();

const emits = defineEmits<{
  <A extends keyof UnitEconomyRequestData>(e: "parameterChanged", key: A, value: UnitEconomyRequestData[A]): void,
  (e: "calculate"): void,
  (e: "update:isCalculateTransit", value): void,
  (e: "update:isCalculateTransitCost", value): void,
}>()

type InputInfoType<VType> =
    {
      name?: keyof UnitEconomyRequestData,
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
  return nicheOptions.value.find(
      (niche) => niche.name.toLowerCase() == props.parameters.niche.toLowerCase())?.value || "";
})

const baseParameters: ParametersType = reactive([
  {
    name: "marketplace_id", type: "select", placeholder: "Маркетплейс", options: [
      {name: "Wildberries", value: "2"},
      {name: "OZON", value: "3"},
    ]
  },
  {name: "category_id", type: "select", placeholder: "Категория", options: categoryOptions, onChange: onCategoryChange},
  {
    name: "niche", type: "select", placeholder: "Ниша", options: nicheOptions, onChange: onNicheChange,
    value: nicheValue
  },
  {name: "buy", type: "input", title: "Себестоимость", inputType: "number"},
  {name: "pack", type: "input", title: "Стоимость упаковки", inputType: "number"},
  {
    type: "check", value: computed(() => props.isCalculateTransitCost),
    placeholder: "Рассчитать стоимость транзита",
    onChange: onTransitCostCheckChanged
  }
])

const transitCostParameters: ParametersType = reactive([
  {name: "transit_count", type: "input", title: "Количество штук в партии", inputType: "number"},
  {name: "transit_price", type: "input", title: "Стоимость логистики партии", inputType: "number"},
  {
    name: "market_place_transit_price", type: "input", title: "Стоимость транзита маркетплейса",
    inputType: "number"
  },
  {
    type: "check", value: computed(() => props.isCalculateTransit), placeholder: "Транзитная поставка",
    onChange: onTransitCheckChanged
  }
])

const transitParameters: ParametersType = reactive([
  {name: "warehouse_name", type: "input", title: "Расположение склада", inputType: "text"},
])

const parameters = computed(() => [
  ...baseParameters,
  ...(props.isCalculateTransitCost ? transitCostParameters : []),
  ...(props.isCalculateTransit ? transitParameters : [])
]);

function onCategoryChange(value) {
  emits('parameterChanged', 'niche', "");
  defaultOnChange('category_id', value);
}

function onNicheChange(value) {
  emits('parameterChanged', 'niche', nicheOptions.value.find((niche) => niche.value == value)?.name || "");
}

function onTransitCostCheckChanged(value) {
  if (value === false) {
    onTransitCheckChanged(false);
  }
  emits('update:isCalculateTransitCost', value);
}

function onTransitCheckChanged(value) {
  emits('update:isCalculateTransit', value);
}

function defaultOnChange(parameter: keyof UnitEconomyRequestData | undefined, value) {
  if (parameter !== undefined) {
    emits('parameterChanged', parameter, value);
  }
}

</script>

<template>
  <div id="unit-economy-parameters" class="unit-economy-step" :class="{active: props.shown}">
    <h2>Шаг 2. Параметры</h2>
    <div class="inputs-wrapper">
      <div class="input-item-wrapper" v-for="input in parameters" :key="input.name">
        <ControlTextInput v-if="input.type === 'input'"
                          :model-value="props.parameters[input.name]"
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
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  position: relative;
  visibility: hidden;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    width: 700px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
    margin: 10px 0 50px 0;
    gap: 15px;

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
      transform: translateY(0px);
    }
  }
}
</style>