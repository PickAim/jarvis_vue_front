<script setup lang="ts">
import {computed} from "vue";
import {widgetBodyHeight, widgetBodyWidth} from "@/component-actions/view-workspace/widgetSizeCalculator";

const props = defineProps<{
  widgetSize: number
}>();

const widgetWidth = computed(() => widgetBodyWidth(props.widgetSize) + 'px');
const widgetHeight = computed(() => widgetBodyHeight(props.widgetSize) + 'px');
</script>

<template>
  <div class="widget-body-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.widget-body-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  height: v-bind(widgetHeight);
  width: v-bind(widgetWidth);
  color: white;
}
</style>
