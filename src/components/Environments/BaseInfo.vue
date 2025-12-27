<script setup>
defineProps({
    modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="grid grid-cols-2 gap-2 text-left">
        <div>
            <label class="label">Type</label>
            <select v-model="modelValue.type" @input="$emit('update:modelValue', modelValue)" class="input-field-dark">
                <option>Exploration</option>
                <option>Traversal</option>
                <option>Social</option>
                <option>Event</option>
            </select>
        </div>
        <div>
            <label class="label">Name</label>
            <input v-model="modelValue.name" @input="$emit('update:modelValue', modelValue)" class="input-field-dark" />
        </div>
        <div>
            <label class="label">Impulses</label>
            <input v-model="modelValue.impulses" @input="$emit('update:modelValue', modelValue)" class="input-field-dark">
        </div>
        <div>
            <label class="label">Tier</label>
            <input v-model="modelValue.tier" @input="$emit('update:modelValue', modelValue)" class="input-field-dark">
        </div>
    </div>
    <div>
        <label class="label">Description</label>
        <textarea v-model="modelValue.description" @input="$emit('update:modelValue', modelValue)" class="input-field-dark"></textarea>
    </div>
</template>