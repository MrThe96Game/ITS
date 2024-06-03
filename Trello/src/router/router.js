import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
