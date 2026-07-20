import { createEntityStore } from '@/shared/createEntityStore'
import { createEmptyAdversary, createExampleAdversary } from './model'

export const useAdversaryStore = createEntityStore(
  'adversaries',
  createEmptyAdversary,
  createExampleAdversary,
)
