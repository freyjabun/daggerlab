<script setup>
import { reactive } from 'vue';
import AdversaryCard from './components/AdversaryCard.vue';
import AdversaryForm from './components/AdversaryForm.vue';


const adversary = reactive({
  name: 'The Gate Guardian',
  type: 'Leader (Umbra-Touched)',
  tier: 1,
  hp: 8,
  stress: 3,
  weapon: {
  weaponType: 'Curved Blade',
  range: 'Very Close',
  roll: '1d10 + 3',
  damageType: 'Physical'
}
,
  features: [
    { name: 'Holy Buckler (Passive)', text: 'Once per round, block 1 physical hit.' },
    { name: 'Sweeping Strike (Action)', text: 'All close enemies take 1d8 physical damage.' }
  ],
  description: 'An ancient protector bound to the gate, corrupted by shadow energy.'
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8 flex flex-col lg:flex-row gap-8">
    <AdversaryForm :adversary="adversary" class="lg:w-1/3" />
    <AdversaryCard :adversary="adversary" class="lg:w-2/3" />
  </div>
</template>

<style scoped>
</style>
