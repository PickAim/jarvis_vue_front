<template>
  <div class="saved-calc-item-wrapper">
    <ComponentPreloader :is-loading="isLoading"/>
    <header>
      <div class="name">
        {{ props.item.info.name }}
      </div>
      <div class="right-button-wrapper">
        <ControlButtonRound class="update-button" @click="updateHandler">U</ControlButtonRound>
        <ControlButtonRound class="edit-button" @click="editHandler">E</ControlButtonRound>
        <ControlButtonRound class="delete-button" @click="deleteHandler">D</ControlButtonRound>
      </div>
    </header>
    <main>
      <component :is="savedRequestItems[name]"
                 :item="item"
                 @edit="editHandler"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
import {savedRequestItems} from "@/components/calc-requests/saved-calc-results-items/index";
import type {CalcRequestData, CalcRequestName} from "@/types/CalcRequestsTypes";
import {ResultCode} from "@/types/ResultCode";
import ControlButtonRound from "@/components/controls/ControlButtonRound.vue";
import {AbstractWorkspaceSavableCalcActions} from "@/component-classes/AbstractWorkspaceSavableCalcActions";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";

const props = defineProps<{
  name: CalcRequestName,
  item: CalcRequestData<any, any>,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

const emit = defineEmits<{
  (e: "edit", id: string): void
}>()

const isLoading = ref(false);

async function editHandler(){
  if (props.item.info.id === undefined) return;
  emit("edit", props.item.info.id);
}

async function updateHandler(){
  if (props.item.info.id === undefined) return;
  isLoading.value = true;
  const res = await props.actions.calculate(props.item.request);
  if(res.code === ResultCode.OK) {
    await props.actions.saveRequest({request: props.item.request, result: res.result, info: props.item.info});
  }
  isLoading.value = false;
}

async function deleteHandler(){
  if (props.item.info.id === undefined) return;
  isLoading.value = true;
  await props.actions.deleteRequest(props.item.info.id);
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
    min-height: 100px;
    border: 3px solid black;
  }
}
</style>