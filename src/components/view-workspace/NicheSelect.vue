<script setup lang="ts">
import ControlSelect from "@/components/controls/ControlSelect.vue";
import {ref} from "vue";
import {AllCategoriesActions, AllNichesActions} from "@/requests/request-actions/info/InfoRequestActions";
import type {SelectOptionType} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import {useRequestStore} from "@/stores/requestStore";

const props = withDefaults(defineProps<{ requestLevel: number }>(), {requestLevel: 0});
const emits = defineEmits<{
  (e: "update:marketplaceID", marketplaceID): void,
  (e: "update:categoryID", categoryID): void,
  (e: "update:nicheID", nicheID): void,
}>()
const requestState = useRequestStore();

const selectMarketplaceID = ref(0);
const selectCategoryID = ref(-1);
const selectNicheID = ref(-1);

const marketplaceOptions = [{name: "Wildberries", value: 2}];
const categoryOptions = ref<SelectOptionType[]>([]);
const nicheOptions = ref<SelectOptionType[]>([]);

onMarketplaceSelect(2);

async function onMarketplaceSelect(selectID: number) {
  emits("update:marketplaceID", selectID);
  if (selectMarketplaceID.value === selectID) return;
  selectMarketplaceID.value = selectID;
  requestState.setLevel(props.requestLevel);
  const res = await (new AllCategoriesActions).getInfo({
    marketplace_id: selectID
  });
  if (res.code === ResultCode.OK) {
    categoryOptions.value = Object.keys(res.result).map((value) => ({
      name: res.result && res.result[value], value: Number(value)
    }))
  }
}

async function onCategorySelect(selectID: number) {
  emits("update:categoryID", selectID);
  if (selectCategoryID.value === selectID) return;
  selectCategoryID.value = selectID;
  requestState.setLevel(props.requestLevel);
  const res = await (new AllNichesActions()).getInfo({
    category_id: selectID
  });
  if (res.code === ResultCode.OK) {
    nicheOptions.value = Object.keys(res.result).map((value) => ({
      name: res.result && res.result[value], value: Number(value)
    }))
  }
}

async function onNicheSelect(selectID: number) {
  emits("update:nicheID", selectID);
  if (selectNicheID.value === selectID) return;
  selectNicheID.value = selectID;
}

async function setByNames(marketplaceID: number, categoryName: string, nicheName: string) {
  await onMarketplaceSelect(marketplaceID);
  const foundCategoryID =
      categoryOptions.value.find(value => (value.name.toLowerCase() === categoryName.toLowerCase()))?.value;
  if (foundCategoryID == undefined) return;
  await onCategorySelect(foundCategoryID);
  const foundNicheID =
      nicheOptions.value.find(value => (value.name.toLowerCase() === nicheName.toLowerCase()))?.value;
  if (foundNicheID == undefined) return;
  await onNicheSelect(foundNicheID);
}

async function setByIDs(nicheID = 0,
                        categoryID = selectCategoryID.value,
                        marketplaceID = selectMarketplaceID.value) {
  await onMarketplaceSelect(marketplaceID);
  if (categoryID > 0) {
    await onCategorySelect(categoryID);
    await onNicheSelect(nicheID);
  }
}

defineExpose({setByNames, setByIDs});

</script>

<template>
  <div class="niche-select-wrapper">
    <ControlSelect :options="marketplaceOptions" placeholder="Маркетплейс"
                   :selected-value="selectMarketplaceID"
                   @update:selected-value="onMarketplaceSelect"/>
    <ControlSelect :options="categoryOptions" placeholder="Категория"
                   :selected-value="selectCategoryID"
                   @update:selected-value="onCategorySelect"/>
    <ControlSelect :options="nicheOptions" placeholder="Подкатегория"
                   :selected-value="selectNicheID"
                   @update:selected-value="onNicheSelect"/>
  </div>
</template>

<style scoped lang="scss">
.niche-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
}
</style>