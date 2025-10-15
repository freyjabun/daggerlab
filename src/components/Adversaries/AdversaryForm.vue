<script setup>
import Stats from './Stats.vue';
import WeaponEditor from './WeaponEditor.vue';
import FeaturesEditor from './FeaturesEditor.vue';
import Collapsible from '../utilComponents/Collapsible.vue';
import BaseInfo from './BaseInfo.vue';

defineProps({ adversary: Object })
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
    </div>
</template>
