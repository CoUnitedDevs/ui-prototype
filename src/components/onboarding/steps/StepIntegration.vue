<script setup>
import { updateOnboardingStep } from '@/services/onboardingService'

const props = defineProps({ onboarding: Object })
const emit = defineEmits(['step-updated'])

const next = async () => {
  await updateOnboardingStep(props.onboarding.id, 5)
  emit('step-updated', 5)
}

const back = () => {
  emit('step-updated', 3)
}
</script>

<template>
  <div class="step">
    <!-- Header -->
    <div class="step-header">
      <h3>Integration Setup</h3>
      <p class="meta">Step 4 of 5 · Configure system endpoints</p>
    </div>

    <!-- Info -->
    <div class="info-box">
      <p>
        Provide your endpoints to receive real-time updates. You can update these values later from
        the account settings.
      </p>
    </div>

    <!-- Form -->
    <div class="form">
      <div class="field">
        <label>Webhook URL</label>
        <input type="url" placeholder="https://example.com/webhook" />
      </div>

      <div class="field">
        <label>Callback URL</label>
        <input type="url" placeholder="https://example.com/callback" />
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <button class="secondary" @click="back">Back</button>
      <button class="primary" @click="next">Next</button>
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
  margin-bottom: 20px;
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

/* Info box */
.info-box {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 24px;

  font-size: 13px;
  color: #cbd5f5;
}

/* Form */
.form {
  display: grid;
  gap: 20px;
}

/* Field */
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 12px;
  font-weight: 500;
  color: #cbd5f5;
}

input {
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  font-size: 14px;

  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: #e5e7eb;

  outline: none;
  transition: all 0.2s ease;
}

input::placeholder {
  color: #64748b;
}

input:focus {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.4);
}

/* Footer */
.footer {
  margin-top: 36px;
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
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border: none;
  color: white;
}

.primary:hover {
  filter: brightness(1.05);
}
</style>
