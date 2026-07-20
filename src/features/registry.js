import { useAdversaryStore } from './adversaries/store'
import AdversaryCard from './adversaries/Card.vue'
import AdversaryForm from './adversaries/Form.vue'

import { useEnvironmentStore } from './environments/store'
import EnvironmentCard from './environments/Card.vue'
import EnvironmentForm from './environments/Form.vue'

// Single source of truth for every Daggerlab feature. Router, navbar and home
// screen all derive from this list — adding a new thing (e.g. Campaign Frames)
// means: create features/<thing>/{model,store,Card,Form}.js, then append one
// entry here. Nothing else to wire.
export const features = [
  {
    key: 'adversaries',
    label: 'Adversaries',
    home: 'Create Adversaries',
    path: '/adversaries',
    printPath: '/print/adversaries',
    useStore: useAdversaryStore,
    card: AdversaryCard,
    form: AdversaryForm,
  },
  {
    key: 'environments',
    label: 'Environments',
    home: 'Create Environments',
    path: '/environments',
    printPath: '/print/environments',
    useStore: useEnvironmentStore,
    card: EnvironmentCard,
    form: EnvironmentForm,
  },
]
