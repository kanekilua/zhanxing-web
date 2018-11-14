export default {
    namespaced: true,
    state: {
        nowIndex : 0
    },
    getters : {
        navRouter (state) {
            return state.nowIndex === 0 ? 'todayFortune' : state.nowIndex === 1 ? 'monthFortune' : state.nowIndex === 2 ? 'yearFortune' : '';
        }
    },
    mutations: {
        udpateNowIndex (state,value) {
            state.nowIndex = value;
        }
    }
}