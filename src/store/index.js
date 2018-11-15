import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import fortune from "./module/fortune"

export default new vuex.Store ({
    state : {
        loginAccount : ''
    },
    modules : {
        fortune: fortune
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})