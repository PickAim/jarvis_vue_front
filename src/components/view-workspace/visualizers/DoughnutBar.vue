<template>
  <div class="doughnut-chart-wrapper">
    <Doughnut id="doughnut-chart-id"
              :options="chartOptions"
              :data="chartData" />
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {Doughnut} from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  ChartData,
  ChartOptions
} from 'chart.js/auto';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const props = defineProps<{
  dataAndLabels: [number, string][],
  title: string
}>()

const data = computed(() => props.dataAndLabels.reduce((acc, dal) => {
  // if(dal[0] <= 0) return acc;
  acc.push(dal[0]);
  return acc;
}, [] as number[]));

const labels = computed(() => props.dataAndLabels.reduce((acc, dal) => {
  // if(dal[0] <= 0) return acc;
  acc.push(dal[1]);
  return acc;
}, [] as string[]));

const chartData = computed<ChartData>(() => ({
  datasets: [{
    data: data.value,
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(100,192,75,0.5)',
      'rgba(38,40,204,0.5)',
      'rgba(205,50,140,0.5)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(100, 192, 75, 1)',
      'rgba(38,40,204,1)',
      'rgba(205,50,140,1)',
    ],
    borderWidth: 1
  }],
  labels: labels.value,
}));

const chartOptions = computed<ChartOptions>(() => ({
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
      display: true,
      text: props.title
    }
  }
}));
</script>

<style scoped lang="scss">

</style>