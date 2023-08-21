<script setup lang="ts">
import {ref} from "vue";

const props = withDefaults(defineProps<{
  options: { name: string, value: string }[],
  selectedValue?: number | string,
  placeholder?: string
}>(), {
  options: () => [],
  placeholder: "Не выбрано"
})
const emits = defineEmits<{
  (e: "update:selectedValue", value): void
}>();

const isSelectListOpen = ref(false);

function onSelect(value) {
  isSelectListOpen.value = false;
  emits('update:selectedValue', value);
}

</script>

<template>
  <div class="select-wrapper" :class="{active: props.options.length > 0 && isSelectListOpen}">
    <button class="select-button" @click="isSelectListOpen = !isSelectListOpen">
      <div class="selected-item">
        {{ props.options.find((option) => option.value == props.selectedValue)?.name || props.placeholder }}
      </div>
      <div class="select-icon">
        <svg class="arrow"
             width="60%"
             height="60%"
             viewBox="0 0 2 1">
          <path stroke="white" stroke-width="0.13px" d="m 0 0 l 1 1 l 1 -1 l -0.2 0 l -0.8 0.8 l -0.8 -0.8 l -0.2 0"/>
        </svg>
      </div>
    </button>
    <div class="select-list">
      <button class="select-item" v-for="(option, ind) in props.options" :key="ind" @click="onSelect(option.value)">
        {{ option.name }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$select-height: 40px;

.select-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;

  .select-button, .select-list {
    color: white;
    border: 1px solid #BBB;
    border-radius: 5px;
    background: #111;
  }

  .select-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: $select-height;
    min-width: 200px;
    user-select: none;
    overflow: hidden;
    z-index: 1;

    .selected-item {
      flex: 1 0;
    }

    .select-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      height: 100%;
      width: $select-height;
      background: #333;

      .arrow {
        transition: transform 0.2s;
      }
    }
  }

  .selected-item, .select-item {
    width: 100%;
    padding-inline: 10px;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    top: $select-height + 5;
    visibility: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    transition: all 0.1s;
    z-index: 2;

    .select-item {
      flex: 0 0 auto;
      height: $select-height;
      border-bottom: 2px solid white;
    }
  }

  &.active {
    .select-list {
      visibility: visible;
      opacity: 1;
    }

    .arrow {
      transform: rotate(180deg);
    }
  }
}
</style>