<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Потерянная выручка</div>
  </WidgetBodyContainer>
</template>

<script setup lang="ts">
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";
import {WidgetClass} from "@/component-classes/widgets/WidgetClass";

defineProps<{
  options: WidgetClass<"averageCheck">,
  widgetSize: number
}>();
</script>

<style scoped lang="scss">
</style>