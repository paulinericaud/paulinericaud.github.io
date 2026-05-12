import { createRouter, createWebHistory } from 'vue-router'
import Projects from './components/Projects.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Projects,
    },
  ],
})

export default router
