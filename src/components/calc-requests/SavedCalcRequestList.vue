<template>
  <div class="saved-calc-list-wrapper">
    <SavedCalcRequestItem v-for="item in actions.getStore().requests"
                          class="request-item"
                          :key="item.info.id"
                          :item="item"
                          :name="name"
                          :actions="actions"
                          @edit="editHandler(item)"/>
  </div>
</template>

<script setup lang="ts">
import SavedCalcRequestItem from "@/components/calc-requests/saved-calc-results-items/SavedCalcRequestItem.vue";
import {defineProps, defineEmits} from "vue";
import {CalculateRequestData, CalculateRequestInfoData, CalculateRequestName} from "@/types/CalculateRequestsTypes";
import {AbstractWorkspaceSavableCalcActions} from "@/component-classes/AbstractWorkspaceSavableCalcActions";

defineProps<{
  name: CalculateRequestName,
  actions: AbstractWorkspaceSavableCalcActions<any, any>
}>()

const emits = defineEmits<{
  (e: 'edit', id: CalculateRequestInfoData["id"]): void
}>()

function editHandler(item: CalculateRequestData<any, any>){
  emits('edit', item.info.id);
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