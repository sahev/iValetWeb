import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }    
  ]
})

export default router
