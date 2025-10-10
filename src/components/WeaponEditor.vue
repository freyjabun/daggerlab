<script setup>
defineProps({
  modelValue: Object
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-3 label-white">

    <div class="grid grid-cols-2 gap-3">
      <div>
        <label>Weapon Type</label>
        <input
          v-model="modelValue.weaponType"
          @input="$emit('update:modelValue', modelValue)"
          class="input-field"
        />
      </div>
      

      <div>
        <label >Range</label>
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
        <label>Damage</label>
        <input
          v-model="modelValue.roll"
          @input="$emit('update:modelValue', modelValue)"
          class="input-field"
        />
      </div>

      <div>
        <label>Type</label>
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
        <label>ATK</label>
        <input
            v-model="modelValue.atk"
            @change="$emit('update:modelValue', modelValue)"
            class="input-field"
        />
      </div>
    </div>
  </div>
</template>
