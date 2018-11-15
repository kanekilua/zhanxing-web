export default {
    namespaced: true,
    state: {
        navIndex : 0
    },
    mutations :{
        updateNavIndex (state,value) {
            state.navIndex = value;
        }
    }
}