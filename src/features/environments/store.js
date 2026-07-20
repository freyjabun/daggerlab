import { createEntityStore } from '@/shared/createEntityStore'
import { createEmptyEnvironment, createExampleEnvironment } from './model'

export const useEnvironmentStore = createEntityStore(
  'environments',
  createEmptyEnvironment,
  createExampleEnvironment,
)
