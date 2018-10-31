<template>
    <div class="login">
        <div style="position:relative">
            <img :src="topImg" alt="logoBackground" class="img">
            <img :src="logoImg" alt="logo" class="logo">
        </div>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的账号"></x-input>
                <x-input placeholder="请输入您的密码"></x-input>
                <div class="resetPassword">
                    <a href="#">忘记密码?</a>
                    <span>/立即注册</span>
                </div>
                <div class="loginButton"><x-button :gradients="['#3237a6', '#7119d4']" round>立刻登入</x-button></div>
            </group>
            <div class="externLink">
                <img :src="qqImg" alt="qq">
                <img :src="sinaImg" alt="sina" class="rightImg">
                <img :src="wechatImg" alt="wechat" class="rightImg">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Login',
    data() {
        return {
            topImg : require("../assets/image/login/top@3x.png"),
            logoImg : require("../assets/image/login/logo.png"),
            qqImg : require("../assets/image/login/qq@3x.png"),
            sinaImg : require("../assets/image/login/sina@3x.png"),
            wechatImg : require("../assets/image/login/wechat@3x.png")
        }
    }
}
</script>
<style scoped>
.login {
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
}
.externLink > img {
    width: 50px;
    height: 50px;
}
.rightImg {
    margin-left: 16vw;
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
}

</style>


