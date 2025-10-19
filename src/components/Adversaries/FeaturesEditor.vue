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

    <div v-for="(feat, i) in modelValue" :key="i">
      <div class="space-y-2">
        <input placeholder="Feature name" v-model="feat.name" class="input-field"
          @input="$emit('update:modelValue', modelValue)" />
        <textarea placeholder="Feature description" v-model="feat.text" class="input-field" rows="2"
          @input="$emit('update:modelValue', modelValue)"></textarea>
      </div>



    </div>

    <div class="flex mt-1 mb-5">
      <!-- TODO: CANT ACCESS {i} BECAUSE IT'S NOT IN THE SAME DIV WHERE IT IS DEFINED, HOW DO I ACCESS THIS VALUE? ADD V-IF FOR IT-->
      <button @click="addFeature" type="button"
        class="text-sm text-white px-3 py-1 rounded  bg-gradient-to-r from-sage to-sage-dark hover:bg-blue-700 mr-auto">
        + Add Feature
      </button>

      <button v-if="modelValue.length" @click="removeFeature(i)" type="button"
        class="text-sm hover:underline bg-gradient-to-r from-blade to-blade-dark ml-auto">
        Remove Feature
      </button>

    </div>


  </div>
</template>
