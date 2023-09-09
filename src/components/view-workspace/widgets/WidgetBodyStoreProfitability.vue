<script setup lang="ts">
import type {Widget} from "@/types/WidgetTypes";
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";

defineProps<{
  options: Widget<"storeProfitability">,
  widgetSize: number
}>();
</script>

<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Окупаемость магазина</div>
  </WidgetBodyContainer>
</template>

<style scoped lang="scss">
</style>
