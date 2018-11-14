import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import nav from './module/nav'

export default new vuex.Store ({
    state : {
        loginAccount : ''
    },
    modules : {
        nav : nav
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})