<script setup>
import { reactive } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

function addFeature() {
  props.modelValue.push({ name: '', text: '' })
  emit('update:modelValue', props.modelValue)
}

function removeFeature(index) {
  props.modelValue.splice(index, 1)
  emit('update:modelValue', props.modelValue)
}
</script>

<template>
  <div class="space-y-2">
    <h3 class="text-lg font-semibold mt-4 text-gray-800">Features</h3>

    <!-- Existing features -->
    <div
      v-for="(feat, i) in modelValue"
      :key="i"
      class="border-t border-gray-200 space-y-2"
    >
      <input
        v-model="feat.name"
        class="input-field"
        @input="$emit('update:modelValue', modelValue)"
      />
      <textarea
        v-model="feat.text"
        class="input-field"
        rows="2"
        @input="$emit('update:modelValue', modelValue)"
      ></textarea>

      <button
        v-if="modelValue.length > 1"
        @click="removeFeature(i)"
        type="button"
        class="text-sm text-red-600 hover:underline"
      >
        Remove Feature
      </button>
    </div>

    <!-- Add new feature -->
    <button
      @click="addFeature"
      type="button"
      class="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      + Add Feature
    </button>
  </div>
</template>
