import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store ({
    state : {
        loginAccount : ''
    },
    modules : {
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})