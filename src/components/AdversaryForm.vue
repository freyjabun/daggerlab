<script setup>
import Stats from './Stats.vue';
import WeaponEditor from './WeaponEditor.vue';
import FeaturesEditor from './FeaturesEditor.vue';
import Collapsible from './utilComponents/Collapsible.vue';

defineProps({ adversary: Object })
</script>

<template>
  <div class="bg-sitebg p-6 rounded-2xl shadow-md space-y-5 border border-gray-300">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Adversary Editor</h2>

    <!-- Basic Info -->
    <div>
      <label class="label">Name</label>
      <input v-model="adversary.name" class="input-field" />
    </div>

    <div>
      <div>
        <label class="label">Type</label>
        <select v-model="adversary.type" class="input-field">
          <option>Bruiser</option>
          <option>Horde</option>
          <option>Leader</option>
          <option>Minion</option>
          <option>Ranged</option>
          <option>Skulk</option>
          <option>Solo</option>
          <option>Standard</option>
          <option>Support</option>
        </select>
      </div>

    </div>

    <!-- Stats -->
    <Collapsible title="Stats">
      <Stats v-model="adversary.stats" />
    </Collapsible>


    <!-- Weapon -->
    <Collapsible title="Weapon">
      <WeaponEditor v-model="adversary.weapon" />
    </Collapsible>


    <!-- Description -->
    <div>
      <label class="block font-semibold text-gray-700 mb-1 text-daggerpurple">Description</label>
      <textarea v-model="adversary.description" class="input-field" rows="3" />
    </div>

    <!-- Features -->
     <Collapsible title="Features">
      <FeaturesEditor v-model="adversary.features"></FeaturesEditor>
    </Collapsible>
    </div>
</template>
