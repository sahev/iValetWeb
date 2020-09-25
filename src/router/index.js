import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Signup from '../components/Signup'
import Forgot from '../pages/Forgot'
import Home from '../pages/Home'
import alerts from '../components/alerts'


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
      path: '/forgot',
      name: 'forgot',
      component: Forgot
    },    
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: alerts,
      meta: {
        requiresAuth: false
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
