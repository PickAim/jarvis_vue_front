<template>
  <div class="bar-chart-wrapper">
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="data"
    />
  </div>
</template>

<script setup lang="ts">
import {defineProps, reactive} from 'vue';
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData,
  ChartOptions
} from 'chart.js'

defineProps<{
  data: ChartData,
  type: string
}>()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartOptions = reactive<ChartOptions>({
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      font: {
        size: 14
      },
      display: false,
      text: 'Chart.js Bar Chart'
    }
  }
});

</script>

<style scoped lang="scss">

</style>