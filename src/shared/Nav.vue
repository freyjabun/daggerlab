<script setup>
import { RouterLink } from 'vue-router'
import { features } from '@/features/registry'
</script>

<template>
  <nav class="print:hidden flex items-center gap-4 px-6 py-3 bg-daggerpurple-dark text-white">
    <RouterLink to="/" class="font-bold hover:underline">Daggerlab</RouterLink>
    <RouterLink
      v-for="feature in features"
      :key="feature.key"
      :to="feature.path"
      class="hover:underline"
      active-class="underline text-daggersand"
    >
      {{ feature.label }}
    </RouterLink>
  </nav>
</template>
