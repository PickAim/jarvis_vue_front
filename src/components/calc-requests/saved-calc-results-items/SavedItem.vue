<template>
  <div class="saved-item-wrapper">
    <ComponentPreloader :is-loading="isLoading"/>
    <header>
      <div class="name">
        {{ request.info.name }}
      </div>
      <div class="right-button-wrapper">
        <ControlButtonRound class="update-button" @click="onUpdate">U</ControlButtonRound>
        <ControlButtonRound class="edit-button" @click="$emit('edit', request.info.id)">E</ControlButtonRound>
        <ControlButtonRound class="delete-button" @click="onDelete">D</ControlButtonRound>
      </div>
    </header>
    <main>
      <component :is="savedRequestItems[name]"
                 :request="request"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import {SavableCalculator} from "@/requests/calculators/SavableCalculator";
import {CalculateRequestData} from "@/types/CalculateRequestsTypes";
import {ref} from "vue";
import {savedRequestItems} from "@/components/calc-requests/saved-calc-results-items/index";

const isLoading = ref(false);

const props = defineProps<{
  name: string,
  request: CalculateRequestData<any, any>,
  calculatorClass: new () => SavableCalculator<any, any>
}>()

defineEmits<{
  (e: "edit", id: string | undefined): void
}>()

async function onDelete() {
  const tempCalculator = new props.calculatorClass();
  isLoading.value = true;
  await tempCalculator.deleteRequest(props.request.info.id);
  isLoading.value = false;
}

async function onUpdate() {
  const tempCalculator = new props.calculatorClass();
  isLoading.value = true;
  tempCalculator.selectCalcRequest(props.request.info.id);
  if(tempCalculator.result === undefined) return;
  await tempCalculator.calculate();
  await tempCalculator.saveRequest();
  isLoading.value = false;
}
</script>

<style scoped lang="scss">
.saved-item-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  border: 3px solid black;
  z-index: 1;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    height: 40px;
    border: 3px solid black;

    .name {
      flex: 1 0 auto;
      font-size: 20px;
      font-weight: bold;
      height: 100%;
    }

    .right-button-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
      width: 110px;
      height: 100%;

      * {
        flex: 0 0 auto;
        margin-inline: 2px;
        width: 30px;
        height: 30px;
      }
    }
  }

  main {
    min-height: 100px;
    border: 3px solid black;
  }
}
</style>