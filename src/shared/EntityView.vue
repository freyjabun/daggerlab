<script setup>
// Generic list editor for any feature. Everything specific to a feature
// (store, card, form, labels, print route) comes from the `feature` registry
// entry, so a new Daggerheart thing needs zero new view code.
const props = defineProps({
  feature: { type: Object, required: true },
})

const store = props.feature.useStore()

const printAll = () => window.open(props.feature.printPath, '_blank')

const clearAll = () => {
  if (confirm(`Are you sure you want to remove all ${props.feature.label.toLowerCase()}?`)) {
    store.removeAll()
  }
}
</script>

<template>
  <div class="flex justify-between mb-4">
    <button @click="printAll" class="button mb-2 bg-gradient-to-r from-splendor-dark to-splendor-light">
      Print {{ feature.label }}
    </button>
    <button @click="clearAll" class="button mb-2 bg-blade">Clear All</button>
  </div>

  <div class="flex flex-col gap-4">
    <div v-for="(item, i) in store.items" :key="i" class="flex flex-col lg:flex-row gap-8 items-start">
      <div class="w-l flex-shrink-0 print:hidden">
        <component
          :is="feature.form"
          :item="item"
          :show-remove="i !== 0"
          :show-add="i === store.items.length - 1"
          @remove="store.remove(i)"
          @add="store.add()"
        />
      </div>

      <div class="w-xl bg-sitebg p-6 print-card">
        <component :is="feature.card" :item="item" />
      </div>
    </div>
  </div>
</template>
