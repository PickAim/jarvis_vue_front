<template>
  <div class="saved-calc-list-wrapper">
    <SavedCalcRequestItem v-for="item in actions.getStore().requests"
                          class="request-item"
                          :key="item.info.id"
                          :calc-request-data="item"
                          :name="name"
                          :actions="actions"
                          @edit="editHandler(item)"/>
  </div>
</template>

<script setup lang="ts">
import SavedCalcRequestItem from "@/components/calc-requests/saved-calc-results-items/SavedCalcRequestItem.vue";
import {defineProps} from "vue";
import {CalcRequestData, CalcRequestName} from "@/types/CalcRequestsTypes";
import {AbstractWorkspaceSavableCalcActions} from "@/component-actions/AbstractWorkspaceSavableCalcActions";

defineProps<{
  name: CalcRequestName,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

function editHandler(item: CalcRequestData<any, any>){
  // TODO: put emit here
}
</script>

<style scoped lang="scss">
.saved-calc-list-wrapper{
  display: flex;
  flex-direction: column;

  .request-item{
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>