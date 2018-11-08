import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ResetPwd from '@/pages/ResetPwd'
import UserAgreement from '@/pages/UserAgreement'
import Birth from '@/pages/Birth'

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
      path : '/register',
      name : 'register',
      component : Register
    },
    {
      path : '/resetPwd',
      name : 'resetPwd',
      component : ResetPwd
    },
    {
      path : '/userAgreement',
      name : 'userAgreement',
      component : UserAgreement
    },
    {
      path : '/',
      name : 'birth',
      component : Birth
    }
  ]
})
