<script setup>
  import BaseInfo from './BaseInfo.vue';
  import Stats from './Stats.vue';
  import FeaturesEditor from '../Adversaries/FeaturesEditor.vue';
  import Collapsible from '../utilComponents/Collapsible.vue';

  const emit = defineEmits(['remove', 'add'])
defineProps({
  environment: Object,
  showAdd: Boolean,
  showRemove: Boolean
})
</script>

<template>
  <div class="bg-daggerpurple-dark p-4 rounded-2xl text-white shadow-md space-y-4 border border-gray-300 w-full max-w-xl">
    <h2 class="text-h2 font-bold text-white">Environment Editor</h2>

    <BaseInfo v-model="environment.baseInfo"></BaseInfo>
    <Stats v-model="environment.stats"></Stats>
    <Collapsible title="Features">
      <FeaturesEditor v-model="environment.features"></FeaturesEditor> 
    </Collapsible>
  </div>

    <div class="flex mt-2 ml-1 mr-1">
    <button v-if="showAdd" @click="$emit('add')"
      class="leading-none bg-sage text-white px-4 py-2 rounded mr-auto hover:bg-sage-light">
      Add Environment
    </button>
    <button v-if="showRemove" @click="$emit('remove')" class="leading-none bg-blade text-white px-4 py-2 rounded ml-auto hover:bg-blade-light">
      Remove
    </button>
  </div>
</template>
