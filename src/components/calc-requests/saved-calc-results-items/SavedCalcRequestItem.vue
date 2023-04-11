<template>
  <div class="saved-calc-item-wrapper">
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
                 @update="updateHandler"
                 @delete="deleteHandler"
                 @edit="updateHandler"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
import {savedRequestItems} from "@/components/calc-requests/saved-calc-results-items/index";
import type {CalcRequestData, CalcRequestName} from "@/types/CalcRequestsTypes";
import type {ISavableCalcRequestActions} from "@/requests/request-actions/interfaces/ISavableCalc";
import {ResultCode} from "@/types/ResultCode";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";

const props = defineProps<{
  name: CalcRequestName,
  calcRequestData: CalcRequestData<any, any>,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

const emit = defineEmits<{
  (e: "update", id: string): Promise<void>,
  (e: "delete", id: string): Promise<void>,
  (e: "edit", id: string): void
}>()
const isLoading = ref(false);

async function editHandler(item: CalcRequestData<any, any>){
  if (!item.info.id) return;
  emit("edit", item.info.id);
}

async function updateHandler(item: CalcRequestData<any, any>){
  if (!item.info.id) return;
  isLoading.value = true;
  const res = await props.actions.calculate(item.request);
  if(res.code === ResultCode.OK) {
    await props.actions.saveRequest({request: item.request, result: res.result, info: item.info});
  }
  isLoading.value = false;
}

async function deleteHandler(item: CalcRequestData<any, any>){
  if (!item.info.id) return;
  isLoading.value = true;
  await props.actions.deleteRequest(item.info.id);
  isLoading.value = false;
}
</script>

<style scoped lang="scss">
.saved-calc-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 3px solid black;

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