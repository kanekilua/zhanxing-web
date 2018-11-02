<template>
    <div class="welcome" :style="background">
        <div class="buttonGroup">
            <flexbox>
                <flexbox-item><x-button :gradients="loginGds" :style="loginStyle" @touchstart.native="loginStyleChange"  @touchend.native="jump('login')" >登入</x-button></flexbox-item>
                <flexbox-item><x-button :gradients="registerGds" :style="registerStyle"  @touchstart.native="registerStyleChange"  @touchend.native="jump('register')"> 注册</x-button></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
export default {
    name : 'welcome',
    data() {
        return {
            background : {
                backgroundImage: "url(" + require("../assets/image/welcome/img@3x.png") + ")",
                backgroundRepeat: "no-repeat"
            },
            loginGds : ['#ffffff', '#ffffff'],
            registerGds : ['#ffffff', '#ffffff'],
            loginStyle: "color: #10489B;",
            registerStyle: "color: #10489B;"
        }
    },
    methods: {
        loginStyleChange : function (e) {
            this.loginGds = ['#3237a6', '#7119d4'];    
            this.loginStyle = "color: #ffffff";
        },
        registerStyleChange : function (e) {
            this.registerGds = ['#3237a6', '#7119d4'];    
            this.registerStyle = "color: #ffffff";
        },
        jump : function(path) {
            this.$router.push(path);
        }
    }
}
</script>
<style scoped>
.welcome{
    width: 100% ;
    height: 100%;
    background-size:cover;
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover;
    /* 防止因为margin-top造成的css hack*/
    overflow: hidden;
}
.signupButton {
    color: #10489B;
}
.buttonGroup {
    width: calc(100% - 30px) ;
    margin-left: auto;
    margin-right: auto;
    margin-top : 78vh;
}
.buttonGroup >>> .weui-btn {
    border-radius: 10px;
    height: 40px;
    font-size: 14px;
}
</style>


