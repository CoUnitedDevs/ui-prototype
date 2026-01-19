<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseCard from '@/components/common/BaseCard.vue'
import { getActiveOnboarding, createOnboarding } from '@/services/onboardingService'

const router = useRouter()
const activeOnboarding = ref(null)

onMounted(async () => {
  activeOnboarding.value = await getActiveOnboarding()
})

const start = async (type) => {
  console.log('Clicked:', type)
  if (activeOnboarding.value?.type === type) {
    router.push(`/onboarding/${activeOnboarding.value.id}`)
    return
  }

  const onboarding = await createOnboarding(type)
  console.log('Onboarding response:', onboarding)
  router.push(`/onboarding/${onboarding.id}`)
}
</script>

<template>
  <div class="page">
    <BaseCard class="onboarding-card">
      <h2 class="title">Partner Onboarding</h2>
      <p class="subtitle">Select onboarding method</p>

      <div class="options">
        <div class="option" @click="start('API')">
          <span class="icon">🔗</span>
          <div>
            <h4>API-based Integration</h4>
            <p>Automated onboarding via secure APIs</p>

            <span v-if="activeOnboarding?.type === 'API'" class="status">
              {{ activeOnboarding.status }}
            </span>
          </div>
        </div>

        <div class="option" @click="start('PAPER')">
          <span class="icon">📄</span>
          <div>
            <h4>Paper-based Setup</h4>
            <p>Manual onboarding with documents</p>

            <span v-if="activeOnboarding?.type === 'PAPER'" class="status">
              {{ activeOnboarding.status }}
            </span>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.page {
  padding: 32px;
  width: 100%;
}

/* DARK card surface – matches dashboard & pricing */
.onboarding-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.92));
}

/* Typography */
.title {
  font-size: 20px;
  font-weight: 600;
  color: #f8fafc;
}

.subtitle {
  margin-top: 6px;
  font-size: 13px;
  color: #94a3b8;
}

/* Options layout */
.options {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

/* Option cards */
.option {
  display: flex;
  gap: 14px;
  padding: 16px;
  border-radius: 14px;

  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.15);

  cursor: pointer;
  transition: all 0.25s ease;
}

.option:hover {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.45);
  transform: translateY(-2px);
}

/* Option text */
.option h4 {
  font-size: 14px;
  font-weight: 600;
  color: #e5e7eb;
}

.option p {
  font-size: 12px;
  color: #94a3b8;
}

/* Icon */
.icon {
  font-size: 22px;
  opacity: 0.9;
}

.status {
  display: inline-block;
  margin-top: 6px;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 999px;

  background: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.35);
}
</style>
