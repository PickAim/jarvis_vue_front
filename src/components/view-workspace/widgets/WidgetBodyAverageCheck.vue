<script setup lang="ts">
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";
import {AverageCheckWidgetClass} from "@/component-actions/view-workspace/widgets/AverageCheckWidgetClass";

defineProps<{
  options: AverageCheckWidgetClass,
  widgetSize: number
}>();
</script>

<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Средний чек{{ options.inputText }}</div>
  </WidgetBodyContainer>
</template>

<style scoped lang="scss">
</style>
