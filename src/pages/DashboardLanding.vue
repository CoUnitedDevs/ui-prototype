<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '@/stores/dashboard.store'

import DashboardFilters from '@/components/dashboard/DashboardFilters.vue'
import MetricCard from '@/components/dashboard/MetricCard.vue'
import PartnerSummary from '@/components/dashboard/PartnerSummary.vue'
import PerformanceChart from '@/components/dashboard/PerformanceChart.vue'

/* Store */
const dashboardStore = useDashboardStore()
const { metrics } = storeToRefs(dashboardStore)

/* ✅ Initialize ALL dashboard data */
onMounted(() => {
  dashboardStore.init()
})

/* Handle filter updates */
const onFilterChange = (payload) => {
  dashboardStore.updateFilters(payload)
}
</script>

<template>
  <div class="dashboard-page">
    <!-- FILTERS -->
    <section class="section">
      <DashboardFilters @change="onFilterChange" />
    </section>

    <!-- OVERVIEW -->
    <section class="section">
      <h2 class="section-title">Overview</h2>

      <div class="kpi-grid">
        <MetricCard v-for="m in metrics" :key="m.title" :title="m.title" :value="m.value" />
      </div>
    </section>

    <!-- PERFORMANCE -->
    <section class="section">
      <h2 class="section-title">Performance</h2>

      <div class="performance-grid">
        <PartnerSummary />
        <PerformanceChart />
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-page {
  width: 100%;
  padding: 32px;
}

/* section wrapper */
.section {
  max-width: 1200px;
  margin: 0 auto 40px;
}

/* section heading */
.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* KPI cards */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Performance section */
.performance-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
}

/* Responsive behavior */
@media (max-width: 1024px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .performance-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-page {
    padding: 20px;
  }
}
</style>
