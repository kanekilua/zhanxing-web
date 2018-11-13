<template>
    <div class="welcome">
        <div class="buttonGroup">
            <x-button :gradients="loginGds" :style="{color:loginColor}" @touchstart.native="loginStyleChange"  @touchend.native="$jump('login')" >登入</x-button>
            <div></div>
            <x-button :gradients="registerGds" :style="{color:registerColor}"  @touchstart.native="registerStyleChange"  @touchend.native="$jump('register')">注册</x-button>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name : 'welcome',
    data() {
        return {
            loginGds : ['#fff', '#fff'],
            registerGds : ['#fff', '#fff'],
            loginColor : global.LINKCOLOR,
            registerColor : global.LINKCOLOR 
        }
    },
    methods: {
        loginStyleChange : function (e) {
            this.loginGds = [global.GRADIENT_START, global.GRADIENT_END];    
            this.loginColor = "#fff";
        },
        registerStyleChange : function (e) {
            this.registerGds = [global.GRADIENT_START, global.GRADIENT_END];    
            this.registerColor = "#fff";
        }
    }
}
</script>
<style lang="less" scoped>
.welcome{
    width: 100%;
    height: 100%;
    background: url("../assets/image/welcome/img@3x.png") no-repeat center center / 100% 100%;
    .buttonGroup {
        .flex-between();
        position: absolute;
        width: 95%;
        left: 0;
        right: 0;
        bottom: 187/75rem;
        margin : 0 auto;
        /deep/ .weui-btn {
            .round(10px);
            width: 48%;
            height: 116/75rem;
            font-size: 28/75rem;
        }
    }
}
</style>


