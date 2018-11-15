<template>
    <div class="resetPwd">
        <v-title-header :title='title'></v-title-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" v-model='phone' keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的验证码" v-model='captcha' :max="4" type="number" >
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" v-model='password' :min="8" :max="18" type="password"></x-input>
                <x-input placeholder="请再次确认您的密码" v-model='passwordComfirm' :min="8" :max="18" type="password" :equal-with="password"></x-input>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="resetPwd">确认</x-button>
            </group>
        </div>
    </div>
</template>
<script>
import {mapMutations } from 'vuex';
export default {
    name : 'ResetPwd',
    data() {
        return {
            phone : "",
            captcha : "",
            password : "",
            passwordComfirm : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            title : '忘记密码'
        }
    },
    methods : {
        getCaptcha : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            let postData = {mobile : this.phone};
            this.$http.post('/changepwd',postData,null,null,null);
        },
        resetPwd : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.$utils.checkCaptcha(this.captcha,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.password,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.passwordComfirm,this)) {
                return;
            }
            let postData = {
                mobile : this.phone,
                password : this.password,
                captcha : this.captcha,
                event : 'changepwd'
            };
            this.$http.post('/submit',postData,null,this.resetPwdSuccess,null);
        },
        resetPwdSuccess : function () {
            this.$vux.toast.text(json.msg,'top');
            this.$jump('login');
        }
    }
}
</script>
<style lang="less" scoped>
.form {
    .loginForm();
}
.weui-cell /deep/ .weui-btn {
    margin-top: 0;
    height: 60/75rem;
    font-size: 28/75rem;
}
</style>