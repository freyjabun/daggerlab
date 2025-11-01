import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdversariesView from '../views/AdversariesView.vue'
import EnvironmentsView from '../views/EnvironmentsView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/adversaries', name: 'Adversaries', component: AdversariesView },
  { path: '/environments', name: 'Environments', component: EnvironmentsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
