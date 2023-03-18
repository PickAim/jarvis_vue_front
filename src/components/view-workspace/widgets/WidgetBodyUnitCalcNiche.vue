<template>
  <div class="widget-body">
    <BarChart class="bar-chart" :font-size="widgetSize*4"/>
  </div>
</template>

<script setup lang="ts">
import BarChart from "@/components/view-workspace/visualizers/BarChart.vue";
</script>

<style scoped lang="scss">
.widget-body{
  height: 100%;
  width: 100%;

  .bar-chart{
    height: 100%;
  }
}
</style>