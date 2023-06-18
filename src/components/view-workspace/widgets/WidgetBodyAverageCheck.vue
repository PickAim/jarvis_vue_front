<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Средний чек{{options.inputText}}</div>
  </WidgetBodyContainer>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";
import {AverageCheckWidgetClass} from "@/component-classes/widgets/AverageCheckWidgetClass";

defineProps<{
  options: AverageCheckWidgetClass,
  widgetSize: number
}>();
</script>

<style scoped lang="scss">
</style>