<script setup>
import { useEnvironmentStore } from '@/stores/environments'
import EnvironmentCard from '../Environments/EnvironmentCard.vue'
import { onMounted } from 'vue'

const store = useEnvironmentStore()

onMounted(() => {
  setTimeout(() => window.print(), 500)
})
</script>

<template>
  <div class="columns-2 gap-2 bg-white">
    <EnvironmentCard class="break-inside-avoid mb-2 bg-daggersand" v-for="(env, i) in store.environments" :key="i" :environment="env" />
  </div>
</template>
