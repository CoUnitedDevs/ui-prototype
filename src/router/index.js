import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layout/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      {
        path: 'dashboard',
        component: () => import('../pages/DashboardLanding.vue'),
        meta: { title: 'Dashboard', section: 'Overview' },
      },
      {
        path: 'onboarding',
        component: () => import('../pages/onboarding/OnboardingLanding.vue'),
        meta: { title: 'Onboarding', section: 'Partner Setup' },
      },
      {
        path: 'onboarding/:id',
        component: () => import('../pages/onboarding/OnboardingFlow.vue'),
        meta: { title: 'Onboarding', section: 'In Progress' },
      },
      {
        path: 'pricing',
        component: () => import('../pages/Pricing.vue'),
        meta: { title: 'Pricing Simulator', section: 'Strategy' },
      },
      {
        path: 'reports',
        component: () => import('../pages/Reports.vue'),
        meta: { title: 'Reports', section: 'Transactions' },
      },
      {
        path: 'performance',
        component: () => import('../pages/Performance.vue'),
        meta: { title: 'Performance', section: 'Analytics' },
      },
      {
        path: 'resources',
        component: () => import('../pages/Resources.vue'),
        meta: { title: 'Resources', section: 'Library' },
      },
      {
        path: 'account',
        component: () => import('../pages/Account.vue'),
        meta: { title: 'Account', section: 'Settings' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `Partner Hub • ${to.meta.title}`
  }
})

export default router
