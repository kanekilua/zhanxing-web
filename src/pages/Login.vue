<template>
    <div class="login">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的账号"></x-input>
                <x-input placeholder="请输入您的密码"></x-input>
                <div class="resetPassword">
                    <span :style="resetPwdStyle" @touchstart="resetStyleChange"  @touchend="jump('resetPwd')" @click="resetStyleChange">忘记密码?</span>
                    <span style="color:#dbdbdb" >/</span>
                    <span :style="registerStyle" @touchstart="registerStyleChange"  @touchend="jump('register')">立即注册</span>
                </div>
                <div class="loginButton"><x-button :gradients="['#3237a6', '#7119d4']">立刻登入</x-button></div>
            </group>
            <div class="externLink">
                <img :src="qqImg" alt="qq" style="">
                <div style="flex:1;"></div>
                <img :src="sinaImg" alt="sina">
                <div style="flex:1;"></div>
                <img :src="wechatImg" alt="wechat">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Login',
    data() {
        return {
            qqImg : require("../assets/image/login/qq@3x.png"),
            sinaImg : require("../assets/image/login/sina@3x.png"),
            wechatImg : require("../assets/image/login/wechat@3x.png"),
            resetPwdStyle : 'color:#dbdbdb',
            registerStyle : 'color:#dbdbdb'
        }
    },
    methods : {
        resetStyleChange : function() {
            this.resetPwdStyle = "color:#10489B;"
        },
        registerStyleChange : function () {
            this.registerStyle = "color:#10489B;"
        },
        jump : function(path) {
            this.$router.push(path);
        }
    }
}
</script>
<style scoped>
.login {
    overflow: hidden;
}
.form {
    margin-top: 65vw;
    width: 75vw;
    margin-left: auto;
    margin-right: auto;
}
.resetPassword {
    float: right;
    font-size: 14px;
    margin-top : 15px;
}
.loginButton {
    padding-top : 19vw;
}
.externLink {
    margin-top : 10vw;
    display: flex;
}
.externLink >>> img {
    height: 50px;
    flex:1;
    max-width: 50px;
    min-width: 50px;
}
.form >>> .weui-cell {
    padding: 10px 0 0 0;
}
.weui-cell >>> .weui-input {
    height: 3.411765em;
    border-bottom: 1px solid #dbdbdb;
    font-size: 15px;
}
.loginButton >>> .weui-btn {
    border-radius: 25px;
    font-size: 14px;
    height: 40px;
}
</style>


