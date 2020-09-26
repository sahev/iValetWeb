import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Signup from '../components/Signup.vue';
import Forgot from '../pages/Forgot.vue';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

// function isLogged() {
//   const token = localStorage.getItem('token');

//   if (token) {
//     return true;
//   }
//   return false;
// }

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
