<template>
  <div class="unit-econ-wrapper">
    <div class="calc-input-wrapper">
      <div class="calc-control-button-wrapper">
        <ComponentPreloader :is-loading="isCalculating || isSaving"/>
        <ControlButton @click="getAllClickHandler"
                       class="button">[Запросить с сервера]
        </ControlButton>
        <ControlButton @click="calculateClickHandler()"
                       class="button">Расчёт
        </ControlButton>
        <ControlButton @click="saveClickHandler()"
                       class="button">Сохранить
        </ControlButton>
        <ControlButton v-show="calcRequestData.info.id !== undefined"
                       @click="newClickHandler()"
                       class="button">Создать новый на основе этого
        </ControlButton>
      </div>
      <ControlTextbox placeholder="Название запроса"
                      input-type="text"
                      v-model="calcRequestData.info.name"/>
      <ControlTextbox placeholder="Название ниши"
                      input-type="text"
                      v-model="calcRequestData.request.niche"/>
      <ControlTextbox placeholder="Себестоимость товара"
                      input-type="number"
                      v-model="calcRequestData.request.buy"/>
      <ControlTextbox placeholder="Стоимость упаковки"
                      input-type="number"
                      v-model="calcRequestData.request.pack"/>
      <ControlCheckBox v-model="isTransitCalcInput">Рассчитать транзит</ControlCheckBox>
      <div class="transit-calc-input-wrapper" :class="{active: isTransitCalcInput}">
        <ControlTextbox placeholder="Стоимость транзита маркетплейса"
                        input-type="number"
                        v-model="calcRequestData.request.market_place_transit_price"/>
        <ControlTextbox placeholder="Стоимость транзита"
                        input-type="number"
                        v-model="calcRequestData.request.transit_price"/>
        <ControlTextbox placeholder="Число товаров"
                        input-type="number"
                        v-model="calcRequestData.request.transit_count"/>
      </div>
      <ControlCheckBox v-model="isWarehouseInput">Указать склад</ControlCheckBox>
      <div class="warehouse-input-wrapper" :class="{active: isWarehouseInput}">
        <ControlTextbox placeholder="Наименование склада"
                        input-type="text"
                        v-model="calcRequestData.request.warehouse_name"/>
      </div>
    </div>
    <div class="saved-requests-wrapper">
      <SavedCalcRequestList name="unitEcon"
                            :actions="actions"
                            @edit="requestEditHandler"/>
    </div>
    <div class="calc-result-wrapper">
      <DoughnutBar class="result-chart"
                   :data-and-labels="chartResult"
                   :data="chartData"
                   :title="chartTitle" v-if="chartResult[0][0] >= 0"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import {computed, nextTick, reactive, ref, watch} from "vue";
import type {
  CalcRequestData,
  CalcRequestInfoData,
  UnitEconRequestData,
  UnitEconResultData
} from "@/types/CalcRequestsTypes";
import {WorkspaceSectionUnitEconActions} from "@/component-classes/WorkspaceSectionUnitEconActions";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import {CalcRequestObjectsFactory} from "@/object-factories/CalcRequestObjectsFactory";
import SavedCalcRequestList from "@/components/calc-requests/SavedCalcRequestList.vue";
import {ResultCode} from "@/types/ResultCode";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import DoughnutBar from "@/components/view-workspace/visualizers/DoughnutBar.vue";

const actions = new WorkspaceSectionUnitEconActions();
const isCalculating = ref(false);
const isSaving = ref(false);
const isWarehouseInput = ref(false);
const isTransitCalcInput = ref(false);

const calcRequestData = reactive<CalcRequestData<UnitEconRequestData, UnitEconResultData>>({
  request: CalcRequestObjectsFactory.createUnitEconRequestData(),
  result: CalcRequestObjectsFactory.createUnitEconResultData(),
  info: {
    name: "Запрос"
  }
});

console.log("UNIT ECON TEST");

const chartResult = computed(() => [
  [calcRequestData.result.logistic_price, "Логистики"],
  [calcRequestData.result.margin, "Маржа"],
  [calcRequestData.result.marketplace_commission, "Комиссия маркетплейса"],
  [calcRequestData.result.pack_cost, "Стоиомсть упаковки"],
  [calcRequestData.result.product_cost, "Себестоимость"],
  [calcRequestData.result.storage_price, "Хранение"]
])
const chartTitle = computed(() => `Рекомендуемая цена:
${chartResult.value.reduce((a,v)=> a + (typeof(v[0]) == "number" ? v[0] : Number.parseInt(v[0]??"0")), 0) }`);

function transitCalcInputCheckboxChanged(v: boolean) {
  if (!v) {
    calcRequestData.request.transit_count = undefined;
    calcRequestData.request.transit_price = undefined;
    calcRequestData.request.market_place_transit_price = undefined;
  } else {
    calcRequestData.request.transit_count = NaN;
    calcRequestData.request.transit_price = NaN;
    calcRequestData.request.market_place_transit_price = NaN;
  }
}

function warehouseInputCheckboxChanged(v: boolean) {
  if (!v) {
    calcRequestData.request.warehouse_name = undefined;
  } else {
    calcRequestData.request.warehouse_name = "";
  }
}

watch(isTransitCalcInput, transitCalcInputCheckboxChanged);
watch(isWarehouseInput, warehouseInputCheckboxChanged);

transitCalcInputCheckboxChanged(false);
warehouseInputCheckboxChanged(false);

async function calculateClickHandler() {
  isCalculating.value = true;
  const response = await actions.calculate(calcRequestData.request);
  if (response.code === ResultCode.OK && response.result !== undefined)
    calcRequestData.result = response.result;
  isCalculating.value = false;
}

async function saveClickHandler() {
  isSaving.value = true;
  const response = await actions.saveRequest(calcRequestData);
  if (response.code === ResultCode.OK && response.result)
    calcRequestData.info = response.result.info;
  isSaving.value = false;
}

function newClickHandler() {
  calcRequestData.info.id = undefined;
}

function requestEditHandler(id: CalcRequestInfoData["id"]) {
  const item = actions.getCalcRequest(id);
  if (!item) return;
  isTransitCalcInput.value = item.request.transit_price !== undefined;
  isWarehouseInput.value = item.request.warehouse_name !== undefined;
  nextTick(() => {
    calcRequestData.request = {} as UnitEconRequestData;
    Object.assign(calcRequestData.request, item.request);

    calcRequestData.result = CalcRequestObjectsFactory.createUnitEconResultData();
    calcRequestData.result = item.result;
    Object.assign(calcRequestData.info, item.info);
  })
}

async function getAllClickHandler() {
  isSaving.value = true;
  await actions.loadAll();
  isSaving.value = false;
}

</script>

<style scoped lang="scss">
.unit-econ-wrapper {
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