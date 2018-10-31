<template>
    <div class="header">
        <div class="title">{{title}}</div>
        <div class="backIcon" @click="back">
            <x-icon type="ios-arrow-left" size="22"></x-icon>
        </div>
    </div>
</template>
<script>
export default {
    name : 'TitleHeader',
    props : ['title'],
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
    text-align: center;
    position: relative;
    height: 8vw;
    border-bottom: 1px #eeeeee solid;
}
.backIcon {
    width: 22px;
    height: 22px;
    background-color: #7119d4;
    border-radius: 50%;
    position:absolute;
    margin-top: 3px; 
}
.title {
    margin:0 auto;
    width: calc(100% - 8vw);
    position:absolute;
}
.header >>> .vux-x-icon {
    fill: white;
}
</style>


