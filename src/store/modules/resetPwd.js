export default {
    namespaced: true,
    state : {
        phone : '',
        captcha : '',
        password : '',
        passwordComfirm : ''
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
        updatePasswordComfirm (state,value) {
            state.passwordComfirm = value;
        },
        clear (state) {
            state.phone = "";
            state.captcha = "";
            state.password = "";
            state.passwordComfirm = "";
        }
    },
    actions : {
        getCaptcha ({state},vue) {
            let postData = {mobile : state.phone};
            vue.$http ({
                method : 'POST',
                url : '/changepwd',
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
        resetPwd ({state},vue) {
            const SUBMIT_EVENT = 'changepwd';
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
                    vue.$vux.toast.text(json.msg,'top');
                    vue.$jump('login');
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