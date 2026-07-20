<script setup>
import { onMounted } from 'vue'

// Generic print sheet: renders every item of a feature as its card in two
// columns, then triggers the browser print dialog.
const props = defineProps({
  feature: { type: Object, required: true },
})

const store = props.feature.useStore()

onMounted(() => {
  setTimeout(() => window.print(), 500)
})
</script>

<template>
  <div class="columns-2 gap-2 bg-white">
    <component
      :is="feature.card"
      class="break-inside-avoid mb-2 bg-daggersand"
      v-for="(item, i) in store.items"
      :key="i"
      :item="item"
    />
  </div>
</template>
