// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引用公共样式style
import './assets/style/commonStyle.less'

// 引用公共js
import api from './api/api.js'
import utils from './assets/js/utils'
import './assets/js/global.js'
Vue.prototype.$http =api;
Vue.prototype.$utils = utils;

// 引用外部js
import rem from '../static/js/rem'


// 加载自定义公共组件
import components from './components/' 
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
  Vue.component(`v${name}`, components[key]);
})

// vux基础组件引用
import { XButton,XInput,Group,Flexbox, FlexboxItem, ToastPlugin } from 'vux'
Vue.component('x-button', XButton);
Vue.component('x-input', XInput);
Vue.component('group', Group);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.use(ToastPlugin);

// vue2.0移动设备指令
import touch from 'vue-directive-touch'
Vue.use(touch)

// 引用swiper插件
import {swiperSlide,swiper } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);

Vue.config.productionTip = false;

// 自定义路由跳转方法
Vue.prototype.$jump = function(index) {
  this.$router.push(index);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
  }
})