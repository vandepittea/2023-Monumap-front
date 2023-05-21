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
    props: route => ({ monumentId: route.params.id }),
  }
  // {
  //   path: '/monument/:id',
  //   name: 'MonumentDetail',
  //   component: () => MonumentDetail,
  //   //props: route => ({monument: MonumentService.getMonumentById(route.params.id) }) //TODO: wegdoen
  // //  // props: route => ({ monument: new MonumentService().getMonumentById(route.params.id) }) //TODO: werkt dit? 
  // }
  // {
  //   path: '/monument/:id',
  //   name: 'MonumentDetail',
  //   component: () => MonumentDetail,
  //   beforeEnter: (to, from, next) => {
  //     const monumentId = to.params.id;
  
  //     new MonumentService().getMonumentById(monumentId)
  //       .then(response => {
  //         console.log(response);
  //         if (response.data) {
  //           // Pass the fetched monument as a prop to the component
  //           console.log("response.data")
  //           console.log(response.data)
  //           to.props = { monument: response.data };
  //           next();
  //         } else {
  //           console.error('Failed to fetch monument data');
  //           next(false); // Prevent navigation
  //         }
  //       })
  //       .catch(error => {
  //         console.error('An error occurred while fetching monument data', error);
  //         next(false); // Prevent navigation
  //       });
  //   }
  // }

  // {
  //   path: '/monument/:id',
  //   name: 'MonumentDetail',
  //   component: MonumentDetail,
  //   props: true, // Enables route props
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       const monumentId = to.params.id;
  //       const response = await new MonumentService().getMonumentById(monumentId);
        
  //       if (response.data) {
  //         // Pass the fetched monument as a prop to the component
  //         console.log("response.data")
  //         console.log(response.data)
  //         next({ props: { monument: response.data } });
  //       } else {
  //         console.error('Failed to fetch monument data');
  //         next(false); // Prevent navigation
  //       }
  //     } catch (error) {
  //       console.error('An error occurred while fetching monument data', error);
  //       next(false); // Prevent navigation
  //     }
  //   }
  // }
  

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;