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
          <option>Bruiser</option>
          <option>Horde</option>
          <option>Leader</option>
          <option>Minion</option>
          <option>Ranged</option>
          <option>Skulk</option>
          <option>Solo</option>
          <option>Standard</option>
          <option>Support</option>
        </select>
      </div>
    <div>
      <label class="label">Name</label>
      <input placeholder="Big Scary Guy" v-model="modelValue.name" @input="$emit('update:modelValue', modelValue)" class="input-field-dark" />
    </div>

    <div>
        <label class="label">Motives & Tactics</label>
        <input placeholder="Kill murder kill" v-model="modelValue.motives" @input="$emit('update:modelValue', modelValue)" class="input-field-dark"></input>
    </div>

    <div>
      <label class="label">Tier</label>
      <input placeholder="1" v-model="modelValue.tier" @input="emit('update:modelValue', modelValue)" class="input-field-dark"></input>
    </div>
  </div>
  <div>
    <label class="label">Description</label>
    <textarea placeholder="Big stinky guy who is both big and stinky" v-model="modelValue.description" @input="$emit('update:modelValue', modelValue)" class="input-field-dark"></textarea>
  </div>
</template>