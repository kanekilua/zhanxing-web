<template>
    <div class="register">
        <div style="position:relative">
            <img :src="topImg" alt="logoBackground" class="img">
            <img :src="logoImg" alt="logo" class="logo">
        </div>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号"></x-input>
                <x-input placeholder="请输入您的验证码">
                    <x-button slot="right" :gradients="['#3237a6', '#7119d4']" mini>发送验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码"></x-input>
                <div class="userAgreement">
                    <check-icon :value.sync="checkUserAgreement">我已阅读并同意《注册服务协议》</check-icon>
                </div>
                <div class="registerButton"><x-button :gradients="['#3237a6', '#7119d4']" round>立刻注册</x-button></div>
            </group>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations } from 'vuex';
import { CheckIcon } from 'vux';

export default {
    name : 'Register',
    data() {
        return {
            topImg : require("../assets/image/login/top@3x.png"),
            logoImg : require("../assets/image/login/logo.png"),
            checkUserAgreement : false
        }
    },
    components: {
        CheckIcon
    }
}
</script>
<style scoped>
.register {
    overflow: hidden;
}
.img{
    width: 100vw;
    position: absolute;
}
.logo{
    width: 35vw;
    position: absolute;
    left: 33vw;
    top: 22vw;
}
.form {
    margin-top: 65vw;
    width: 75vw;
    margin-left: auto;
    margin-right: auto;
}
.registerButton {
    padding-top : 12vw;
}
.userAgreement {
    margin-top : 15px;
}
.form >>> .weui-cells {
    font-size : 14px;
}
.weui-cell >>> .weui-input {
    height: 3.411765em;
    border-bottom: 1px solid #dbdbdb;
    font-size: 15px;
}
.form >>> .weui-cell {
    padding: 10px 0 0 0;
}
.form >>> .weui-btn {
    border-radius: 25px;
}
.userAgreement >>> .weui-icon-circle {
    font-size: 17px;
}
.userAgreement >>> .weui-icon-success {
    font-size: 17px;
    color: #4333BF;
}
.userAgreement >>> .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
    color: #4333BF;
}
</style>


