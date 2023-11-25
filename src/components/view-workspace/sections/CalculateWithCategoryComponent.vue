<script setup lang="ts">
import ControlButton from "@/components/controls/ControlButton.vue";
import NicheSelect from "@/components/view-workspace/NicheSelect.vue";
import type {NicheRequestData} from "@/types/DataTypes";
import {reactive} from "vue";

const props = withDefaults(defineProps<{ requestLevel: number }>(), {requestLevel: 0});
const emits = defineEmits<{
  (e: "calculate", NicheRequestData): void
}>()

const requestData = reactive<Partial<NicheRequestData>>({
  marketplace_id: 2
});

function onUpdateGenerator<K extends keyof NicheRequestData>(key: K) {
  return (value: NicheRequestData[K]) => {
    requestData[key] = value;
  }
}

const onMarketplaceUpdate = onUpdateGenerator('marketplace_id');
const onNicheUpdate = onUpdateGenerator('niche_id');
</script>

<template>
  <div class="category-calculate-wrapper">
    <div class="category-input-label">Выберите категорию и подкатегорию для расчёта:</div>
    <NicheSelect :request-level="props.requestLevel"
                 @update:marketplaceID="onMarketplaceUpdate"
                 @update:nicheID="onNicheUpdate"/>
    <ControlButton class="calculate-button" @click="emits('calculate', requestData)">
      Рассчитать
    </ControlButton>
  </div>
</template>

<style scoped lang="scss">
.category-calculate-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .category-input-label {
    margin-bottom: 15px;
  }

  .calculate-button {
    margin-top: 10px;
  }
}
</style>