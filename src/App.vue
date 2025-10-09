<script setup>
import { reactive } from 'vue';
import AdversaryCard from './components/AdversaryCard.vue';
import { createEmptyAdversary, createExampleAdversary } from './models/adversary';
import AdversaryForm from './components/AdversaryForm.vue';
const adversary = reactive(createExampleAdversary()) 
</script>
<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-start justify-center gap-8 p-8 print:bg-white print:block">
    <!-- Left: Form -->
    <div class="w-[400px] flex-shrink-0 print:hidden">
      <AdversaryForm :adversary="adversary" />
    </div> <!-- Right: Card -->
    <div
      class="w-[600px] flex-shrink-0 bg-white rounded-xl shadow-xl border border-gray-300 overflow-hidden h-[800px] p-6 print:shadow-none print:border-none print:w-full print:h-auto print:p-0">
      <AdversaryCard :adversary="adversary" />
    </div>
  </div>
</template>
<style scoped></style>