<script setup lang="ts">
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";
import {WidgetClass} from "@/component-actions/view-workspace/widgets/WidgetClass";

defineProps<{
  options: WidgetClass<"averageCheck">,
  widgetSize: number
}>();
</script>

<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Распределение в нише</div>
  </WidgetBodyContainer>
</template>

<style scoped lang="scss">
</style>
