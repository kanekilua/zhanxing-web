import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import login from "./modules/login"
import register from "./modules/register"
import resetPwd from "./modules/resetPwd"

export default new vuex.Store ({
    state : {
        loginAccount : ''
    },
    modules : {
        login : login,
        register : register,
        resetPwd : resetPwd
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})