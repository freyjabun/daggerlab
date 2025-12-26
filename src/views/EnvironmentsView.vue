<script setup>
import { reactive } from 'vue'
import { useEnvironmentStore } from '@/stores/environments'
import EnvironmentCard from '@/components/Environments/EnvironmentCard.vue'
import EnvironmentForm from '@/components/Environments/EnvironmentForm.vue'
import { createExampleEnvironment } from '../models/environment'

const store = useEnvironmentStore()

const environments = reactive([createExampleEnvironment(),])

</script>
<template>
  <div class="environments-view">
    <h1>Nothing to see here</h1>
  </div>
</template>

