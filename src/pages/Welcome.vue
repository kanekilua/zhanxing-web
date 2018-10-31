<template>
    <div class="welcome" :style="background">
        <div class="buttonGroup">
            <flexbox>
                <flexbox-item><x-button :gradients="['#3237a6', '#7119d4']" link="login">登入</x-button></flexbox-item>
                <flexbox-item><x-button class="signupButton" link="register">注册</x-button></flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
import { Flexbox,FlexboxItem } from 'vux'
export default {
    name : 'welcome',
    data() {
        return {
            background : {
                backgroundImage: "url(" + require("../assets/image/welcome/img@3x.png") + ")",
                backgroundRepeat: "no-repeat"
            }
        }
    },
    components: {
        Flexbox,
        FlexboxItem
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
</style>


