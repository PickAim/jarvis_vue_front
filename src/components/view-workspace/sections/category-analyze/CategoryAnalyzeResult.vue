<script setup lang="ts">

import type {NicheCharacteristicsResultData} from "@/types/DataTypes";
import {computed} from "vue";

const props = defineProps<{
  resultData?: NicheCharacteristicsResultData
}>()

const inFixed = (val) => val.toFixed(2);
const inRub = (val) => `${inFixed(val)} ₽`;
const inPercents = (val) => `${inFixed(val * 100)} %`;
const inStars = (val) => `${inFixed(val)} ⭐`; //

type KeyTitles = { [key in keyof NicheCharacteristicsResultData]: undefined | string | [string, (<T>(a: T) => T)] }

const keyToTitles: KeyTitles = {
  card_count: "Количество товаров:",
  card_trade_count: "Количество продаж:",
  card_with_trades_count: "Количество товаров с продажами:",
  daily_mean_niche_profit: ["Средняя выручка в день:", inRub],
  daily_mean_trade_count: "Средние продажи в день:",
  maximum_profit_idx: undefined,
  mean_card_rating: ["Средний рейтинг:", inStars],
  mean_traded_card_cost: ["Средняя цена проданных товаров:", inRub],
  monopoly_percent: ["Процент монополии:", inPercents],
  month_mean_niche_profit_per_card: ["Средняя выручка в месяц на товар:", inRub],
  niche_profit: ["Выручка за месяц:", inRub]
}

const computedResult = computed<[string, number][]>(() => {
  if (!props.resultData) return [];
  const resultData = props.resultData;
  // map all keyTitles parts of resultData
  return Object.keys(keyToTitles)
      .filter(key => keyToTitles[key])
      .map((key) => {
        const [title, handler] =
            (typeof keyToTitles[key] === "object" ? keyToTitles[key] : [keyToTitles[key], (v) => v]);
        return [title, handler(resultData[key])];
      });
});
</script>

<template>
  <div class="category-analyze-result">
    <div class="category-characteristics-table">
      <template v-for="[title, value] in computedResult" :key="title">
        <div class="characteristic-title">{{ title }}</div>
        <div class="characteristic-value">{{ value }}</div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.category-analyze-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .category-characteristics-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 32px;
    background: var.$dark-gradient-color;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 47px;

    .characteristic-title {
      grid-column: 1;
    }

    .characteristic-value {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 2;
      height: 40px;
      border: 1px solid var.$green-jarvis-color;
      border-radius: 3px;
      font-weight: 700;
    }
  }
}
</style>