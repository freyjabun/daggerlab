<script setup>
defineProps({
  modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-lg font-semibold text-gray-800">Weapon</h3>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="label">Weapon Type</label>
        <input
          v-model="modelValue.weaponType"
          @input="$emit('update:modelValue', modelValue)"
          class="input-field"
        />
      </div>
      

      <div>
        <label class="label">Range</label>
        <select
          v-model="modelValue.range"
          @change="$emit('update:modelValue', modelValue)"
          class="input-field"
        >
          <option>Melee</option>
          <option>Very Close</option>
          <option>Close</option>
          <option>Far</option>
          <option>Very Far</option>
        </select>
      </div>

      <div>
        <label class="label">Damage</label>
        <input
          v-model="modelValue.roll"
          @input="$emit('update:modelValue', modelValue)"
          class="input-field"
        />
      </div>

      <div>
        <label class="label">Type</label>
        <select
          v-model="modelValue.damageType"
          @change="$emit('update:modelValue', modelValue)"
          class="input-field"
        >
          <option>Physical</option>
          <option>Magical</option>
        </select>
      </div>

      <div>
        <label class="label">ATK</label>
        <input
            v-model="modelValue.atk"
            @change="$emit('update:modelValue', modelValue)"
            class="input-field"
        />
      </div>
    </div>
  </div>
</template>
