<script setup>
defineProps({
  modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-lg font-semibold">Weapon</h3>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="block font-semibold text-gray-700 mb-1">Weapon Type</label>
        <input
          v-model="modelValue.weaponType"
          @input="$emit('update:modelValue', modelValue)"
          class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded"
        />
      </div>
      

      <div>
        <label class="block font-semibold text-gray-700 mb-1">Range</label>
        <select
          v-model="modelValue.range"
          @change="$emit('update:modelValue', modelValue)"
          class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded"
        >
          <option>Melee</option>
          <option>Very Close</option>
          <option>Close</option>
          <option>Far</option>
          <option>Very Far</option>
        </select>
      </div>

      <div>
        <label class="block font-semibold text-gray-700 mb-1">Damage</label>
        <input
          v-model="modelValue.roll"
          @input="$emit('update:modelValue', modelValue)"
          class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded"
        />
      </div>

      <div>
        <label class="block font-semibold text-gray-700 mb-1">Type</label>
        <select
          v-model="modelValue.damageType"
          @change="$emit('update:modelValue', modelValue)"
          class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded"
        >
          <option>Physical</option>
          <option>Magical</option>
        </select>
      </div>

      <div>
        <label class="block font-semibold text-gray-700 mb-1">ATK</label>
        <input
            v-model="modelValue.atk"
            @change="$emit('update:modelValue', modelValue)"
            class="border border-gray-400 bg-gray-50 text-gray-800 p-2 w-full rounded"
        />
      </div>
    </div>
  </div>
</template>
