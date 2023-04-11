<template>
  <div class="unit-econ-wrapper">
    <SavedCalcRequestItem v-for="item in actions.getStore().requests"
                          :key="item.info.id"
                          :calc-request-data="item"
                          :name="name"
                          :actions="actions"
                          @edit="updateHandler(item)"/>
  </div>
</template>

<script setup lang="ts">
import SavedCalcRequestItem from "@/components/calc-requests/saved-calc-results-items/SavedCalcRequestItem.vue";
import {defineProps} from "vue";
import {CalcRequestData, CalcRequestName} from "@/types/CalcRequestsTypes";
import {ISavableCalcRequestActions} from "@/requests/request-actions/interfaces/ISavableCalc";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";

defineProps<{
  name: CalcRequestName,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

function updateHandler(item: CalcRequestData<any, any>){
  // TODO: put emit here
}
</script>

<style scoped lang="scss">

</style>