<script setup>
defineProps({ adversary: Object })
</script>

<template>
  <div
    class="bg-white border border-gray-400 rounded shadow-sm max-w-2xl text-gray-800 print:shadow-none print:border-black">
    <!-- Header -->
    <div class="bg-gradient-to-r from-bone to-bone-dark text-gray-800 px-2 py-1 rounded-t text-left">
      <h2 class="font-bold">{{ adversary.baseInfo.name}}</h2>
    </div>

    <!-- Body -->
    <div class="p-2 text-sm leading-relaxed">
      <!-- Tier + Type -->
      <p class="font-bold text-left">
        Tier {{ adversary.baseInfo.tier}} {{ adversary.baseInfo.type}}
      </p>

      <!-- Description -->
      <p class="flex">
        <span class="italic"> {{ adversary.baseInfo.description }}</span>
      </p>

      <!-- Motives & Tactics -->
      <p class="flex pb-2">
        <span class="font-bold">Motives & Tactics:</span>
        <span class="italic ml-1">{{ adversary.baseInfo.motives }}</span>
      </p>

      <!-- Weapon & Thresholds Row -->
      <div class="grid sm:grid-cols-2">
        <!-- Left: Weapon Info -->
        <div class="text-left border-r-2 border-gray-500" >
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

        <!-- Right: Thresholds, HP & Stress -->
        <div class="pl-2 text-left border-gray-400">
          <p>
            <span class="font-semibold">Thresholds:</span>
            {{ adversary.stats.thresholdMinor }} / {{ adversary.stats.thresholdMajor }}
          </p>


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
        <h2 class="card-header  mt-2 text-left">Features</h2>
        <hr class="border-dotted border-gray-500 " />

        <template v-for="(feat, i) in adversary.features" :key="i">
          <div v-if="feat.name || feat.text" class="text-left">
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
