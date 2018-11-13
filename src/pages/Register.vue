<template>
    <div class="register">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" :value="phone" @input="updatePhone"></x-input>
                <x-input placeholder="请输入您的验证码" :value="captcha" @input="updateCaptcha">
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha($event.target.__vue__)" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" :value="password" @input="updatePassword"></x-input>
                <div class="userAgreement">
                    <check-icon :value.sync="checkUserAgreement">我已阅读并同意<router-link to="userAgreement">《注册服务协议》</router-link></check-icon>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="checkAndRegister($event.target.__vue__)">立刻注册</x-button>
            </group>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions } from 'vuex';
import { CheckIcon } from 'vux';

export default {
    name : 'Register',
    computed :{
        ...mapState('register',['phone','captcha','password'])
    },
    data() {
        return {
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            checkUserAgreement : false
        }
    },
    components: {
        CheckIcon
    },
    methods : {
        ...mapMutations ('register',['updatePhone','updateCaptcha','updatePassword','clear']),
        ...mapActions('register',['getCaptcha','register']),
        checkAndRegister : function (vue) {
            if(!this.checkUserAgreement) {
                this.$vux.toast.text(global.CHECK_TIP,'top');
                return;
            }
            this.register(vue);
        }
    },
    beforeDestroy () {
        this.clear();
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


