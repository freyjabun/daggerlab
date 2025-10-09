<script setup>
defineProps({ adversary: Object })
</script>

<template>
  <div
    class="bg-white border border-gray-400 rounded shadow-sm max-w-2xl text-gray-800 print:shadow-none print:border-black">
    <!-- Header -->
    <div class="bg-zinc-500 text-white px-4 py-2 rounded-t">
      <h2 class="font-bold text-lg">{{ adversary.name }}</h2>
    </div>

    <!-- Body -->
    <div class="p-4 space-y-3 text-sm leading-relaxed">
      <!-- Tier + Type -->
      <p class="font-bold">
        Tier {{ adversary.stats.tier }} {{ adversary.type }}
      </p>

      <!-- Description -->
      <p class="flex gap-1">
        <span class="font-bold">Description:</span>
        <span class="italic ml-1"> {{ adversary.description }}</span>
      </p>

      <!-- Motives & Tactics -->
      <p class="flex gap-1" v-if="adversary.motives">
        <span class="font-bold">Motives & Tactics:</span>
        <span class="italic ml-1">{{ adversary.motives }}</span>
      </p>

      <!-- Weapon & Thresholds Row -->
      <div class="flex flex-col sm:flex-row sm:items-start gap-4 border-b border-gray-300 pb-2">
        <!-- Left: Weapon Info -->
        <div class="flex-1 text-left">
          <p>
            {{ adversary.weapon.weaponType }}:
            {{ adversary.weapon.range }} —
            {{ adversary.weapon.roll }}
            <span class="italic lowercase">
              ({{ adversary.weapon.damageType === 'Physical' ? 'phy' : 'mag' }})
            </span>
          </p>
          <p>ATK: {{ adversary.weapon.atk }}</p>
          <p>Difficulty: {{ adversary.stats.difficulty }}</p>
        </div>

        <!-- Center Divider -->
        <div class="hidden sm:flex items-stretch justify-center">
          <div class="border-l border-gray-400 mx-4"></div>
        </div>

        <!-- Right: Thresholds, HP & Stress -->
        <div class="flex-1 text-left">
          <p><span class="font-semibold">Thresholds:</span> 6 / 13</p>

          <p class="flex items-center flex-wrap gap-1">
            <span class="font-semibold">HP:</span>
            <span v-for="i in adversary.stats.hp" :key="'hp' + i"
              class="inline-block w-4 h-4 border border-gray-600 rounded-full"></span>
          </p>

          <p class="flex items-center flex-wrap gap-1">
            <span class="font-semibold">Stress:</span>
            <span v-for="i in adversary.stats.stress" :key="'stress' + i"
              class="inline-block w-4 h-4 border border-gray-600 rounded-full"></span>
          </p>
        </div>
      </div>
      <!-- FEATURES -->
      <div v-if="Array.isArray(adversary.features) && adversary.features.some(f => f.name || f.text)">
        <h2 class="font-bold uppercase text-gray-900 mt-2">Features</h2>
        <hr class="border-dotted border-gray-400 mb-2" />

        <template v-for="(feat, i) in adversary.features" :key="i">
          <div v-if="feat.name || feat.text" class="mb-2">
            <p>
              <span class="font-bold italic">{{ feat.name }}:</span>
              {{ feat.text }}
            </p>
          </div>
        </template>
      </div>



    </div>
  </div>
</template>

<style scoped>
@media print {
  body {
    background: white !important;
    -webkit-print-color-adjust: exact;
  }
}
</style>
