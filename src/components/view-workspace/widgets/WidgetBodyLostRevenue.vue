<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Потерянная выручка</div>
  </WidgetBodyContainer>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import type {Widget} from "@/types/WidgetTypes";
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";

defineProps<{
  options: Widget<"lostRevenue">,
  widgetSize: number
}>();
</script>

<style scoped lang="scss">
</style>