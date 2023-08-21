<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {Ref} from "vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import {computed, reactive} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {OptionsType, UnitEconomyRequestData} from "@/types/DataTypes";
import ControlSelect from "@/components/controls/ControlSelect.vue";
import {niches} from "@/nichesData";

const props = defineProps<{
  shown: boolean,
  parameters: UnitEconomyRequestData,
  isCalculateWarehouse: boolean,
  isCalculateTransit: boolean
}>();

const emits = defineEmits<{
  <A extends keyof UnitEconomyRequestData>(e: "parameterChanged", key: A, value: UnitEconomyRequestData[A]): void,
  (e: "calculate"): void,
  (e: "update:isCalculateWarehouse", value): void,
  (e: "update:isCalculateTransit", value): void,
}>()

type InputInfoType =
    {
      name: keyof UnitEconomyRequestData,
      value?: string | Ref<string | number>,
      onChange?: (value: string) => void
    }
type InputTextInfoType = InputInfoType &
    ({ type: "input" } & {
      inputType: "text" | "number" | "password"
      placeholder: string,
    });
type InputSelectInfoType = InputInfoType &
    ({ type: "select" } & {
      options: { name: string, value: string }[]
      placeholder?: string,
      selectValue?: string
    });
type ParametersType =
    (InputTextInfoType | InputSelectInfoType)[];

const categoryOptions: OptionsType[] = Object.keys(niches).reduce(
    (accum, val, ind) => {
      accum.push({name: val, value: ind + 2})
      return accum;
    }, []);

const nicheOptions = computed<OptionsType[]>(() => {
  const nichesArray = niches[categoryOptions.find((option) => option.value == props.parameters.category_id)?.name];
  if (!nichesArray) return [];
  return nichesArray.reduce(
      (accum, val, ind) => {
        accum.push({name: val, value: ind + 2})
        return accum;
      }, []);
});

const nicheValue = computed<string>(() => {
  console.log(props.parameters);
  const nicheValue = nicheOptions.value.find(
      (niche) => niche.name.toLowerCase() == props.parameters.niche.toLowerCase())?.value || "";
  console.log("bla", categoryOptions, nicheValue);
  return nicheValue;
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
    selectValue: nicheValue
  },
  {name: "buy", type: "input", placeholder: "Себестоимость", inputType: "number"},
  {name: "pack", type: "input", placeholder: "Стоимость упаковки", inputType: "number"},
])

const transitParameters = reactive([
  {name: "transit_count", type: "input", placeholder: "Число товаров", inputType: "number"},
  {name: "transit_price", type: "input", placeholder: "Стоимость транзита", inputType: "number"},
  {
    name: "market_place_transit_price", type: "input", placeholder: "Стоимость транзита маркетплейса",
    inputType: "number"
  },
])

const warehouseParameters = reactive([
  {name: "warehouse_name", type: "input", placeholder: "Расположение склада", inputType: "text"},
])

const parameters = computed(() => [
  ...baseParameters,
  ...(props.isCalculateTransit ? transitParameters : []),
  ...(props.isCalculateWarehouse ? warehouseParameters : [])
]);

function onCategoryChange(value) {
  emits('parameterChanged', 'niche', "");
  defaultOnChange('category_id', value);
}

function onNicheChange(value) {
  emits('parameterChanged', 'niche', nicheOptions.value.find((niche) => niche.value == value)?.name || "");
}

function defaultOnChange(parameter: keyof UnitEconomyRequestData, value) {
  emits('parameterChanged', parameter, value);
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
                          :placeholder="input.placeholder"
                          :input-type="input.inputType"/>
        <ControlSelect v-if="input.type === 'select'"
                       :selected-value="input.selectValue || props.parameters[input.name]"
                       @update:selected-value="(value) => {
                            input.onChange ? input.onChange(value) : defaultOnChange(input.name, value);
                       }"
                       :placeholder="input.placeholder"
                       :options="input.options"
        />
      </div>
    </div>
    <div class="parameters-settings-wrapper">
      <div class="parameters-settings">
        <div class="parameters-settings-label">Дополнительно рассчитать:</div>
        <ControlCheckBox :model-value="isCalculateTransit"
                         @update:model-value="(value) => emits('update:isCalculateTransit', value)">
          Рассчитать стоимость транзита
        </ControlCheckBox>
        <ControlCheckBox :model-value="isCalculateWarehouse"
                         @update:model-value="(value) => emits('update:isCalculateWarehouse', value)">Рассчитать
          стоимость хранения
        </ControlCheckBox>
        <ControlButton class="calculate-button" @click="emits('calculate')">Рассчитать</ControlButton>
      </div>
    </div>
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
    margin-block: 20px;
    gap: 15px;

    .input-item-wrapper {
      flex: 0 0 auto;
    }
  }

  .parameters-settings-wrapper {
    position: absolute;
    width: 300px;
    height: 95%;
    right: 5px;
    top: 10px;

    .parameters-settings {
      position: sticky;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      top: 0;
      left: 0;
      gap: 5px;
      width: 100%;
      border: 2px solid white;
      padding: 10px 20px;
      border-radius: 15px;

      .parameters-settings-label {
        margin-bottom: 5px;
      }

      .calculate-button {
        width: 100%;
        margin-top: 10px;
      }
    }
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