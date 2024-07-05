import { createRouter, createWebHistory } from 'vue-router'
import RegistrationView from "@/views/RegistrationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('@/views/AuthView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    }
  ]
})

export default router
