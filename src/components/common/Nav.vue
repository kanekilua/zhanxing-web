<template>
    <div class="nav">
        <ul class="nav-list">
            <li class="item" v-for="(item,index) in navList" :key="index" :class="{'active': nowIndex===index}" @click="tabClick(index)">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props : ['navList','nowIndex'],
    methods: {
        tabClick(index) {
            this.$emit('updateNavIndex',index);
        }
    }
}
</script>
<style lang="less" scoped>
.nav{
    margin-bottom: 20/75rem;
    .nav-list{
        width: 100%;
        overflow: hidden;
        .item{
            width: 20%;
            display: inline-block;
            text-align: center;
            height: 70/75rem;
            line-height: 70/75rem;
            margin-top: 20/75rem;
            font-size: 28/75rem;
            font-weight:400;
            opacity: 0.8;
            &.active{
                opacity: 1;
                border-bottom: 5/75rem solid @checkBackGroud;
            }
        }
        
    }
}
</style>