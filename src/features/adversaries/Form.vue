<script setup>
import Stats from './Stats.vue';
import WeaponEditor from './WeaponEditor.vue';
import FeaturesEditor from '@/shared/FeaturesEditor.vue';
import Collapsible from '@/shared/Collapsible.vue';
import BaseInfo from './BaseInfo.vue';


const emit = defineEmits(['remove', 'add'])
defineProps({
  item: Object,
  showAdd: Boolean,
  showRemove: Boolean
})
</script>

<template>
  <div class="bg-daggerpurple-dark p-4 rounded-2xl shadow-md space-y-4 border border-gray-300 w-full max-w-xl">
    <h2 class="text-2xl font-bold text-white">Adversary Editor</h2>

    <BaseInfo v-model="item.baseInfo"></BaseInfo>
    <!-- Stats -->
    <Collapsible title="Stats">
      <Stats v-model="item.stats" />
    </Collapsible>


    <!-- Weapon -->
    <Collapsible title="Weapon">
      <WeaponEditor v-model="item.weapon" />
    </Collapsible>


    <!-- Features -->
    <Collapsible title="Features">
      <FeaturesEditor v-model="item.features"></FeaturesEditor>
    </Collapsible>

  </div>
  <div class="flex mt-2 ml-1 mr-1">
    <button v-if="showAdd" @click="$emit('add')"
      class="leading-none bg-sage text-white px-4 py-2 rounded mr-auto hover:bg-sage-light">
      Add Adversary
    </button>
    <button v-if="showRemove" @click="$emit('remove')" class="leading-none bg-blade text-white px-4 py-2 rounded ml-auto hover:bg-blade-light">
      Remove
    </button>
  </div>
</template>
