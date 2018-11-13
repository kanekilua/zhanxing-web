export default {
    namespaced: true,
    state : {
        phone : '',
        captcha : '',
        password : ''
    },
    mutations :{
        updatePhone (state,value) {
            state.phone = value;
        },
        updateCaptcha (state,value) {
            state.captcha = value;
        },
        updatePassword (state,value) {
            state.password = value;
        },
        clear (state) {
            state.phone = "";
            state.captcha = "";
            state.password = "";
        }
    },
    actions : {
        getCaptcha ({state},vue) {
            let postData = {mobile : state.phone};
            vue.$http ({
                method : 'POST',
                url : '/register',
                data : postData
            })
            .then(function (result) {
                let json = result.data;
                if(json.code === "success") {
                }else {
                    vue.$vux.toast.text(json.msg,'top');
                }
            })
            .catch(function (err) {
                vue.$vux.toast.text('' + err,'top');
            });
        },
        register ({commit,state},vue) {
            const SUBMIT_EVENT = 'register';
            let postData = {
                mobile : state.phone,
                password : state.password,
                captcha : state.captcha,
                event : SUBMIT_EVENT
            };
            vue.$http ({
                method : 'POST',
                url : '/submit',
                data : postData
            })
            .then(function (result) {
                let json = result.data;
                if(json.code === "success") {
                    commit('UPDATE_LOGIN_ACCOUNT',state.phone,{root:true});
                    vue.$jump('birth');
                }else {
                    vue.$vux.toast.text(json.msg,'top');
                }
            })
            .catch(function (err) {
                vue.$vux.toast.text('' + err,'top');
            });
        }
    }
}