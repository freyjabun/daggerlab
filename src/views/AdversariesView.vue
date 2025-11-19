<script setup>
import { reactive } from 'vue'
import { useAdversaryStore } from '@/stores/adversaries'
import AdversaryCard from '@/components/Adversaries/AdversaryCard.vue'
import AdversaryForm from '@/components/Adversaries/AdversaryForm.vue'
import { createEmptyAdversary, createExampleAdversary } from '@/models/adversary'

const store = useAdversaryStore()

const adversaries = reactive([
  createExampleAdversary(),
])

const printAll = () => {
  window.open('/printAdversaries', '_blank')
}

const clearAllAdversaries = () => {
  if (confirm('Are you sure you want to remove all adversaries?')) {
    store.removeAllAdversaries()
  }
}

</script>

<template>
  <div class="flex justify-between mb-4">
    <button @click="printAll" class="button mb-2 bg-gradient-to-r from-splendor-dark to-splendor-light">Print Adversaries</button>
    <button @click="clearAllAdversaries"
       class="button mb-2 bg-blade">Clear All</button>
  </div>


    <div class="flex flex-col gap-4">
      <div v-for="(adv, i) in store.adversaries" :key="i" class="flex flex-col lg:flex-row gap-8 items-start">

        <div class="w-l flex-shrink-0 print:hidden">
          <AdversaryForm :adversary="adv"
          @remove="store.removeAdversary(i)"
          :show-remove="i !== 0"
          @add="store.addAdversary()"
          :show-add="i === store.adversaries.length - 1" 
          />
        </div>

        <div class="w-xl bg-sitebg p-6 print-card">
          <AdversaryCard :adversary="adv" />
        </div>

      </div>
    </div>

</template>

<style scoped></style>
