<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOnboarding } from '@/services/onboardingService'

import OnboardingStepper from '@/components/onboarding/OnboardingStepper.vue'
import StepPartnerDetails from '@/components/onboarding/steps/StepPartnerDetails.vue'
import StepBusinessInfo from '@/components/onboarding/steps/StepBusinessInfo.vue'
import StepCompliance from '@/components/onboarding/steps/StepCompliance.vue'
import StepIntegration from '@/components/onboarding/steps/StepIntegration.vue'
import StepReviewSubmit from '@/components/onboarding/steps/StepReviewSubmit.vue'

const route = useRoute()
const onboarding = ref(null)

onMounted(async () => {
  onboarding.value = await getOnboarding(route.params.id)
})

/* 🔑 THIS WAS MISSING */
const handleStepUpdated = (step) => {
  onboarding.value.currentStep = step
}

const router = useRouter()

const handleStatusUpdated = (status) => {
  onboarding.value.status = status

  if (status === 'SUBMITTED') {
    router.push('/onboarding')
  }
}

const stepComponent = computed(() => {
  if (!onboarding.value) return null

  return {
    1: StepPartnerDetails,
    2: StepBusinessInfo,
    3: StepCompliance,
    4: StepIntegration,
    5: StepReviewSubmit,
  }[onboarding.value.currentStep]
})
</script>

<template>
  <div v-if="onboarding" class="flow">
    <!-- LEFT: STEPPER -->
    <aside class="flow-sidebar">
      <OnboardingStepper
        :current-step="onboarding.currentStep"
        :status="onboarding.status"
        :type="onboarding.type"
      />
    </aside>

    <!-- RIGHT: STEP CONTENT -->
    <section class="flow-content">
      <div class="content-card">
        <component
          :is="stepComponent"
          :onboarding="onboarding"
          @step-updated="handleStepUpdated"
          @status-updated="handleStatusUpdated"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Page container */
.flow {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;

  align-items: stretch; /* 🔑 THIS */
}

.flow-sidebar {
  position: sticky;
  top: 96px;
  height: 100%;
}

/* Main content area */
.flow-content {
  width: 100%;
}

/* Card wrapper for steps */
.content-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 16px;
  padding: 28px;
  min-height: 420px;

  box-shadow:
    0 10px 30px rgba(2, 6, 23, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

/* Responsive */
@media (max-width: 1024px) {
  .flow {
    grid-template-columns: 1fr;
  }

  .flow-sidebar {
    position: relative;
    top: 0;
  }
}
</style>
