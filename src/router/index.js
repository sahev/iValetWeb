import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Signup from '../components/Signup'
import Home from '../pages/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({
        path: '/'
      })
    } else {
      next();
    }
  } else {
    next();
  }
})


export default router
