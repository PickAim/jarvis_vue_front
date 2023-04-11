<template>
  <div class="unit-econ-wrapper">
    <div class="calc-input-wrapper">
      <ControlTextbox placeholder="Название ниши"
                      input-type="text"
                      v-model="requestInput.niche"/>
      <ControlTextbox placeholder="Себестоимость товара"
                      input-type="number"
                      v-model="requestInput.buy"/>
      <ControlTextbox placeholder="Стоимость упаковки"
                      input-type="number"
                      v-model="requestInput.pack"/>
      <ControlCheckBox v-model="optionalFlags.isTransitCalcInput">Рассчитать транзит</ControlCheckBox>
      <div class="transit-calc-input-wrapper" :class="{active: optionalFlags.isTransitCalcInput}">
        <ControlTextbox placeholder="Стоимость транзита маркетплейса"
                        input-type="number"
                        v-model="requestInput.market_place_transit_price"/>
        <ControlTextbox placeholder="Стоимость транзита"
                        input-type="number"
                        v-model="requestInput.transit_price"/>
        <ControlTextbox placeholder="Число товаров"
                        input-type="number"
                        v-model="requestInput.transit_count"/>
      </div>
      <ControlCheckBox v-model="optionalFlags.isWarehouseInput">Указать склад</ControlCheckBox>
      <div class="warehouse-input-wrapper" :class="{active: optionalFlags.isWarehouseInput}">
        <ControlTextbox placeholder="Наименование склада"
                        input-type="text"
                        v-model="requestInput.warehouse_name"/>
      </div>
      <ControlButton @click="calculateClickHandler()">Расчёт</ControlButton>
    </div>
    <div class="saved-requests-wrapper">
      <SavedCalcRequestItemContainer :name="'unitEcon'"
                                     :actions="new UnitEconCalcActions(useUnitEconCalcStore(), useAuthStore())"
                                     :calc-request-data="{request:{}, result:{}, info:{name:'REQUEST', id: '123213'}}"/>
    </div>
    <div class="calc-result-wrapper">
      <div class="result-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlTextbox from "@/components/controls/ControlTextbox.vue";
import {reactive, ref, watch} from "vue";
import type {UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import {UnitEconCalcActions} from "@/requests/request-actions/CalcActions";
import {useAuthStore} from "@/stores/authStore";
import {WorkspaceSectionUnitEconActions} from "@/component-actions/WorkspaceSectionUnitEconActions";
import {useUnitEconCalcStore} from "@/stores/CalcStores";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlCheckBox from "@/components/controls/ControlCheckBox.vue";
import SavedCalcRequestItemContainer
  from "@/components/calc-requests/saved-calc-results-items/SavedCalcRequestItem.vue";

const actions = new WorkspaceSectionUnitEconActions();
let res = ref(1);

const requestInput = reactive<{ [ind in keyof UnitEconRequestData]: string }>({
  buy: "",
  niche: "",
  pack: "",
  market_place_transit_price: undefined,
  transit_count: undefined,
  transit_price: undefined,
  warehouse_name: undefined
})

const resultOutput = reactive<{ [ind in keyof UnitEconResultData]: string }>({
  logistic_price: "",
  margin: "",
  marketplace_commission: "",
  pack_cost: "",
  product_cost: "",
  recommended_price: "",
  roi: "",
  storage_price: "",
  transit_margin: "",
  transit_price: ""
})

const optionalFlags = reactive({
  isWarehouseInput: false,
  isTransitCalcInput: false
})

watch(optionalFlags, (o, n) => {
  if(!o.isTransitCalcInput){
    requestInput.transit_count = undefined;
    requestInput.transit_price = undefined;
    requestInput.market_place_transit_price = undefined;
  }
  if(!o.isWarehouseInput){
    requestInput.warehouse_name = undefined;
  }
}, {deep: true});



function calculateClickHandler() {
  const response = actions.calculate(requestInput);
}

function saveClickHandler() {
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
  .transit-calc-input-wrapper, .warehouse-input-wrapper{
    display: none;

    &.active{
      display: unset;
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