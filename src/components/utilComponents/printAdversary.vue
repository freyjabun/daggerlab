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
  <div class="columns-2 gap-2 bg-white">
    <AdversaryCard class="break-inside-avoid mb-2 bg-daggerbackground" v-for="(adv, i) in store.adversaries" :key="i" :adversary="adv" />
  </div>
</template>
