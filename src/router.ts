import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/'+ (localStorage.getItem('lang') || "en") +'/profile',
    },
    /*   PROFILE   */
    {
      path: '/en/profile',
      name: 'en-profile',
      component: () => import("@/components/en/Profile.vue"),
    },
    {
      path: '/fr/profile',
      name: 'fr-profile',
      component: () => import("@/components/fr/Profile.vue"),
    },
    /*   PROJECTS   */
    {
      path: '/en/projects',
      name: 'en-projects',
      component: () => import("@/components/en/Projects.vue"),
    },
    {
      path: '/fr/projects',
      name: 'fr-projects',
      component: () => import("@/components/fr/Projects.vue"),
    },
    /*    404    */
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import("@/components/404.vue"),
    },
  ],
})

export default router
