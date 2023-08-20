<script setup lang="ts">
import "./unit-economy-step-style.scss";
import type {Ref} from "vue";
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import {ref} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import type {UnitEconomyRequestData} from "@/types/DataTypes";

const props = defineProps<{
  shown: boolean,
  parameters: UnitEconomyRequestData
}>();

const emits = defineEmits<{
  <A extends keyof UnitEconomyRequestData>(e: "parameterChanged", key: A, value: UnitEconomyRequestData[A]): void,
  (e: "calculate"): void,

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
      options: string[]
      startValue: string
    });
type ParametersType =
    (InputTextInfoType | InputSelectInfoType)[];

const parameters: ParametersType = [
  {name: "buy", type: "input", placeholder: "Себестоимость", inputType: "number"},
  {name: "pack", type: "input", placeholder: "Стоимость упаковки", inputType: "number"},
  {name: "niche", type: "input", placeholder: "Ниша продукта (тут подсказки)", inputType: "text"},
  {name: "category_id", type: "input", placeholder: "Категория продукта (тут подсказки)", inputType: "text"},
  {name: "marketplace_id", type: "input", placeholder: "Маркетплейс (тут select)", inputType: "text"},
  {name: "transit_count", type: "input", placeholder: "Число товаров", inputType: "number"},
  {name: "transit_price", type: "input", placeholder: "Стоимость транзита", inputType: "number"},
]

const checkBox1 = ref(false);
const checkBox2 = ref(false);

</script>

<template>
  <div id="unit-economy-parameters" class="unit-economy-step" :class="{active: props.shown}">
    <h2>Шаг 2. Параметры</h2>
    <div class="input-wrapper" v-for="input in parameters" :key="input.name">
      <ControlTextbox v-if="input.type === 'input'"
                      :model-value="props.parameters[input.name]"
                      @update:model-value="(value) => emits('parameterChanged', input.name, value)"
                      :placeholder="input.placeholder"
                      :input-type="input.inputType"/>
    </div>
    <div class="parameters-settings-wrapper">
      <div class="parameters-settings">
        <div class="parameters-settings-label">Дополнительно рассчитать:</div>
        <ControlCheckBox v-model="checkBox1">Рассчитать стоимость транзита</ControlCheckBox>
        <ControlCheckBox v-model="checkBox2">Рассчитать стоимость хранения</ControlCheckBox>
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
  transition: all 0.3s;

  .input-wrapper {
    width: 400px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
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
        margin-top: 10px;
      }
    }
  }

  &.active {
    height: auto;
    visibility: visible;
    opacity: 1;

    .input-wrapper {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>