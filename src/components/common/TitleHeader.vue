<template>
    <div class="header">
        <div class="title">{{title}}</div>
        <div @click="back"><img :src="backIcon" alt="logoBackground" class="img"></div>
    </div>
</template>
<script>
export default {
    name : 'TitleHeader',
    props : ['title'],
    data () {
        return {
            backIcon : require("../../assets/image/title-header/icon.png"),
        }
    },
    methods : {
        back : function () {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.userAgreement {
    overflow: hidden;
}
.header {
    padding: 3vw 4vw 3vw 4vw;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    height: 8vw;
    border-bottom: 1px #eeeeee solid;
    color : #333333;
}
.img {
    width: 22px;
    height: 22px;
    margin-top: 3px;
    position: relative;
}
.title {
    margin:0 auto;
    width: calc(100% - 8vw);
    position:absolute;
    text-align: center;
}
.header >>> .vux-x-icon {
    fill: white;
}
</style>


