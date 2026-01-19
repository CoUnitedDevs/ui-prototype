import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    filters: {
      dateRange: '30',
      partner: 'ALL',
    },

    metrics: [],
    partnerSummary: {
      totalPartners: 0,
      activeIntegrations: 0,
      pendingOnboarding: 0,
    },

    performanceData: {
      labels: [],
      values: [],
    },
  }),

  actions: {
    init() {
      this.computeMetrics()
      this.computePartnerSummary()
      this.computePerformance()
    },

    updateFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters }
      this.computeMetrics()
      this.computePartnerSummary()
      this.computePerformance()
    },

    computeMetrics() {
      const rangeMultiplier =
        this.filters.dateRange === '30' ? 1 : this.filters.dateRange === '90' ? 1.6 : 2.2

      const partnerBoost =
        this.filters.partner === 'ALL' ? 1 : this.filters.partner === 'ISO_ALPHA' ? 1.3 : 0.9

      this.metrics = [
        { title: 'Active Partners', value: Math.round(42 * partnerBoost) },
        {
          title: 'Monthly Volume',
          value: `$${(1.8 * rangeMultiplier * partnerBoost).toFixed(1)}M`,
        },
        { title: 'Top Performer', value: 'ISO Alpha' },
        { title: 'MoM Growth', value: `+${Math.round(12 * rangeMultiplier)}%` },
      ]
    },

    computePartnerSummary() {
      const partnerFactor =
        this.filters.partner === 'ALL' ? 1 : this.filters.partner === 'ISO_ALPHA' ? 0.6 : 0.4

      this.partnerSummary = {
        totalPartners: Math.round(42 * partnerFactor),
        activeIntegrations: Math.round(18 * partnerFactor),
        pendingOnboarding: Math.max(2, Math.round(6 * partnerFactor)),
      }
    },

    computePerformance() {
      const base = [120000, 150000, 170000, 160000, 190000, 210000]

      // 1️⃣ Date range affects trend strength
      const rangeMultiplier =
        this.filters.dateRange === '30' ? 1 : this.filters.dateRange === '90' ? 1.4 : 1.9

      // 2️⃣ Partner affects volatility
      const volatility =
        this.filters.partner === 'ALL' ? 0.05 : this.filters.partner === 'ISO_ALPHA' ? 0.15 : 0.25

      // 3️⃣ Generate visibly different data
      const values = base.map((value, index) => {
        const randomNoise = value * volatility * (Math.random() - 0.5)

        const trendBoost = index * value * 0.05 * rangeMultiplier

        return Math.round(value * rangeMultiplier + trendBoost + randomNoise)
      })

      this.performanceData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values,
      }
    },
  },
})
