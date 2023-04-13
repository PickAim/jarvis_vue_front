<template>
  <div class="saved-calc-item-wrapper">
    <ComponentPreloader :is-loading="isLoading"/>
    <header>
      <div class="name">
        {{props.calcRequestData.info.name}}
      </div>
      <div class="right-button-wrapper">
        <ControlButtonRound class="update-button" @click="updateHandler">U</ControlButtonRound>
        <ControlButtonRound class="edit-button" @click="editHandler">E</ControlButtonRound>
        <ControlButtonRound class="delete-button" @click="deleteHandler">D</ControlButtonRound>
      </div>
    </header>
    <main>
      <component :is="savedRequestItems[name]"
                 :calc-request-data="calcRequestData"
                 @edit="editHandler"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref, toRefs} from "vue";
import {savedRequestItems} from "@/components/calc-requests/saved-calc-results-items/index";
import type {CalcRequestData, CalcRequestName} from "@/types/CalcRequestsTypes";
import {ResultCode} from "@/types/ResultCode";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";

const props = defineProps<{
  name: CalcRequestName,
  calcRequestData: CalcRequestData<any, any>,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

const emit = defineEmits<{
  (e: "edit", id: string): void
}>()

const item = toRefs(props).calcRequestData;
const isLoading = ref(false);

async function editHandler(){
  if (!item.value.info.id) return;
  emit("edit", item.value.info.id);
}

async function updateHandler(){
  console.log(isLoading.value);
  if (!item.value.info.id) return;
  isLoading.value = true;
  console.log(isLoading.value);
  const res = await props.actions.calculate(item.value.request);
  if(res.code === ResultCode.OK) {
    await props.actions.saveRequest({request: item.value.request, result: res.result, info: item.value.info});
  }
  isLoading.value = false;
}

async function deleteHandler(){
  if (!item.value.info.id) return;
  isLoading.value = true;
  await props.actions.deleteRequest(item.value.info.id);
  isLoading.value = false;
}
</script>

<style scoped lang="scss">
.saved-calc-item-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  border: 3px solid black;
  z-index: 1;

  header{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    height: 40px;
    border: 3px solid black;

    .name{
      flex: 1 0 auto;
      font-size: 20px;
      font-weight: bold;
      height: 100%;
    }

    .right-button-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
      width: 110px;
      height: 100%;

      *{
        flex: 0 0 auto;
        margin-inline: 2px;
        width: 30px;
        height: 30px;
      }
    }
  }

  main{
    height: 100px;
    border: 3px solid black;
  }
}
</style>