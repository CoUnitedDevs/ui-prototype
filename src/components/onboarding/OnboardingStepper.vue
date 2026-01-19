<script setup>
defineProps({
  currentStep: Number,
  status: String,
  type: String,
})

const steps = ['Partner Details', 'Business Info', 'Compliance', 'Integration', 'Review & Submit']
</script>

<template>
  <div class="stepper">
    <!-- Header -->
    <div class="header">
      <h4>Onboarding Progress</h4>
      <span class="status" :class="status?.toLowerCase()">
        {{ status }}
      </span>
    </div>

    <!-- Steps -->
    <ul class="steps">
      <li
        v-for="(step, index) in steps"
        :key="step"
        :class="{
          active: index + 1 === currentStep,
          done: index + 1 < currentStep,
        }"
      >
        <span class="index">
          <span v-if="index + 1 < currentStep">✓</span>
          <span v-else>{{ index + 1 }}</span>
        </span>

        <span class="label">{{ step }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Container */
.stepper {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.85));
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 16px;
  padding: 20px 18px;
  position: sticky;
  top: 96px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.stepper li {
  padding: 6px 8px;
  font-size: 12px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.header h4 {
  font-size: 14px;
  font-weight: 600;
  color: #e5e7eb;
}

/* Status badge */
.status {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  color: #94a3b8;
  background: rgba(148, 163, 184, 0.1);
}

.status.submitted {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.35);
}

/* Steps list */
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Step item */
.steps li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 10px;
  font-size: 13px;
  color: #94a3b8;
  transition: all 0.2s ease;
}

/* Step index circle */
.index {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;

  border: 1px solid rgba(148, 163, 184, 0.3);
  color: #94a3b8;
}

/* Step label */
.label {
  flex: 1;
}

/* Active step */
.steps li.active {
  background: rgba(59, 130, 246, 0.12);
  color: #e5e7eb;
}

.steps li.active .index {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.6);
  color: #93c5fd;
}

/* Completed step */
.steps li.done {
  color: #cbd5f5;
}

.steps li.done .index {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  color: #22c55e;
}

/* Hover (non-active) */
.steps li:not(.active):hover {
  background: rgba(148, 163, 184, 0.08);
}
</style>
