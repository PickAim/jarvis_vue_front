<script setup lang="ts">
import ProductsList from "@/components/view-workspace/ProductsList.vue";
import {
  AllProductsResultData
} from "@/types/DataTypes";
import {computed, ref} from "vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import FormComponent from "@/components/generals/FormComponent.vue";

const props = defineProps<{
  products?: AllProductsResultData
}>();

const emit = defineEmits<{
  (e: "calculate-product", ID): void,
  (e: "calculate-text", text): void
}>()

enum InputType {NONE, PRODUCT, TEXT}

const requestText = ref("");
const requestProductID = ref(0);
const lastChanged = ref<InputType>(InputType.NONE);

const hasProducts = computed(() => {
  const products = props.products;
  return products &&
      Object.keys(products).some((key) => products && Object.keys(products[key]).length > 0)
})

function onProductSelect(ID: number) {
  requestProductID.value = ID;
  lastChanged.value = InputType.PRODUCT;
}

function onTextInput() {
  lastChanged.value = InputType.TEXT;
}

function onCalculate() {
  switch (lastChanged.value) {
    case InputType.TEXT:
      emit("calculate-text", requestText.value);
      break;
    case InputType.PRODUCT:
      emit("calculate-product", requestProductID.value);
      break;
  }
}
</script>

<template>
  <FormComponent class="nearest-keywords-set" @submit="onCalculate">
    <div class="input-type request-product-wrapper"
         :class="{last: lastChanged == InputType.PRODUCT}"
         v-if="hasProducts">
      <span class="select-product-label">Выберите один из своих продуктов для рассчёта:</span>
      <ProductsList v-if="props.products"
                    class="select-product"
                    :products="props.products"
                    @select-product="onProductSelect"/>
    </div>
    <div class="input-type request-text-wrapper" :class="{last: lastChanged == InputType.TEXT}">
      <span class="text-request-label">
          <span v-if="hasProducts">или введите </span>
          <span v-else>Введите </span>
           текст для рассчёта:
        </span>
      <ControlTextInput @update:model-value="onTextInput" class="request-text-input" title="Текст для запроса"
                        v-model="requestText"/>
    </div>
    <div>
      <ControlButton class="calculate-button" @click="onCalculate">Расчитать</ControlButton>
    </div>
  </FormComponent>
</template>

<style scoped lang="scss">
.nearest-keywords-set {
  display: flex;
  flex-direction: column;

  .select-product-label {
    margin-bottom: 15px;
  }

  .calculate-button {
    margin-top: 15px;
    width: 300px;
  }

  .input-type {
    border-left-width: 2px;
    border-color: transparent;
    padding-left: 10px;
    transition: 0.3s border-color;

    &.last {
      border-color: rgb(255, 255, 255);
    }
  }

  .request-product-wrapper {
    margin-bottom: 30px;
  }

  .request-text-wrapper {
    display: flex;
    flex-direction: column;

    .text-request-label {
      margin-bottom: 10px;
    }
  }
}
</style>
