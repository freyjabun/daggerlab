<script setup>
defineProps({ adversary: Object })
</script>

<template>
  <div
    class="bg-white border border-gray-400 rounded shadow-sm max-w-2xl text-gray-800 print:shadow-none print:border-black"
  >
    <!-- Header -->
    <div class="bg-gray-700 text-white px-4 py-2 rounded-t">
      <h1 class="font-bold text-lg">{{ adversary.name }}</h1>
    </div>

    <!-- Body -->
    <div class="p-4 space-y-3 text-sm leading-relaxed">
      <!-- Tier + Type -->
      <p class="font-bold">
        Tier {{ adversary.tier }} {{ adversary.type }}
      </p>

      <!-- Description -->
      <p>
        <span class="font-bold">Description:</span>
        <span class="italic">{{ adversary.description }}</span>
      </p>

      <!-- Motives & Tactics -->
      <p v-if="adversary.motives">
        <span class="font-bold">Motives & Tactics:</span>
        <span class="italic">{{ adversary.motives }}</span>
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
            <span
              v-for="i in adversary.stats.hp"
              :key="'hp'+i"
              class="inline-block w-4 h-4 border border-gray-600 rounded-full"
            ></span>
          </p>

          <p class="flex items-center flex-wrap gap-1">
            <span class="font-semibold">Stress:</span>
            <span
              v-for="i in adversary.stats.stress"
              :key="'stress'+i"
              class="inline-block w-4 h-4 border border-gray-600 rounded-full"
            ></span>
          </p>
        </div>
      </div>

      <!-- FEATURES -->
      <div>
        <h2 class="font-bold uppercase text-gray-900 mt-2">Features</h2>
        <hr class="border-dotted border-gray-400 mb-2" />
        <div v-for="(feat, i) in adversary.features" :key="i" class="mb-2">
          <p>
            <span class="font-bold italic">{{ feat.name }}:</span>
            {{ feat.text }}
          </p>
        </div>
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
