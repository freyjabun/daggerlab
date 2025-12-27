<script setup>
defineProps({ environment: Object })
</script>

<template>
  <div class="border border-gray-400 rounded shadow-sm text-gray-800 print:shadow-none">
    <!-- Header -->
    <div class="card-title px-2 py-1 text-left">
      <h2 class="font-bold">{{ environment.baseInfo.name }}</h2>
    </div>

    <!-- Body -->
    <div class="px-2 pb-2 text-sm leading-relaxed">
      <p class="font-bold text-left">Tier {{ environment.baseInfo.tier }} {{ environment.baseInfo.type }}</p>

      <p class="text-left">
        <span class="italic">{{ environment.baseInfo.description }}</span>
      </p>

      <div class="text-left">
        <span class="font-bold">Impulses</span>
        <span class="italic ml-1">{{ environment.baseInfo.impulses }}</span>
      </div>

      <div class="bg-white pl-2 pr-2 border-t-2 border-b-2 border-gray-500 pt-2 pb-1">
        <div class="text-left" >
          <span class="font-bold">Difficulty:</span>
          <span class="ml-1">{{ environment.stats.difficulty }}</span>
        </div>

        <div class="text-left">
          <span class="font-bold">Potential Adversaries:</span>
          <span class="ml-1">{{ environment.stats.potentialAdversaries }}</span>
        </div>
      </div>

      <!-- features -->
      <div v-if="Array.isArray(environment.features) && environment.features.some(f => f.name || f.text)">
        <h2 class="card-header  mt-2 text-left">Features</h2>
        <hr class="border-dotted border-gray-500 " />

        <template v-for="(feat, i) in environment.features" :key="i">
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
