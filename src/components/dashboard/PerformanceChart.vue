<script setup>
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '@/stores/dashboard.store'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js'
import BaseCard from '@/components/common/BaseCard.vue'

/* Register Chart.js modules */
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const chartRef = ref(null)
let chartInstance = null

/* Store */
const dashboardStore = useDashboardStore()
const { performanceData } = storeToRefs(dashboardStore)

/* Create chart */
const createChart = () => {
  if (!chartRef.value) return

  const ctx = chartRef.value.getContext('2d')

  const gradient = ctx.createLinearGradient(0, 0, 0, 260)
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)')
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)')

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: performanceData.value.labels,
      datasets: [
        {
          data: performanceData.value.values,
          borderColor: '#3b82f6',
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: '#020617',
          pointBorderColor: '#3b82f6',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(2, 6, 23, 0.95)',
          borderColor: 'rgba(59, 130, 246, 0.4)',
          borderWidth: 1,
          titleColor: '#e5e7eb',
          bodyColor: '#e5e7eb',
          padding: 10,
          callbacks: {
            label: (ctx) => `$${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        y: {
          ticks: {
            color: '#94a3b8',
            callback: (v) => `$${v / 1000}k`,
          },
          grid: {
            color: 'rgba(148, 163, 184, 0.12)',
            drawBorder: false,
          },
        },
        x: {
          ticks: { color: '#64748b' },
          grid: { display: false },
        },
      },
    },
  })
}

/* Update chart when store data changes */
const updateChart = () => {
  if (!chartInstance) return

  chartInstance.data.labels = performanceData.value.labels
  chartInstance.data.datasets[0].data = performanceData.value.values
  chartInstance.update()
}

/* Lifecycle */
onMounted(() => {
  // Ensure data exists before rendering
  if (!performanceData.value.labels.length) return
  createChart()
})

watch(performanceData, () => {
  if (!chartInstance) {
    createChart()
  } else {
    updateChart()
  }
})
</script>

<template>
  <BaseCard>
    <div class="chart-header">
      <h3>Monthly Transaction Volume</h3>
      <p class="subtitle">Based on selected filters</p>
    </div>

    <div class="chart-container">
      <canvas ref="chartRef"></canvas>
    </div>
  </BaseCard>
</template>

<style scoped>
.chart-header {
  margin-bottom: 16px;
}

.chart-header h3 {
  font-size: 15px;
  font-weight: 600;
  color: #e5e7eb;
}

.subtitle {
  margin-top: 4px;
  font-size: 12px;
  color: #94a3b8;
}

.chart-container {
  position: relative;
  height: 280px;
}
</style>
