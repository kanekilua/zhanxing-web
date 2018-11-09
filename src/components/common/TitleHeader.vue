<template>
    <div class="header">
        <div @click="back"><img src="../../assets/image/title-header/icon.png" alt="logoBackground" class="icon"></div>
        <div class="title">{{title}}</div>
        <div class="icon"></div>
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
<style lang="less" scoped>
.header {
    .flex-between();
    height: 88/75rem;
    padding:0 32/75rem 0 32/75rem;
    border-bottom: 1px #eee solid;
    font-weight: bold;
    font-size: 34/75rem;
    color : #333;
    .icon {
        width: 44/75rem;
        height: 44/75rem;
    }
}
</style>


