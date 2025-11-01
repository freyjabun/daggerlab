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
</script>

<template>
<button @click="printAll" class="button">Print Adversaries</button>

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

        <div class="w-xl bg-sitebg p-6 print-card">
          <AdversaryCard :adversary="adv" />
        </div>

      </div>
    </div>

</template>

<style scoped></style>
