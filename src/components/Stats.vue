<script setup>
defineProps({
    modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="space-y-3">

        <div class="grid grid-cols-2 gap-3">
            <div>
                <label>Difficulty</label>
                <input v-model="modelValue.difficulty" @input="$emit('update:modelValue', modelValue)"
                    class="input-field" />
            </div>

            <div>
                <label>Tier</label>
                <input v-model="modelValue.tier" @input="$emit('update:modelValue', modelValue)" class="input-field" />
            </div>

            <div>
                <label>HP</label>
                <input v-model.number="modelValue.hp" @input="$emit('update:modelValue', modelValue)"
                    class="input-field" />
            </div>

            <div>
                <label>Stress</label>
                <input v-model.number="modelValue.stress" @input="$emit('update:modelValue', modelValue)"
                    class="input-field" />
            </div>

        </div>
        <div>
            <label>Thresholds</label>
            <div class="flex items-center space-x-2">
                <input v-model.number="modelValue.thresholdMinor" @input="$emit('update:modelValue', modelValue)"
                    class="input-field flex-1"></input>
                <span class="flex-none text-gray-400">/</span>
                <input v-model.number="modelValue.thresholdMajor" @input="$emit('update:modelValue', modelValue)"
                    class="input-field flex-1"></input>
            </div>
        </div>


    </div>
</template>
