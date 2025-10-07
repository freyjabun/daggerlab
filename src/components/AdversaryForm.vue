<script setup>
import WeaponEditor from './WeaponEditor.vue';

defineProps({ adversary: Object })
</script>

<template>
  <div class="bg-white p-6 rounded-2xl shadow-md space-y-5 border border-gray-300">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Adversary Editor</h2>

    <!-- Basic Info -->
    <div>
      <label class="block font-semibold text-gray-700 mb-1">Name</label>
      <input v-model="adversary.name" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
    </div>

    <div>
      <label class="block font-semibold text-gray-700 mb-1">Type</label>
      <input v-model="adversary.type" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block font-semibold text-gray-700 mb-1">Tier</label>
        <input type="number" v-model="adversary.tier" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
      </div>
      <div>
        <label class="block font-semibold text-gray-700 mb-1">HP</label>
        <input type="number" v-model="adversary.hp" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
      </div>
    </div>

    <div>
      <label class="block font-semibold text-gray-700 mb-1">Stress</label>
      <input type="number" v-model="adversary.stress" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
    </div>

    <!-- Weapon -->
    <div class="border border-gray-400">
        <WeaponEditor v-model="adversary.weapon"/>
    </div>

    <!-- Description -->
    <div>
      <label class="block font-semibold text-gray-700 mb-1">Description</label>
      <textarea v-model="adversary.description" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" rows="3" />
    </div>

    <!-- Features -->
    <h3 class="text-lg font-semibold mt-4">Features</h3>
    <div v-for="(feat, i) in adversary.features" :key="i" class="space-y-2 border-t border-gray-200 pt-2">
      <input v-model="feat.name" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" />
      <textarea v-model="feat.text" class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded" rows="2" />
    </div>
  </div>
</template>
