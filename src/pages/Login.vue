<template>
    <div class="login">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的账号" v-model="account"></x-input>
                <x-input placeholder="请输入您的密码" v-model="password"></x-input>
                <div class="resetPassword">
                    <span :style="{color:resetPwdColor}" @touchstart="resetStyleChange" @click="$jump('resetPwd')">忘记密码?</span>
                    <span>/</span>
                    <span :style="{color:registerColor}" @touchstart="registerStyleChange"  @click="$jump('register')">立即注册</span>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="login">立刻登入</x-button>
            </group>
            <div class="externLink">
                <img src="../assets/image/login/qq@3x.png" alt="qq">
                <img src="../assets/image/login/sina@3x.png" alt="sina">
                <img src="../assets/image/login/wechat@3x.png" alt="wechat">
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';

export default {
    name : 'Login',
    data() {
        return {
            account : "",
            password : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            resetPwdColor : global.INPUTCOLOR,
            registerColor :  global.INPUTCOLOR
        }
    },
    methods : {
        ...mapMutations (['updateLoginAccount']),
        resetStyleChange : function() {
            this.resetPwdColor = global.LINKCOLOR;
        },
        registerStyleChange : function () {
            this.registerColor = global.LINKCOLOR;
        },
        login :function () {
            let loginData = {
                account : this.account,
                password : this.password
            };
            this.$http.post('/login',loginData,this.loginSuccess,null);
        },
        loginSuccess : function(result) {
            this.updateLoginAccount(this.account);
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('birth');
        }
    }
}
</script>
<style lang="less" scoped>
.form {
    .loginForm();
    .resetPassword {
        .flex-end();
        font-size: 24/75rem;
        margin-top : 30/75rem;
        color : @inputColor;
    }
    & /deep/ weui-btn {
        margin-top : 75/75rem;
    }
    .externLink {
        margin-top : 80/75rem;
        .flex-between();
        img {
            height: 88/75rem;
            width: 88/75rem;
        }
    }
}
</style>


