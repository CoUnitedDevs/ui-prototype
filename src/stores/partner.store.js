import { defineStore } from 'pinia'

export const usePartnerStore = defineStore('partner', {
  state: () => ({
    partner: {
      name: 'Payliance Partner',
      type: 'ISO',
      status: 'Active',
    },

    notifications: [
      { id: 1, message: 'New partner onboarded successfully' },
      { id: 2, message: 'Monthly report is ready to view' },
    ],
  }),

  getters: {
    partnerLabel: (state) => `${state.partner.name} (${state.partner.type})`,
  },

  actions: {
    updatePartner(payload) {
      this.partner = { ...this.partner, ...payload }
    },
    clearNotifications() {
      this.notifications = []
    },
  },
})
