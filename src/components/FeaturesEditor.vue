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

    <!-- Existing features -->
            <!-- Add new feature -->
    <button
      @click="addFeature"
      type="button"
      class="text-sm text-white px-3 py-1 rounded  bg-gradient-to-r from-sage to-sage-dark hover:bg-blue-700"
    >
      + Add Feature
    </button>
    <div
      v-for="(feat, i) in modelValue"
      :key="i"
      class="space-y-2"
    >
    <label>Feature {{ i+1 }}</label>
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
        v-if="modelValue.length"
        @click="removeFeature(i)"
        type="button"
        class="text-sm hover:underline bg-gradient-to-r from-blade to-blade-dark"
      >
        Remove Feature
      </button>

    </div>

   
  </div>
</template>
