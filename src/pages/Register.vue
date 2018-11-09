<template>
    <div class="register">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号"></x-input>
                <x-input placeholder="请输入您的验证码">
                    <x-button slot="right" :gradients="[this.gradientStart, this.gradientEnd]" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码"></x-input>
                <div class="userAgreement">
                    <check-icon :value.sync="checkUserAgreement">我已阅读并同意<router-link to="userAgreement">《注册服务协议》</router-link></check-icon>
                </div>
                <div class="registerButton"><x-button :gradients="[this.gradientStart, this.gradientEnd]">立刻注册</x-button></div>
            </group>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations } from 'vuex';
import { CheckIcon } from 'vux';

export default {
    name : 'Register',
    computed :{
        ...mapState(['gradientStart','gradientEnd'])
    },
    data() {
        return {
            checkUserAgreement : false
        }
    },
    components: {
        CheckIcon
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


