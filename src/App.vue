<script setup>
import { reactive } from 'vue'
import AdversaryCard from './components/Adversaries/AdversaryCard.vue'
import AdversaryForm from './components/Adversaries/AdversaryForm.vue'
import { createEmptyAdversary, createExampleAdversary } from './models/adversary'

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
  <div class="min-h-screen bg-codex-dark p-8 space-y-8 print:bg-white print:block">

    <div class="flex flex-col gap-10">
      <div v-for="(adv, i) in adversaries" :key="i" class="flex flex-col lg:flex-row gap-8 items-start">

        <div class="w-[400px] flex-shrink-0 print:hidden">
          <AdversaryForm :adversary="adv"
          @remove="removeAdversary(i)"
          :show-remove="i !== 0"
          @add="addAdversary()"
          :show-add="i === adversaries.length - 1" 
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
