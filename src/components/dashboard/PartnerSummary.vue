<script setup>
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '@/stores/dashboard.store'
import BaseCard from '@/components/common/BaseCard.vue'

const dashboardStore = useDashboardStore()
const { partnerSummary } = storeToRefs(dashboardStore)
</script>

<template>
  <BaseCard>
    <div class="header">
      <h3>Partner Summary</h3>
      <p class="subtitle">Current onboarding & integration status</p>
    </div>

    <ul class="summary-list">
      <li>
        <span>Total Partners</span>
        <strong>{{ partnerSummary.totalPartners }}</strong>
      </li>
      <li>
        <span>Active Integrations</span>
        <strong>{{ partnerSummary.activeIntegrations }}</strong>
      </li>
      <li>
        <span>Pending Onboarding</span>
        <strong>{{ partnerSummary.pendingOnboarding }}</strong>
      </li>
    </ul>
  </BaseCard>
</template>

<style scoped>
.header {
  margin-bottom: 18px;
}

.header h3 {
  font-size: 15px;
  font-weight: 600;
  color: #e5e7eb;
}

.subtitle {
  margin-top: 4px;
  font-size: 12px;
  color: #94a3b8;
}

/* List */
.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.summary-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;
  font-size: 13px;

  color: #cbd5f5;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.summary-list li:last-child {
  border-bottom: none;
}

/* Values */
.summary-list strong {
  font-size: 14px;
  font-weight: 600;
  color: #e5e7eb;
}
</style>
