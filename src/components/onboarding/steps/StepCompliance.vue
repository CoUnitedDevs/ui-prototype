<script setup>
import { updateOnboardingStep } from '@/services/onboardingService'

const props = defineProps({ onboarding: Object })

const emit = defineEmits(['step-updated'])

const next = async () => {
  await updateOnboardingStep(props.onboarding.id, 4)
  emit('step-updated', 4)
}
const back = () => {
  emit('step-updated', 2)
}
</script>

<template>
  <div class="step">
    <!-- Header -->
    <div class="step-header">
      <h3>Compliance</h3>
      <p class="meta">Step 3 of 5 · Verify required documents</p>
    </div>

    <!-- Info box -->
    <div class="info-box">
      <p>
        To comply with regulatory requirements, please upload the requested documents. You can save
        this step and complete it later.
      </p>
    </div>

    <!-- Upload -->
    <div class="upload">
      <label class="upload-box">
        <input type="file" hidden />
        <div class="upload-content">
          <span class="icon">📄</span>
          <div>
            <strong>Upload Compliance Document</strong>
            <p>PDF, JPG, or PNG · Max 5MB</p>
          </div>
        </div>
      </label>
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

/* Upload */
.upload {
  margin-bottom: 32px;
}

.upload-box {
  display: block;
  cursor: pointer;
}

.upload-content {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;

  border-radius: 14px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.6);

  transition: all 0.2s ease;
}

.upload-content:hover {
  border-color: rgba(59, 130, 246, 0.6);
  background: rgba(59, 130, 246, 0.08);
}

.upload-content strong {
  font-size: 14px;
  color: #e5e7eb;
}

.upload-content p {
  font-size: 12px;
  color: #94a3b8;
}

/* Icon */
.icon {
  font-size: 22px;
  opacity: 0.9;
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
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border: none;
  color: white;
}

.primary:hover {
  filter: brightness(1.05);
}
</style>
