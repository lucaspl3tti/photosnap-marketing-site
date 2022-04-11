import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }

    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/stories',
      name: 'stories',
      component: () => import('../views/StoriesView.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../views/FeaturesView.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue')
    },
  ]
})

export default router
