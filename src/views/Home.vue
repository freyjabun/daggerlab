<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center text-center bg-codex-dark text-white p-8 space-y-6">
    <h1 class="max-w-xl leading-relaxed">Welcome to Daggerlab</h1>
    <img src="@/assets/images/dhlogo.png" contain height="200px" width="200px"></img>
    <p class="max-w-xl text-lg leading-relaxed">
      This product includes materials from the
      <strong>Daggerheart System Reference Document 1.0</strong>, ©
      Critical Role, LLC. under the terms of the
      <strong>Darrington Press Community Gaming (DPCGL) License</strong>.
      More information can be found at
      <a href="https://www.daggerheart.com" target="_blank" class="text-blue-400 hover:underline">
        https://www.daggerheart.com
      </a>.
      There are no previous modifications by others.
    </p>

<div class="flex gap-4 mt-6">
  <!-- Adversaries button -->
  <RouterLink
    to="/adversaries"
    class="px-6 py-3 bg-daggerpurple hover:bg-daggerpurple-dark rounded-lg text-white font-semibold transition"
    >
    Create Adversaries
  </RouterLink>

  <!-- Environments button -->
  <div class="relative inline-block">
    <RouterLink
      to="/environments"
      class="px-6 py-3 bg-gray-600 rounded-lg text-white font-semibold transition inline-block"
    >
      Create Environments
    </RouterLink>

    <!-- UNDER CONSTRUCTION -->
    <div class="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
      <div class="w-full h-full bg-yellow-black-stripes rotate-12"></div>
    </div>
  </div>
</div>

  </div>
</template>
