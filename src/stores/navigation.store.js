import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    menu: [
      { label: 'Dashboard', path: '/dashboard', icon: '📊' },
      { label: 'Onboarding', path: '/onboarding', icon: '🚀' },
      { label: 'Pricing Simulator', path: '/pricing', icon: '💲' },
      { label: 'Reports', path: '/reports', icon: '📄' },
      { label: 'Performance', path: '/performance', icon: '📈' },
      { label: 'Resources', path: '/resources', icon: '📦' },
      { label: 'Account', path: '/account', icon: '⚙️' },
    ],
  }),
})
