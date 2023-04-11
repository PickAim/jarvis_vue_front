<template>
  <div class="widget-body">
    <div class="title">{{options.settings.saveResultID}}</div>
    <BarChart class="bar-chart" :font-size="widgetSize*4"/>
  </div>
</template>

<script setup lang="ts">
import BarChart from "@/components/view-workspace/visualizers/BarChart.vue";
import {defineProps} from "vue";
import {Widget} from "@/types/Objects";

defineProps<{
  options: Widget<"nicheDist">,
  widgetSize: number
}>();
</script>

<style scoped lang="scss">
.widget-body{
  display: flex;
  flex-direction: column;
  flex: 1 0;
  width: 100%;
  overflow: hidden;

  .title{
    color: white;
    height: 20px;
    flex: 0 0 auto;
  }

  .bar-chart{
    flex: 1 0;
    overflow: hidden;
  }
}
</style>