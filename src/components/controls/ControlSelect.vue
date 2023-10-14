<template>
  <div class="select-wrapper" :class="{active: props.options.length > 0 && isSelectFocused}"
       @blur="onFocusOut" :tabindex="0">
    <div class="select-button" @click="onSelectClick">
      <div class="selected-item">
        {{ props.options.find((option) => option.value == props.selectedValue)?.name || props.placeholder }}
      </div>
      <div class="select-icon">
        <svg class="arrow"
             :class="{'is-shaking': isShaking}"
             ref="arrow"
             width="35%"
             height="60%"
             viewBox="0 -1 2 1">
          <path stroke="white" stroke-width="0.1px"
                d="m 0 0 l 1 1 l 1 -1 l -0.1 0 l -0.87 0.87 l 0 -3 l -0.06 0 l 0 3 l -0.97 -0.97 L 0 0"/>
        </svg>
      </div>
    </div>
    <div class="select-list">
      <div class="select-item" v-for="(option, ind) in props.options" :key="ind" @click="onSelect(option.value)">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {SelectOptionType} from "@/types/DataTypes";

const props = withDefaults(defineProps<{
  options: SelectOptionType[],
  selectedValue?: number | string,
  placeholder?: string
}>(), {
  options: () => [],
  placeholder: "Не выбрано"
})
const emits = defineEmits<{
  (e: "update:selectedValue", value): void
}>();

const isSelectFocused = ref(false);
const isShaking = ref(false);
const arrow = ref<HTMLElement>(null as HTMLElement);

onMounted(() => {
  arrow.value.addEventListener('animationend', () => {
    isShaking.value = false;
    console.log("END");
  });
});

function onSelectClick() {
  isSelectFocused.value = !isSelectFocused.value;
  if (props.options.length == 0) {
    isShaking.value = true;
  }
}

function onFocusOut() {
  isSelectFocused.value = false;
}

function onSelect(value) {
  isSelectFocused.value = false;
  emits('update:selectedValue', value);
}

</script>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

$select-height: 55px;
$select-border-radius: 10px;

.select-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;

  .select-button, .select-list {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: var.$dark-gradient-color;
    backdrop-filter: blur(15px);
    cursor: pointer;
  }

  .select-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: $select-height;
    min-width: 200px;
    border-radius: $select-border-radius;
    user-select: none;
    overflow: hidden;
    transition: border-radius 0.1s, border-color 0.1s;
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

      .arrow {
        transition: transform 0.2s;

        &.is-shaking {
          animation-name: shake;
          animation-duration: 0.4s;
          animation-iteration-count: 1;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-play-state: running;
        }
      }
    }
  }

  .selected-item, .select-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-inline: 15px;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }

  .select-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 210px;
    background: rgb(50, 50, 50, 0.1);
    top: $select-height - 1px;
    border-radius: 0 0 $select-border-radius $select-border-radius;
    border-top-color: transparent;
    visibility: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    transition: all 0.1s;
    z-index: 2;

    .select-item {
      flex: 0 0 auto;
      height: $select-height;

      &:not(:nth-child(1)) {
        border-top: 1px solid var.$green-jarvis-color;
      }
    }
  }

  &.active {
    .select-button {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-color: rgb(0, 0, 0, 0);
    }

    .select-list {
      visibility: visible;
      opacity: 1;
    }

    .arrow {
      transform: rotate(180deg);
    }
  }
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }

  12.5% {
    transform: rotate(-20deg);
  }

  25% {
    transform: rotate(0deg);
  }

  37.5% {
    transform: rotate(20deg);
  }

  50% {
    transform: rotate(0deg);
  }

  62.5% {
    transform: rotate(-20deg);
  }

  75% {
    transform: rotate(0deg);
  }

  87.5% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
