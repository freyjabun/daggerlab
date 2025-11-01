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

const addAdversary = () => {
  adversaries.push(createEmptyAdversary())
}

const removeAdversary = (i) => {
  adversaries.splice(i, 1)
}
</script>

<template>
  <div class="print:bg-white print:block">

    <div class="flex flex-col gap-4">
      <div v-for="(adv, i) in store.adversaries" :key="i" class="flex flex-col lg:flex-row gap-8 items-start">

        <div class="w-[450px] flex-shrink-0 print:hidden">
          <AdversaryForm :adversary="adv"
          @remove="store.removeAdversary(i)"
          :show-remove="i !== 0"
          @add="store.addAdversary()"
          :show-add="i === store.adversaries.length - 1" 
          />
        </div>

        <div class="w-[600px] bg-sitebg p-6 print-card">
          <AdversaryCard :adversary="adv" />
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped></style>
