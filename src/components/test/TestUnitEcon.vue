<template>
  <div class="workspace-header-wrapper">
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
      <ControlTextbox placeholder="Название запроса"
                      input-type="text"
                      v-model="calculator.info.name"/>
      <ControlTextbox placeholder="Название ниши"
                      input-type="text"
                      v-model="calculator.request.niche"/>
      <ControlTextbox placeholder="Себестоимость товара"
                      input-type="number"
                      v-model="calculator.request.buy"/>
      <ControlTextbox placeholder="Стоимость упаковки"
                      input-type="number"
                      v-model="calculator.request.pack"/>
      <ControlCheckBox v-model="calculator.isTransitOn">Рассчитать транзит</ControlCheckBox>
      <div class="transit-calc-input-wrapper" :class="{active: calculator.isTransitOn}">
        <ControlTextbox placeholder="Стоимость транзита маркетплейса"
                        input-type="number"
                        v-model="calculator.request.market_place_transit_price"/>
        <ControlTextbox placeholder="Стоимость транзита"
                        input-type="number"
                        v-model="calculator.request.transit_price"/>
        <ControlTextbox placeholder="Число товаров"
                        input-type="number"
                        v-model="calculator.request.transit_count"/>
      </div>
      <ControlCheckBox v-model="calculator.isWarehouseOn">Указать склад</ControlCheckBox>
      <div class="warehouse-input-wrapper" :class="{active: calculator.isWarehouseOn}">
        <ControlTextbox placeholder="Наименование склада"
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
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import {computed, reactive} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";
import type {UnitEconomyResultData} from "@/types/DataTypes";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";
import SavedItemsList from "@/components/calc-requests/SavedItemsList.vue";

const calculator = reactive(new UnitEconomyCalculator());

console.log("UNIT ECON TEST");

const chartKeyToTitle: { [ind in keyof UnitEconomyResultData]: string } = {
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
  console.log("get all")
  await calculator.loadAll();
}

</script>

<style scoped lang="scss">
.workspace-header-wrapper {
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