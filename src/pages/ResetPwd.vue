<template>
    <div class="resetPwd">
        <v-title-header :title='title'></v-title-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号"></x-input>
                <x-input placeholder="请输入您的验证码">
                    <x-button slot="right" :gradients="[this.gradientStart, this.gradientEnd]" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码"></x-input>
                <x-input placeholder="请再次确认您的密码"></x-input>
                <div class="confirmButton"><x-button :gradients="[this.gradientStart, this.gradientEnd]">确认</x-button></div>
            </group>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name : 'ResetPwd',
    computed :{
        ...mapState(['gradientStart','gradientEnd'])
    },
    data() {
        return {
            title : '忘记密码'
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