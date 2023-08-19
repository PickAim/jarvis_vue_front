<template>
  <WidgetBodyContainer :widget-size="widgetSize">
    <div class="title">Заказы и откаты</div>
  </WidgetBodyContainer>
</template>

<script setup lang="ts">
import type {Widget} from "@/types/WidgetTypes";
import WidgetBodyContainer from "@/components/view-workspace/widgets/WidgetBodyContainer.vue";

defineProps<{
  options: Widget<"ordersAndRedemptions">,
  widgetSize: number
}>();
</script>

<style scoped lang="scss">
</style>