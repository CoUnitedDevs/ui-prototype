<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['change'])

const dateRange = ref('30')
const partner = ref('ALL')

watch([dateRange, partner], () => {
  emit('change', {
    dateRange: dateRange.value,
    partner: partner.value,
  })
})
</script>

<template>
  <div class="filters">
    <select v-model="dateRange">
      <option value="30">Last 30 Days</option>
      <option value="90">Last 90 Days</option>
      <option value="YTD">Year to Date</option>
    </select>

    <select v-model="partner">
      <option value="ALL">All Partners</option>
      <option value="ISO_ALPHA">ISO Alpha</option>
      <option value="ISO_BETA">ISO Beta</option>
    </select>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

select {
  background: #0f172a;
  color: white;
  border: 1px solid #1f2937;
  border-radius: 6px;
  padding: 8px 12px;
}
</style>
