<template>
  <div class="unit-econ-wrapper">
    <div class="calc-input-wrapper">
      <ControlTextbox placeholder="Название ниши"
                      input-type="text"
                      v-model="calcRequestData.request.niche"/>
      <ControlTextbox placeholder="Себестоимость товара"
                      input-type="number"
                      v-model="calcRequestData.request.buy"/>
      <ControlTextbox placeholder="Стоимость упаковки"
                      input-type="number"
                      v-model="calcRequestData.request.pack"/>
      <ControlCheckBox v-model="optionalFlags.isTransitCalcInput">Рассчитать транзит</ControlCheckBox>
      <div class="transit-calc-input-wrapper" :class="{active: optionalFlags.isTransitCalcInput}">
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
      <ControlCheckBox v-model="optionalFlags.isWarehouseInput">Указать склад</ControlCheckBox>
      <div class="warehouse-input-wrapper" :class="{active: optionalFlags.isWarehouseInput}">
        <ControlTextbox placeholder="Наименование склада"
                        input-type="text"
                        v-model="calcRequestData.request.warehouse_name"/>
      </div>
      <div class="calc-control-button-wrapper">
        <ControlButton @click="calculateClickHandler()" class="button">Расчёт</ControlButton>
        <ControlButton @click="saveClickHandler()" class="button">Сохранить</ControlButton>
        <ControlButton @click="newClickHandler()" class="button">Создать новый на основе этого</ControlButton>
      </div>
    </div>
    <div class="saved-requests-wrapper">
      <SavedCalcRequestList name="unitEcon"
                            :actions="actions"/>
    </div>
    <div class="calc-result-wrapper">
      <div class="result-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import {reactive, ref, watch} from "vue";
import type {CalcRequestData, UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import {WorkspaceSectionUnitEconActions} from "@/component-actions/WorkspaceSectionUnitEconActions";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import {CalcRequestObjectsFactory} from "@/object-factories/CalcRequestObjectsFactory";
import SavedCalcRequestList from "@/components/calc-requests/SavedCalcRequestList.vue";

const actions = new WorkspaceSectionUnitEconActions();
let isCalculating = ref(false);
let isCalculated = ref(false);

const calcRequestData = reactive<CalcRequestData<UnitEconRequestData, UnitEconResultData>>({
  request: CalcRequestObjectsFactory.createUnitEconRequestData(),
  result: CalcRequestObjectsFactory.createUnitEconResultData(),
  info: {
    name: "Запрос"
  }
});

const optionalFlags = reactive({
  isWarehouseInput: false,
  isTransitCalcInput: false
})

watch(optionalFlags, (v) => {
  if(!v.isTransitCalcInput){
    calcRequestData.request.transit_count = undefined;
    calcRequestData.request.transit_price = undefined;
    calcRequestData.request.market_place_transit_price = undefined;
  }
  if(!v.isWarehouseInput){
    calcRequestData.request.warehouse_name = undefined;
  }
}, {deep: true});

function calculateClickHandler() {
  const response = actions.calculateString(calcRequestData.request);
}

function saveClickHandler() {
  // TODO
  actions.saveRequest({
    request: {
      buy: 0,
      market_place_transit_price: 0,
      niche: "qweqwe",
      pack:0,
      transit_count: 0,
      transit_price: 0,
      warehouse_name: ""
    },
    result: {
      logistic_price: 0,
      margin: 0,
      marketplace_commission: 0,
      pack_cost: 0,
      product_cost: 0,
      recommended_price: 0,
      roi: 0,
      storage_price: 0,
      transit_margin: 0,
      transit_price: 0
    },
    info: {
      name: "NEW REQUEST"
    }
  })
}

function newClickHandler() {
  // TODO
}

function getAllClickHandler() {
  // TODO
}

</script>

<style scoped lang="scss">
.unit-econ-wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.checkbox-wrapper{
  margin-top: 10px;
}

.calc-input-wrapper, .saved-requests-wrapper, .calc-result-wrapper{
  flex: 1 0;
  margin-inline: 3px;
}

.calc-input-wrapper{
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .transit-calc-input-wrapper, .warehouse-input-wrapper{
    display: none;

    &.active{
      display: unset;
    }
  }

  .calc-control-button-wrapper{
    margin-top: 20px;

    .button{
      margin-top: 5px;
      width: 100%;
    }
  }
}

.saved-requests-wrapper{
  .request-item{
    border: 3px solid black;
  }
}

.calc-result-wrapper{
  .result-item{
    border: 3px solid black;
  }
}
</style>