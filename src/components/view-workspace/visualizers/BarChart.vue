<template>
  <div class="bar-chart-wrapper">
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {defineProps, ref, computed} from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps<{
  fontSize: number
}>()
const fontSize = ref(5);
setInterval(()=>fontSize.value+=10, 500);
const chartData = computed<ChartData>(() => {
  return {
    labels: ['January', 'February', 'March'],
    datasets: [{data: [Math.random()*10, Math.random()*10, Math.random()*10], backgroundColor: '#f87979'}],
  }
})

const chartOptions = computed<ChartOptions>(() => {
  return {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        font: {
          size: props.fontSize
        },
        display: false,
        text: 'Chart.js Bar Chart'
      }
    }
  }
})

</script>

<style scoped lang="scss">

</style>