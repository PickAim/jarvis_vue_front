<script setup lang="ts">
import {computed, reactive} from 'vue';
import {Bar} from 'vue-chartjs'
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

const props = defineProps<{
  data: [number, number][]
}>()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = computed<ChartData<"bar">>(() => ({
  datasets: [{
    data: props.data.map((point) => point[1]),
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(100,192,75,0.5)',
      'rgba(38,40,204,0.5)',
      'rgba(205,50,140,0.5)',
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
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(100, 192, 75, 1)',
      'rgba(38,40,204,1)',
      'rgba(205,50,140,1)',
    ],
    borderWidth: 1,
    // barPercentage: 1,
  }],
  labels: props.data.map((point) => point[0])
}));

const chartOptions = reactive<ChartOptions>({
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 2,
  scales: {
    y: {
      title: {
        text: "Количество",
        color: "white",
        display: true,
        font: {
          size: 14
        }
      },
      ticks: {
        color: "white"
      }
    },
    x: {
      title: {
        text: "Сегмент",
        color: "white",
        display: true,
        font: {
          size: 14
        }
      },
      ticks: {
        color: "white"
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      font: {
        size: 20
      },
      display: true,
      color: 'white',
      text: 'Распределение по ценовым сегментам'
    }
  }
});

</script>

<template>
  <div class="bar-chart-wrapper">
    <Bar
        :options="chartOptions"
        :data="chartData"
    />
  </div>
</template>

<style scoped lang="scss">
.bar-chart-wrapper {
  height: 100%;
  width: 100%;

  * {
    height: 100%;
    width: 100%;
  }
}
</style>
