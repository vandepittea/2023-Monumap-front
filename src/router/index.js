import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import MonumentDetail from '../views/MonumentDetailView.vue';
import NewMonument from '../views/AddMonumentView.vue';
import UpdateMonument from '../views/UpdateMonumentView.vue';
//import { getMonumentById } from '../api/monumentApi.js' TODO: nog wegdoen!
import MonumentService from '../services/MonumentService';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/new-monument',
    name: 'NewMonument',
    component: NewMonument
  },
  {
    path: '/update-monument/:id',
    name: 'UpdateMonument',
    component: () => UpdateMonument,
  //  props: route => ({formData: getMonumentById(route.params.id) }) //TODO: werkt dit? 
    props: route => ({ formData: new MonumentService().getMonumentById(route.params.id) }) //TODO: werkt dit?

  },
  {
    path: '/monument/:id',
    name: 'MonumentDetail',
    component: () => MonumentDetail,
    //props: route => ({formData: MonumentService.getMonumentById(route.params.id) }) //TODO: werkt dit? 
    props: route => ({ formData: new MonumentService().getMonumentById(route.params.id) }) //TODO: werkt dit?
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;