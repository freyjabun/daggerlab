<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  initiallyOpen: { type: Boolean, default: true }
});

const isOpen = ref(props.initiallyOpen);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
<button
  class="w-full text-left font-semibold flex justify-between items-center p-3 rounded focus:outline-none
          border border-gray-300 appearance-none bg-gradient-to-r from-bone to-bone-dark text-gray-800"
  @click="toggle"
>
  {{ title }}
  <span>{{ isOpen ? '▼' : '▶' }}</span>
</button>




    <div v-show="isOpen" :class="['bg-radial from-daggerpurple-light from-daggerpurple to-daggerpurple-dark','rounded-lg p-3', isOpen ? 'border border-gray-300' : '']">
      <slot />
    </div>
  </div>
</template>
