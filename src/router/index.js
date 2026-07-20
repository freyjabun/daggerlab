import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EntityView from '@/shared/EntityView.vue'
import PrintPage from '@/shared/PrintPage.vue'
import { features } from '@/features/registry'

const routes = [
  { path: '/', name: 'Home', component: Home },
  ...features.flatMap((feature) => [
    {
      path: feature.path,
      name: feature.label,
      component: EntityView,
      props: { feature },
    },
    {
      path: feature.printPath,
      name: `Print${feature.label}`,
      component: PrintPage,
      props: { feature },
    },
  ]),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
