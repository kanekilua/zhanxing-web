export default {
    state : {
        checkUserAgreement : false
    },
    mutations :{
        changeUserAgreement : function (state) {
            state.checkUserAgreement = !state.checkUserAgreement;
        }
    }
}