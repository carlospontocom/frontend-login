import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeViews.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesViews.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundViews.vue'),
    },
  ],
})

export default router
