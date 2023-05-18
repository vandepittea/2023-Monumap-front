import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getMonumentById } from '../api/monumentApi.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/monument/:id',
      name: 'MonumentDetail',
      component: () => import ('../components/MonumentDetailComponent.vue'),
      props: route => ({monument: getMonumentById(route.params.id) })
    },
    
    {
      path: '/newMonument',
      name: 'newMonument',
      component: () => import('../views/AddMonumentView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
  ]
})

export default router
