<template>
    <div class="resetPwd">
        <v-title-header :title='title'></v-title-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号"></x-input>
                <x-input placeholder="请输入您的验证码">
                    <x-button slot="right" :gradients="['#3237a6', '#7119d4']" mini>获取验证码</x-button>
                </x-input>
                <x-input placeholder="请设置您的密码"></x-input>
                <x-input placeholder="请再次确认您的密码"></x-input>
                <div class="confirmButton"><x-button :gradients="['#3237a6', '#7119d4']">确认</x-button></div>
            </group>
        </div>
    </div>
</template>
<script>
export default {
    name : 'ResetPwd',
    data() {
        return {
            title : '忘记密码'
        }
    }
}
</script>
<style scoped>
.resetPwd {
    overflow: hidden;
}
.form {
    width: 75vw;
    margin : 0 auto;
    margin-top : 10vw;
}
.confirmButton {
    margin-top: 12vw;
}
.header >>> .vux-x-icon {
    fill: white;
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
</style>