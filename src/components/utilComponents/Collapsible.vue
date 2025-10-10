<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  initiallyClosed: { type: Boolean, default: false }
});

const isOpen = ref(props.initiallyClosed);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
<button
  class="w-full text-left font-semibold flex justify-between items-center p-3 rounded focus:outline-none
          border border-gray-300 appearance-none bg-gradient-to-r from-bone-light to-bone text-gray-800"
  @click="toggle"
>
  {{ title }}
  <span>{{ isOpen ? '▼' : '▶' }}</span>
</button>




    <div v-show="isOpen" :class="['bg-radial from-daggerpurple-dark from-daggerpurple to-daggerpurple-light','rounded-lg p-3', isOpen ? 'border border-gray-300' : '']">
      <slot />
    </div>
  </div>
</template>
