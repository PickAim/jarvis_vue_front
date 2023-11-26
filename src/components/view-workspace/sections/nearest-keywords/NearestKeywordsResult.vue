<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  text?: string,
  keywords: string[]
}>();

const preparedKeywords = computed<[string, string, string][]>(() => {
  return props.keywords.map((keyword: string) => {
    if (props.text == undefined) return [keyword, "", ""];
    const ind = keyword.toLowerCase().indexOf(props.text.toLowerCase());
    return [
      keyword.substring(0, ind),
      keyword.substring(ind, ind + props.text.length),
      keyword.substring(ind + props.text.length)
    ];
  })
});
</script>

<template>
  <div class="nearest-keywords-result">
    <div class="nearest-keyword-item" v-for="keyword in preparedKeywords" :key="keyword">
      <div class="nearest-keyword-text">
        {{ keyword[0] }}<b>{{ keyword[1] }}</b>{{ keyword[2] }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.nearest-keywords-result {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;

  .nearest-keyword-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: pre;
    background: var.$dark-gradient-color;
    border: 1px solid var.$gray-color;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px 30px;
    width: fit-content;

    .nearest-keyword-text {
      transition: 0.2s transform;
    }

    &:hover .nearest-keyword-text {
      transform: scale(1.05);
    }
  }
}
</style>
