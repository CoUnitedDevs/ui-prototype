<script setup>
import { ref, computed } from "vue";
import BaseCard from "@/components/common/BaseCard.vue";

const strategy = ref("Balanced");

const margin = computed(() => {
  if (strategy.value === "Aggressive") return "12%";
  if (strategy.value === "Conservative") return "28%";
  return "20%";
});
</script>

<template>
  <BaseCard class="pricing-card">
    <h2 class="title">Pricing Simulator</h2>
    <p class="subtitle">
      Adjust pricing strategy to estimate expected margin
    </p>

    <div class="form-group">
      <label>Pricing Strategy</label>
      <select v-model="strategy">
        <option>Aggressive</option>
        <option>Balanced</option>
        <option>Conservative</option>
      </select>
    </div>

    <div class="divider"></div>

    <div class="result">
      <span>Estimated Margin</span>
      <strong>{{ margin }}</strong>
    </div>
  </BaseCard>
</template>

<style scoped>
/* Headings */
.title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 20px;
}

/* Form */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 0.8rem;
  color: #cbd5e1;
}

select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  border: 1px solid rgba(148, 163, 184, 0.25);
  outline: none;
}

select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.35);
}

/* Divider */
.divider {
  margin: 18px 0;
  height: 1px;
  background: rgba(148, 163, 184, 0.2);
}

/* Result */
.result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #cbd5e1;
}

.result strong {
  font-size: 1.2rem;
  font-weight: 600;
  color: #22c55e;
}
</style>
