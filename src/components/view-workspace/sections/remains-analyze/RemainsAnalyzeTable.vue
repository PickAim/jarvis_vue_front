<script setup lang="ts">
import type {AllProductsResultData, DownturnResultData, ResultProductData} from "@/types/DataTypes";
import {computed} from "vue";

interface ProductTypeInfo {
  name: string;
  leftover: number;
  days: number;
}

interface WarehouseInfo {
  name: string;
  productTypes: ProductTypeInfo[];
}

interface RemainsRowType extends ProductTypeInfo {
  productID: number;
  storages: WarehouseInfo[];
}

type ColumnInfoType<K> = { title: string, key: K | undefined, preparator?: <T>(value: T) => T | string };

const props = defineProps<{
  remainsInfo: DownturnResultData,
  products: AllProductsResultData
}>()

function daysName(count: number) {
  const last = count % 10;
  if (last == 0 || last > 4) return "дней";
  else if (last == 1) return "день";
  else return "дня";
}

function findProductInfo(article: string): ResultProductData | undefined {
  let result: ResultProductData | undefined;
  props.products && Object.keys(props.products).some<ResultProductData>((marketID) => {
    const products = props.products[Number(marketID)];
    return products && (result = products[article]);
  })
  return result;
}

const remainsRows = computed<RemainsRowType[]>(() => {
  const resultArray: RemainsRowType[] = [];
  const remainsInfo = props.remainsInfo[2].result_dict;
  Object.keys(remainsInfo).forEach(productID => {
    const warehousesInfo = remainsInfo[Number(productID)].downturn_info;
    const preparedWarehousesInfo: WarehouseInfo[] = [];
    let sumLeftover = 0;
    let sumDays = 0;
    Object.keys(warehousesInfo).forEach(warehouseID => {
      const productTypeInfo = warehousesInfo[Number(warehouseID)];
      const preparedProductTypesInfo: ProductTypeInfo[] = Object.keys(productTypeInfo).map(productType => {
        const downturnInfo = productTypeInfo[productType];
        sumLeftover += downturnInfo.leftover;
        sumDays += downturnInfo.days;
        return ({
          name: productType,
          ...downturnInfo
        })
      })
      preparedWarehousesInfo.push({
        name: warehouseID,
        productTypes: preparedProductTypesInfo
      })
    })
    const productInfo = findProductInfo(productID);
    resultArray.push({
      name: productInfo ? productInfo.name : "",
      leftover: sumLeftover,
      days: sumDays,
      productID: productInfo ? productInfo.global_id : -1,
      storages: preparedWarehousesInfo,
    })
  })
  return resultArray;
})

const remainsColumns: ColumnInfoType<keyof RemainsRowType>[] = [
  {title: "Товар", key: "name"},
  {title: "Артикул", key: "productID"},
  {title: "Остаток", key: "leftover"},
  {title: "Хватит на", key: "days", preparator: (days: number) => `${days} ${daysName(days)}`},
]

const warehouseColumns: ColumnInfoType<keyof ProductTypeInfo>[] = [
  {title: "Тип товара", key: "name"},
  {title: "", key: undefined},
  {title: "Остаток", key: "leftover"},
  {title: "Хватит на", key: "days", preparator: (days: number) => `${days} ${daysName(days)}`},
]

function getColumnValue<T>(row, column: ColumnInfoType<T>) {
  return column.key ? column.preparator ? column.preparator(row[column.key]) : row[column.key] : "";
}

</script>

<template>
  <div class="remains-table">
    <div class="remains-header">
      <div class="remains-cell" v-for="column in remainsColumns" :key="column.key">
        {{ column.title }}
      </div>
    </div>
    <div class="remains-row"
         v-for="(row, ind) in remainsRows" :key="row.productID" :tabindex="ind+5">
      <div class="remains-row-header">
        <div class="remains-cell"
             v-for="column in remainsColumns" :key="column.key">
          {{ getColumnValue(row, column) }}
        </div>
      </div>
      <div class="warehouses-table">
        <div class="warehouses-row"
             v-for="storage in row.storages" :key="storage.name">
          <div class="warehouses-cell warehouse-name">
            Склад {{ storage.name }}
          </div>
          <div class="product-type-row"
               v-for="productType in storage.productTypes" :key="productType.name">
            <div class="warehouses-cell"
                 v-for="column in warehouseColumns" :key="column.key">
              {{ getColumnValue(productType, column) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.remains-table {
  display: flex;
  flex-direction: column;

  .remains-row {
    display: flex;
    flex-direction: column;
  }

  .remains-cell, .warehouses-cell {
    padding-inline: 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .remains-header, .remains-row-header {
    display: grid;
    align-items: center;
    grid-template-columns: minmax(50px, 250px) minmax(50px, 200px) minmax(50px, 100px) minmax(50px, 150px);
    height: 50px;
  }

  .remains-row {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: var.$dark-gradient-color;
    backdrop-filter: blur(15px);
    margin-bottom: 30px;
    cursor: pointer;

    .warehouses-header, .warehouse-name, .product-type-row {
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }

    .warehouses-table {
      display: none;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .product-type-row, .warehouses-header {
        display: grid;
        align-items: center;
        width: 100%;
        justify-content: center;
        grid-template-columns: minmax(50px, 250px) minmax(50px, 200px) minmax(50px, 100px) minmax(50px, 150px);
      }

      .warehouses-header, .product-type-row, .warehouse-name {
        height: 40px;
      }

      .warehouses-row {
        display: flex;
        flex-direction: column;
        width: 100%;

        .warehouse-name {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
      }
    }

    &:focus {
      .warehouses-table {
        display: flex;
      }
    }
  }
}
</style>