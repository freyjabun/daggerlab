import { defineStore } from 'pinia'
import { createEmptyEnvironment, createExampleEnvironment } from '@models/environment'

export const useEnvironmentStore = defineStore('environments', {
  state: () => ({
    environments: [createExampleEnvironment()]
  }),
  actions: {
    addEnvironment(){
        this.environments.push(createEmptyEnvironment())
    },
    removeEnvironment(){
        this.environments.splice(i, 1)
    },
    removeAllEnvironments(){
        this.environments = [createExampleEnvironment()]
    }
  },
  persist: true,
})