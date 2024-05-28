import { createMemoryHistory, createRouter } from 'vue-router'

import Test from '../components/Test.vue'
import Doashboard from '../components/Dashboard.vue'

const routes = [
  { path: '/', component: Test },
  { path: '/dashboard', component: Doashboard },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;