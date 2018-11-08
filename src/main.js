// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api.js'

// style样式引用
import './assets/style/commonStyle.less'

// 加载自定义公共组件
import components from './components/' 
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
  Vue.component(`v${name}`, components[key]);
})


// vux基础组件引用
import { XButton,XInput,Group,Flexbox, FlexboxItem } from 'vux'
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

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
