<template>
    <div class="resetPwd">
        <v-title-header :title='title'></v-title-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" :value='phone' @input="updatePhone"></x-input>
                <x-input placeholder="请输入您的验证码" :value='captcha' @input="updateCaptcha">
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha($event.target.__vue__)" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" :value='password' @input="updatePassword"></x-input>
                <x-input placeholder="请再次确认您的密码" :value='passwordComfirm' @input="updatePasswordComfirm"></x-input>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="resetPwd($event.target.__vue__)">确认</x-button>
            </group>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions } from 'vuex';
export default {
    name : 'ResetPwd',
    computed :{
        ...mapState('resetPwd',['phone','captcha','password','passwordComfirm'])
    },
    data() {
        return {
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            title : '忘记密码'
        }
    },
    methods : {
        ...mapMutations ('resetPwd',['updatePhone','updateCaptcha','updatePassword','updatePasswordComfirm','clear']),
        ...mapActions('resetPwd',['getCaptcha','resetPwd'])
    },
    beforeDestroy () {
        this.clear();
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