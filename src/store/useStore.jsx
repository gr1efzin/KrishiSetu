import { create } from 'zustand'
import { translations } from '@/i18n/translations'

export const useStore = create((set, get) => ({
  // --- Active tab ---
  activeTab: 'dashboard',
  setActiveTab: (tab) => set({ activeTab: tab }),

  // --- Notification ---
  notification: null,
  setNotification: (msg) => set({ notification: msg }),

  // --- Language ---
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),

  // Derived translation helper (call as a getter)
  t: (key) => {
    const { language } = get()
    return translations[language]?.[key] || translations.en[key] || key
  },

  // --- Shipments ---
  shipments: [],
  setShipments: (updater) =>
    set((state) => ({
      shipments: typeof updater === 'function' ? updater(state.shipments) : updater,
    })),

  // --- Joined pools ---
  joinedPools: {},
  setJoinedPools: (updater) =>
    set((state) => ({
      joinedPools: typeof updater === 'function' ? updater(state.joinedPools) : updater,
    })),
}))
