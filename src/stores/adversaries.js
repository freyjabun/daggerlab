import { defineStore } from 'pinia'
import { createExampleAdversary, createEmptyAdversary } from '@/models/adversary'

export const useAdversaryStore = defineStore('adversaries', {
  state: () => ({
    adversaries: [ createExampleAdversary() ]
  }),
  actions: {
    addAdversary() {
      this.adversaries.push(createEmptyAdversary())
    },
    removeAdversary(i) {
      this.adversaries.splice(i, 1)
    },
    removeAllAdversaries() {
      this.adversaries = [createExampleAdversary()]
    }
  },
  persist: true,
})
