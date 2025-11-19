import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdversariesView from '../views/AdversariesView.vue'
import EnvironmentsView from '../views/EnvironmentsView.vue'
import PrintAdversary from '../components/utilComponents/printAdversary.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/adversaries', name: 'Adversaries', component: AdversariesView },
  { path: '/environments', name: 'Environments', component: EnvironmentsView },
  { path: '/printAdversaries', name: 'PrintAdversaries', component: PrintAdversary}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
