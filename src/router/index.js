import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/welcome',
      name : 'welcome',
      component : Welcome
    },
    {
      path : '/login',
      name : 'login',
      component : Login
    },
    {
      path : '/',
      name : 'register',
      component : Register
    }
  ]
})
