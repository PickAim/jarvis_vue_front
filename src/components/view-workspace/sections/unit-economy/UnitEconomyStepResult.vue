<script setup lang="ts">
import type {SimpleUnitEconomyResultData, TransitUnitEconomyResultData} from "@/types/DataTypes";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";
import {computed, ref} from "vue";
import UnitEconomyStep from "@/components/view-workspace/sections/unit-economy/UnitEconomyStep.vue";

const props = defineProps<{
  shown: boolean,
  saveName: string,
  resultData: TransitUnitEconomyResultData | undefined
}>();

// const emits = defineEmits<{
//   (e: "saveRequest", name: string): void
// }>();

// const requestNamePlaceholder = computed(() => `${props.saveName}, ${
//     (new Date()).toLocaleDateString('ru-RU', {day: "2-digit", month: "short"})
// }`);
// const requestName = ref(requestNamePlaceholder);
const showResultIndex = ref<"0" | "1">("0");

type FirstKey = Omit<TransitUnitEconomyResultData[0], SimpleUnitEconomyResultData[0]>;
type SecondKey = SimpleUnitEconomyResultData[0];
type KeyOrFunction<KT> = keyof KT | [keyof KT, (<T>(a: T) => T)];
type KeyTitles = [string, [KeyOrFunction<FirstKey>, KeyOrFunction<SecondKey>] | [KeyOrFunction<FirstKey | SecondKey>]][]

const chartKeyTitles: KeyTitles = [
  ["Маржа", ["absolute_transit_margin", "absolute_margin"]],
  ["Налоги", ["tax_expanses", ["result_cost", (val) => val * 0.06]]],
  ["Маркетплейс", ["commercial_expanses", "marketplace_expanses"]],
  ["Себестоимость", ["purchase_investments", "purchase_cost"]],
]

const inFixed = (val) => val.toFixed(2);
const inRub = (val) => `${inFixed(val)} ₽`;
const inPercents = (val) => `${inFixed(val * 100)} %`;


const textKeyTitles: KeyTitles = [
  ["Стоимость логистики: ", [["logistic_price", inRub]]],
  ["Стоимость хранения: ", [["storage_price", inRub]]],
  ["Относительная маржинальность: ", [["relative_transit_margin", inPercents], ["relative_margin", inPercents]]],
  ["ROI: ", [["transit_roi", inFixed], ["roi", inFixed]]],
]

const keyTitlesArray = [chartKeyTitles, textKeyTitles]

const computedResult = computed<[number, string][][]>(() => {
  if (!props.resultData) return [];
  const resultData = props.resultData[showResultIndex.value];
  // map all keyTitles parts of result
  return keyTitlesArray.map((keyTitles) => {
    return keyTitles.reduce((valueAndTexts, titleAndKeys) => {
      titleAndKeys[1].some(keyOrFunction => {
        if (typeof keyOrFunction === "object") {
          const value = resultData[keyOrFunction[0]];
          if (value != undefined) {
            valueAndTexts.push([keyOrFunction[1](value), titleAndKeys[0]]);
            return true;
          }
        } else {
          const value = resultData[keyOrFunction];
          if (value != undefined) {
            valueAndTexts.push([value, titleAndKeys[0]]);
            return true;
          }
        }
      })
      return valueAndTexts;
    }, [] as [number, string][]);
  });
});

const chartTitle = computed(() =>
    (showResultIndex.value === "1" ? "Рекомендуемая цена:" : "Текущая цена:") +
    ` ${props.resultData && inRub(props.resultData[showResultIndex.value].result_cost)}`);
</script>

<template>
  <UnitEconomyStep id="unit-economy-result" :class="{active: props.shown}">
    <template v-slot:header>Результат</template>
    <template v-slot:body>
      <div class="result-wrapper">
        <div class="right-wrapper">
          <div class="result-choose-wrapper">
            <div class="choose-button">
              <input type="radio" name="result-choose" id="choose-recommendation" value="1" v-model="showResultIndex">
              <label for="choose-recommendation">Показать расчёт по рекомендованной цене</label>
            </div>
            <div class="choose-button">
              <input type="radio" name="result-choose" id="choose-current" value="0" v-model="showResultIndex">
              <label for="choose-current">Показать расчёт по текущей цене</label>
            </div>
          </div>
          <div class="text-result">
            <div class="result-item" v-for="(res, ind) in computedResult[1]" :key="ind">
              <div class="result-title">{{ res[1] }}</div>
              <div class="result-value" :class="{negative: res[0].toString().split(' ')[0] < 0}">{{ res[0] }}</div>
            </div>
          </div>
        </div>
        <div class="chart-wrapper">
          <DoughnutBar class="result-chart"
                       :data-and-labels="computedResult[0]"
                       :title="chartTitle" v-if="computedResult.length > 0"/>
        </div>
      </div>
      <!--      <div class="save-wrapper">-->
      <!--        <ControlTextInput class="save-name-input"-->
      <!--                          v-model="requestName"-->
      <!--                          title="Имя сохранения"/>-->
      <!--        <ControlButton class="save-button"-->
      <!--                       @click="emits('saveRequest', requestName)">-->
      <!--          Сохранить запрос-->
      <!--        </ControlButton>-->
      <!--      </div>-->
    </template>
  </UnitEconomyStep>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.unit-economy-step {
  position: relative;
  visibility: hidden;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s;

  .step-body {
    align-items: center;
  }

  .result-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 750px;
    gap: 60px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
    margin-block: 5px;

    .right-wrapper {
      display: flex;
      gap: 30px;
      flex-direction: column;
      align-items: flex-start;

      .result-choose-wrapper {
        display: flex;
        flex-direction: column;
        width: fit-content;

        .choose-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          font-size: 18px;

          input {
            border: 0;
            width: 1em;
            height: 1em;
          }
        }
      }

      .text-result {
        flex: 1;
        display: flex;
        align-items: stretch;
        width: 100%;
        gap: 10px;
        flex-direction: column;

        .result-item {
          display: grid;
          grid-template-columns: 1fr 100px;
          border-bottom: 1px solid var.$green-jarvis-color;
          font-size: 18px;

          .result-value {
            font-weight: 700;

            &.negative {
              color: rgb(255, 68, 68);
            }
          }
        }
      }
    }

    .chart-wrapper {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .result-chart {
        flex: 1 0;
        width: 100%;
        max-width: 400px;
      }
    }

    .result-content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 100%;
      height: 100%;

      .data-visualizers {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .save-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 900px;
    margin-top: 50px;

    .save-name-input {
      flex: 1 0;
    }

    .save-button {
      margin-left: 30px;
    }
  }

  &.active {
    height: auto;
    visibility: visible;
    opacity: 1;

    .result-wrapper {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>