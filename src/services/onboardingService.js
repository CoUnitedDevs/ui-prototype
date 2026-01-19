const STORAGE_KEY = 'partner_onboarding'

// Get active onboarding (simulate backend)
export const getActiveOnboarding = async () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : null
}

// Create onboarding
export const createOnboarding = async (type) => {
  const onboarding = {
    id: crypto.randomUUID(),
    type,
    status: 'DRAFT',
    currentStep: 1,
    createdAt: new Date().toISOString(),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(onboarding))
  return onboarding
}

// Get onboarding by ID
export const getOnboarding = async (id) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  return data?.id === id ? data : null
}

// Update step
export const updateOnboardingStep = async (id, step) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (!data || data.id !== id) return

  data.currentStep = step
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

// Submit onboarding
export const submitOnboarding = async (id) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (!data || data.id !== id) return

  data.status = 'SUBMITTED'
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
