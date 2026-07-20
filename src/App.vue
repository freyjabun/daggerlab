<script setup>
import { RouterView } from 'vue-router'
import Nav from '@/shared/Nav.vue'
</script>

<template>
  <div class="min-h-screen bg-codex-dark print:bg-white print:block">
    <Nav />
    <RouterView />
  </div>
</template>
