// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api.js'

// css引用
import './assets/style/commonCss.css'
import './assets/style/font.css'

// vux基础组件引用
import { XButton } from 'vux'
import { XInput } from 'vux'
import { Group } from 'vux'
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.component('group', Group)


Vue.config.productionTip = false;
Vue.prototype.$http =api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
