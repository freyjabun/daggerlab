<script setup>
defineProps({
    modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <label class="label">Difficulty</label>
        <input v-model="modelValue.difficulty" @input="$emit('update:modelValue', modelValue)" class="input-field-dark"></input>
    </div>
    <div>
        <label class="label">Potential Adversaries</label>
        <textarea v-model="modelValue.potentialAdversaries" @input="$emit('update:modelValue', modelValue)" class="input-field-dark"></textarea>
    </div>
</template>