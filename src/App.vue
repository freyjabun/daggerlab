<script setup>
import { reactive } from 'vue'
import AdversaryCard from './components/Adversaries/AdversaryCard.vue'
import AdversaryForm from './components/Adversaries/AdversaryForm.vue'
import { createEmptyAdversary, createExampleAdversary } from './models/adversary'

// --- STATE: an array instead of a single object ---
const adversaries = reactive([
  createExampleAdversary(), // start with one example
])

// --- HELPERS ---
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
      <div
        v-for="(adv, i) in adversaries"
        :key="i"
        class="flex flex-col lg:flex-row gap-8 items-start"
      >

        <!-- LEFT — FORM -->
        <div class="w-[400px] flex-shrink-0 print:hidden">
          <AdversaryForm :adversary="adv" />
          <div class="flex justify-between mt-2">
            <button
              @click="addAdversary"
              class="leading-none bg-sage text-white px-4 py-2 rounded">
              Add Adversary
            </button>
            <button
              @click="removeAdversary(i)"
              class="leading-none bg-blade text-white px-4 py-2 rounded">
              Remove
            </button>

          </div>

        </div>

        <!-- RIGHT — CARD PREVIEW -->
        <div
          class="w-[600px] flex-shrink-0 bg-sitebg rounded-xl shadow-xl border border-gray-300 overflow-y-auto p-6
                 print:shadow-none print:border-none print:w-full print:h-auto print:p-0"
        >
          <AdversaryCard :adversary="adv" />
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped></style>
