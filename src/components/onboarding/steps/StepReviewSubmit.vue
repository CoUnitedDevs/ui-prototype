<script setup>
import { submitOnboarding } from '@/services/onboardingService'

const props = defineProps({
  onboarding: Object,
})

const emit = defineEmits(['status-updated', 'step-updated'])

const submit = async () => {
  await submitOnboarding(props.onboarding.id)
  emit('status-updated', 'SUBMITTED')
}

const goBack = () => {
  emit('step-updated', 4) // 👈 go back to Integration
}
</script>

<template>
  <div class="step">
    <!-- Header -->
    <div class="step-header">
      <h3>Review & Submit</h3>
      <p class="meta">Step 5 of 5 · Final confirmation</p>
    </div>

    <!-- Summary -->
    <div class="summary">
      <ul>
        <li><span>Partner Details</span><strong>Completed</strong></li>
        <li><span>Business Information</span><strong>Completed</strong></li>
        <li><span>Compliance Documents</span><strong>Uploaded</strong></li>
        <li><span>Integration Setup</span><strong>Configured</strong></li>
      </ul>
    </div>

    <!-- Info -->
    <div class="info-box">
      <p>
        Once submitted, your onboarding request will be reviewed by our team. You will be notified
        once the review is complete.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <button class="secondary" @click="goBack">Back</button>
      <button class="primary" @click="submit">Submit Onboarding</button>
    </div>
  </div>
</template>
<style scoped>
/* Container */
.step {
  max-width: 720px;
}

/* Header */
.step-header {
  margin-bottom: 24px;
}

.step-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #f8fafc;
}

.meta {
  margin-top: 6px;
  font-size: 12px;
  color: #94a3b8;
}

/* Summary */
.summary {
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 24px;

  background: rgba(15, 23, 42, 0.6);
}

.summary ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.summary li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 13px;
  color: #cbd5f5;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.summary li:last-child {
  border-bottom: none;
}

.summary strong {
  font-size: 12px;
  font-weight: 600;
  color: #22c55e;
}

/* Info box */
.info-box {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 32px;

  font-size: 13px;
  color: #cbd5f5;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Buttons */
button {
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

/* Secondary */
.secondary {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.25);
  color: #94a3b8;
}

.secondary:hover {
  background: rgba(148, 163, 184, 0.08);
}

/* Primary */
.primary {
  background: linear-gradient(135deg, #16a34a, #22c55e);
  border: none;
  color: white;
}

.primary:hover {
  filter: brightness(1.05);
}
</style>
