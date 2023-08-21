<template>
  <ViewWorkspaceSection>
    <template v-slot:header>{{ sections.unitEconomy.title }}</template>
    <div class="section-body-wrapper">
      <div class="steps-wrapper">
        <UnitEconomyStepSet :products="products"
                            @select-product="onProductSelect"
                            @select-request="onRequestSelect"/>
        <UnitEconomyStepParameters :shown="settingSelected"
                                   :parameters="calculator.request"
                                   @parameter-changed="onParameterChanged"
                                   @calculate="onCalculate"
                                   v-model:is-calculate-transit="calculator.isTransitOn"
                                   v-model:is-calculate-warehouse="calculator.isWarehouseOn"/>
        <UnitEconomyStepResult :shown="calculated && !!calculator.result"
                               :result-data="calculator.result"/>
      </div>
    </div>
  </ViewWorkspaceSection>
</template>

<script setup lang="ts">
import ViewWorkspaceSection from "@/components/view-workspace/sections/ViewWorkspaceSection.vue";
import {sections} from "@/components/view-workspace/workspaceSections";
import {
  WorkspaceSectionUnitEconomyActions
} from "@/component-actions/view-workspace/WorkspaceSectionUnitEconomyActions";
import type {AllProductsResultData, ProductData} from "@/types/DataTypes";
import UnitEconomyStepSet from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepSet.vue";
import UnitEconomyStepParameters from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepParameters.vue";
import UnitEconomyStepResult from "@/components/view-workspace/sections/unit-economy/UnitEconomyStepResult.vue";
import {reactive, ref} from "vue";
import {UnitEconomyCalculator} from "@/requests/calculators/UnitEconomyCalculator";
import {niches} from "@/nichesData";

const actions = new WorkspaceSectionUnitEconomyActions();
const calculator = reactive(new UnitEconomyCalculator());
actions.initSection();

const settingSelected = ref(false);
const calculated = ref(false);

const requestedProducts: AllProductsResultData =
    {
      "2": {
        "488003": {
          "global_id": 39142284,
          "name": "Домашний костюм женский с брюками пижама",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 166500,
          "rating": 5,
          "seller": "seller",
          "brand": "Амели."
        },
        "488009": {
          "global_id": 73229206,
          "name": "Костюм домашний хлопковая пижама",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 52700,
          "rating": 4,
          "seller": "seller",
          "brand": "Buona Sceltta"
        },
        "488013": {
          "global_id": 66151327,
          "name": "Пижама со штанами домашняя одежда на девочку костюм комплект",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 121600,
          "rating": 4,
          "seller": "seller",
          "brand": "Makey Kelly"
        },
        "488021": {
          "global_id": 45867955,
          "name": "Пижама шелковая домашняя атласная комплект топ со штанами",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 251600,
          "rating": 5,
          "seller": "seller",
          "brand": "Sewing Lady"
        },
        "488023": {
          "global_id": 140010424,
          "name": "Пижама с шортами",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 52000,
          "rating": 5,
          "seller": "seller",
          "brand": "ACOOLA"
        },
        "488028": {
          "global_id": 47522757,
          "name": "Пижама для девочки детская с шортами",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 84000,
          "rating": 5,
          "seller": "seller",
          "brand": "Милаша"
        },
        "488039": {
          "global_id": 164275200,
          "name": "Пижама с шортами",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 192000,
          "rating": 5,
          "seller": "seller",
          "brand": "LUISA"
        },
        "488057": {
          "global_id": 143565862,
          "name": "Пижама со штанами и рубашкой в клетку для девочки и мальчика",
          "category": "Одежда",
          "niche": "Пижамы",
          "cost": 268300,
          "rating": 5,
          "seller": "seller",
          "brand": "Kristi Natto"
        }
      }
    };

const products: ProductData[] = [];
Object.keys(requestedProducts).forEach((marketplaceID) => {
  Object.keys(requestedProducts[marketplaceID]).forEach((productID) => {
    products.push({...requestedProducts[marketplaceID][productID], productID, marketplaceID});
  })
})

function onParameterChanged(key, value) {
  calculator.request[key] = value;
}

function onProductSelect(ID) {
  const product = products.find((product) => product.productID === ID);
  if (!product) return;
  calculator.request.niche = product.niche[0].toUpperCase() + product.niche.substring(1).toLowerCase();
  calculator.request.marketplace_id = Number(product.marketplaceID);
  calculator.request.category_id = Object.keys(niches).indexOf(product.category) + 2;
  onSet();
}

function onRequestSelect(ID) {
  onSet();
}

function onSet() {
  calculated.value = false;
  if (!settingSelected.value) {
    setTimeout(() => {
      document.querySelector('#unit-economy-parameters').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  }
  settingSelected.value = true;
}

function onCalculate() {
  calculator.calculate().then(() => {
    if (!calculator.result) return;
    calculated.value = true;
    setTimeout(() => {
      document.querySelector('#unit-economy-result').scrollIntoView({
        behavior: "smooth"
      })
    }, 0);
  });
}
</script>

<style scoped lang="scss">
.section-body-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-inline: 30px;

  .steps-wrapper {
    width: 100%;
    padding-bottom: 50px;
    max-width: 1280px;
  }
}
</style>