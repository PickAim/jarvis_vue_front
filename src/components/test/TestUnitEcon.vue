<template>
  <div class="view-workspace-header">
    <div class="calc-input-wrapper">
      <div class="calc-control-button-wrapper">
        <ControlButton @click="getAllClickHandler"
                       class="button">[Запросить с сервера]
        </ControlButton>
        <ControlButton @click="calculateClickHandler()"
                       class="button">Расчёт
        </ControlButton>
        <ControlButton @click="saveClickHandler()"
                       class="button">Сохранить
        </ControlButton>
        <ControlButton v-show="calculator.info.id !== undefined"
                       @click="newClickHandler()"
                       class="button">Создать новый на основе этого
        </ControlButton>
      </div>
      <ControlTextInput title="Название запроса"
                        input-type="text"
                        v-model="calculator.info.name"/>
      <ControlTextInput title="Название ниши"
                        input-type="text"
                        v-model="calculator.request.niche"/>
      <ControlTextInput title="Себестоимость товара"
                        input-type="number"
                        v-model="calculator.request.cost_price"/>
      <ControlTextInput title="Стоимость упаковки"
                        input-type="number"
                        v-model="calculator.request.pack"/>
      <ControlCheckBox v-model="calculator.isTransitCostOn">Рассчитать транзит</ControlCheckBox>
      <div class="transit-calc-input-wrapper" :class="{active: calculator.isTransitCostOn}">
        <ControlTextInput title="Стоимость транзита маркетплейса"
                          input-type="number"
                          v-model="calculator.request.market_place_transit_price"/>
        <ControlTextInput title="Стоимость транзита"
                          input-type="number"
                          v-model="calculator.request.transit_price"/>
        <ControlTextInput title="Число товаров"
                          input-type="number"
                          v-model="calculator.request.transit_count"/>
      </div>
      <ControlCheckBox v-model="calculator.isTransitOn">Указать склад</ControlCheckBox>
      <div class="warehouse-input-wrapper" :class="{active: calculator.isTransitOn}">
        <ControlTextInput title="Наименование склада"
                          input-type="text"
                          v-model="calculator.request.warehouse_name"/>
      </div>
    </div>
    <div class="saved-requests-wrapper">
      <SavedItemsList name="unitEcon"
                      :calculator="calculator"
                      :calculator-class="UnitEconomyCalculator"/>
    </div>
    <div class="calc-result-wrapper">
      <DoughnutBar class="result-chart"
                   :data-and-labels="chartResult"
                   :title="chartTitle" v-if="chartResult.length >= 0"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import {computed, reactive} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";
import type {TransitUnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";
import SavedItemsList from "@/components/calc-requests/SavedItemsList.vue";

const calculator = reactive(new UnitEconomyCalculator());

const chartKeyToTitle: { [ind in keyof TransitUnitEconomyResultData]: string } = {
  margin: "Маржа",
  logistic_price: "Логистики",
  pack_cost: "Стоиомсть упаковки",
  product_cost: "Себестоимость",
  storage_price: "Хранение",
  marketplace_commission: "Комиссия маркетплейса",
  transit_margin: "Комиссия транзита",
  transit_profit: "Транизтная выручка",
  recommended_price: "",
  roi: ""
}

const chartResult = computed(() => {
  const result = [];
  if (!calculator.result) return result;
  Object.keys(calculator.result).forEach((key) => {
    const value = calculator.result[key];
    if (value !== undefined) {
      const title = chartKeyToTitle[key];
      if (title === "") return;
      result.push([value, title]);
    }
  });
  return result;
});

const chartTitle = computed(() => `Рекомендуемая цена: ${calculator.result?.recommended_price}`);

async function calculateClickHandler() {
  await calculator.calculate();
}

async function saveClickHandler() {
  await calculator.saveRequest();
}

function newClickHandler() {
  calculator.createNewRequest();
}

async function getAllClickHandler() {
  await calculator.loadAll();
}

</script>

<style scoped lang="scss">
.view-workspace-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
}

.checkbox-wrapper {
  margin-top: 10px;
}

.calc-input-wrapper, .saved-requests-wrapper, .calc-result-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0;
  margin-inline: 3px;
}

.calc-input-wrapper {
  .transit-calc-input-wrapper, .warehouse-input-wrapper {
    display: none;

    &.active {
      display: unset;
    }
  }

  .calc-control-button-wrapper {
    position: relative;

    .button {
      margin-bottom: 5px;
      width: 100%;
    }
  }
}

.saved-requests-wrapper {
  .request-item {
    border: 3px solid black;
  }
}

.calc-result-wrapper {
  .result-item {
    border: 3px solid black;
  }
}

.result-chart {
  height: 400px;
}
</style>