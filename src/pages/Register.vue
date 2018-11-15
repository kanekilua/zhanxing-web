<template>
    <div class="register">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" v-model="phone" keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的验证码" v-model="captcha" :max="4" type="number">
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" v-model="password" :min="8" :max="18" type="password"></x-input>
                <div class="userAgreement">
                    <check-icon :value.sync="checkUserAgreement">我已阅读并同意<router-link to="userAgreement">《注册服务协议》</router-link></check-icon>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="register">立刻注册</x-button>
            </group>
        </div>
    </div>
</template>
<script>
import {mapMutations } from 'vuex';
import { CheckIcon } from 'vux';

export default {
    name : 'Register',
    data() {
        return {
            phone : "",
            captcha : "",
            password : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            checkUserAgreement : false
        }
    },
    components: {
        CheckIcon
    },
    methods : {
        ...mapMutations (['updateLoginAccount']),
        getCaptcha : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            let postData = {mobile : this.phone};
            this.$http.post('/register',postData,null,null,null);
        },
        register : function () {
            if(!this.checkUserAgreement) {
                this.$vux.toast.text(global.CHECK_TIP,'top');
                return;
            }
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.$utils.checkCaptcha(this.captcha,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.password,this)) {
                return;
            }
            let postData = {
                mobile : this.phone,
                password : this.password,
                captcha : this.captcha,
                event : 'register'
            };
            this.$http.post('/submit',postData,null,registerSuccess,null);
        },
        registerSuccess : function () {
            this.updateLoginAccount(this.phone);
            this.$jump('birth');
        }
    }
}
</script>
<style lang="less" scoped>
.form {
    .loginForm();
    .weui-cell /deep/ .weui-btn {
        margin-top: 0;
        height: 60/75rem;
        font-size: 28/75rem;
    }
    .userAgreement {
        font-size: 24/75rem;
        margin-top : 24/75rem;
        /deep/ .weui-icon-circle {
            font-size: 25/75rem;
        }
        /deep/ .weui-icon-success {
            font-size: 25/75rem;
            color: @checkBackGroud;
        }
        /deep/ .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
            color: @checkBackGroud;
        }
        /deep/ .vux-check-icon > span {
            color: @inputColor;
        }
        a:link,a:visited  {
            color: @inputColor;
        }
        a:hover,a:active {
            color: @linkColor;
        }
    }
}
</style>


