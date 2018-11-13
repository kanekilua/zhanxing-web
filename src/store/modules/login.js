export default {
    namespaced: true,
    state : {
        account : "",
        password : ""
    },
    mutations :{
        updateAccount  (state,value) {
            state.account = value;
        },
        updatePassword (state,value) {
            state.password = value;
        },
        clear (state) {
            state.account = "",
            state.password = ""
        }
    },
    actions: {
        login ({commit,state},vue) {
            let loginData = {
                account : state.account,
                password : state.password
            };
            vue.$http({
                method : 'POST',
                url : '/login',
                data : loginData
            })
            .then(function (result) {
                let json = result.data;
                if(json.code === "success") {
                    commit('updateLoginAccount',state.account,{root:true});
                    localStorage.setItem(global.APP_TOKEN,json.data.token);
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