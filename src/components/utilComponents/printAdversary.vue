<script setup>
import { useAdversaryStore } from '@/stores/adversaries'
import AdversaryCard from '@/components/Adversaries/AdversaryCard.vue'
import { onMounted } from 'vue'

const store = useAdversaryStore()

onMounted(() => {
  setTimeout(() => window.print(), 500)
})
</script>

<template>
  <div class="grid grid-cols-2 gap-2 bg-white">
    <AdversaryCard v-for="(adv, i) in store.adversaries" :key="i" :adversary="adv" />
  </div>
</template>
