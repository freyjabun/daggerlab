<script setup>
import { reactive } from 'vue'
import { useEnvironmentStore } from '@/stores/environments'
import EnvironmentCard from '@/components/Environments/EnvironmentCard.vue'
import EnvironmentForm from '@/components/Environments/EnvironmentForm.vue'
import { createExampleEnvironment } from '../models/environment'

const store = useEnvironmentStore()

const environments = reactive([createExampleEnvironment(),])

const clearAllEnvironments = () => {
    if (confirm('Are you sure you want to remove all environments?')) {
    store.removeAllEnvironments()
}}

</script>
<template>
  <div class="flex justify-between mb-4">
    <button @click="printAll" class="button mb-2 bg-gradient-to-r from-splendor-dark to-splendor-light">Print Environments Except It Doesn't Work</button>
    <button @click="clearAllEnvironments"
       class="button mb-2 bg-blade">Clear All</button>
  </div>

  <div class="flex flex-col gap-4">
    <div v-for="(env, i) in store.environments" :key="i" class="flex flex-col lg:flex-row gap-8 items-start">
      <div class="w-l flex-shrink-0 print:hidden">
        <EnvironmentForm :environment="env"
        @remove="store.removeEnvironment(i)"
        :show-remove="i !== 0"
        @add="store.addEnvironment()"
        :show-add="i === store.adversaries.length - 1"
        />
      </div>
      
      <div class="w-xl bg-sitebg p-6 print-card">
        <EnvironmentCard :environment="env"/>
      </div>

    </div>
  </div>
</template>

