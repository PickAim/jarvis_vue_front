<template>
  <div class="wrapper">
    <div class="input-wrapper">
      <ControlTextbox placeholder="Название ниши"
                      input-type="text"
                      v-model="requestInput.niche"/>
      <ControlTextbox placeholder="Себестоимость товара"
                      input-type="number"
                      v-model="requestInput.buy"/>
      <ControlTextbox placeholder="Стоимость упаковки"
                      input-type="number"
                      v-model="requestInput.pack"/>
      <ControlButton @click="calculateClickHandler()">Расчёт</ControlButton>
      {{res}}
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
import {storeToRefs} from "pinia";
import ControlButton from "@/components/controls/ControlButton.vue";

// const actions = new WorkspaceSectionUnitEconActions();
const store = useUnitEconCalcStore();
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
.input-wrapper{
  width: 400px;
}
</style>