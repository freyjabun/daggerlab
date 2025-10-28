<script setup>
import Stats from './Stats.vue';
import WeaponEditor from './WeaponEditor.vue';
import FeaturesEditor from './FeaturesEditor.vue';
import Collapsible from '../utilComponents/Collapsible.vue';
import BaseInfo from './BaseInfo.vue';


const emit = defineEmits(['remove', 'add'])
defineProps({
  adversary: Object,
  showAdd: Boolean,
  showRemove: Boolean
})
</script>

<template>
  <div class="bg-daggerpurple-dark p-6 rounded-2xl shadow-md space-y-5 border border-gray-300">
    <h2 class="text-2xl font-bold text-white mb-2">Adversary Editor</h2>

    <BaseInfo v-model="adversary.baseInfo"></BaseInfo>

    <!-- Stats -->
    <Collapsible title="Stats">
      <Stats v-model="adversary.stats" />
    </Collapsible>


    <!-- Weapon -->
    <Collapsible title="Weapon">
      <WeaponEditor v-model="adversary.weapon" />
    </Collapsible>


    <!-- Features -->
    <Collapsible title="Features">
      <FeaturesEditor v-model="adversary.features"></FeaturesEditor>
    </Collapsible>

    <div class="flex mt-2">
      <button v-if="showAdd" @click="$emit('add')"
        class="leading-none bg-sage text-white px-4 py-2 rounded mr-auto">
        Add Adversary
      </button>
      <button v-if="showRemove" @click="$emit('remove')" class="leading-none bg-blade text-white px-4 py-2 rounded ml-auto">
        Remove
      </button>
    </div>
  </div>
</template>
