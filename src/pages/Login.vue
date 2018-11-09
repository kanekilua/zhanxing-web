<template>
    <div class="login">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的账号"></x-input>
                <x-input placeholder="请输入您的密码"></x-input>
                <div class="resetPassword">
                    <span :style="{color:resetPwdColor}" @touchstart="resetStyleChange" @click="$jump('resetPwd')">忘记密码?</span>
                    <span>/</span>
                    <span :style="{color:registerColor}" @touchstart="registerStyleChange"  @click="$jump('register')">立即注册</span>
                </div>
                <div class="loginButton"><x-button :gradients="[this.gradientStart, this.gradientEnd]" link="birth">立刻登入</x-button></div>
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
import {mapState} from 'vuex';

export default {
    name : 'Login',
    computed :{
        ...mapState(['inputColor','linkColor','gradientStart','gradientEnd'])
    },
    mounted : function (){
        this.resetPwdColor = this.inputColor;
        this.registerColor = this.inputColor;
    },
    data() {
        return {
            resetPwdColor : '',
            registerColor : ''
        }
    },
    methods : {
        resetStyleChange : function() {
            this.resetPwdColor = this.linkColor;
        },
        registerStyleChange : function () {
            this.registerColor = this.linkColor;
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
    .loginButton {
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


