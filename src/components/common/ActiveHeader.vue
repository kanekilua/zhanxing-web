<template>
    <nav :class="isDown?'down-nav':'up-nav'"  v-touch:down="downNav" v-touch:up="upNav">
        <h2 class="nav-title" >{{navTitle}}</h2>
    </nav>
</template>

<script>
export default {
    data () {
        return{
            isDown: true
        }
    },
    props: ['navTitle'],
    methods: {
        downNav: function() {
           this.data.isDown = false
        },
        upNav: function () {
            this.data.isDown = true
        }
    }
}
</script>

<style lang="less" scoped>
    .nav,
    .down-nav{
        width: 100%;
        height: 160/75rem;
        line-height: 140/75rem;
        background: url('../../assets/image/birth/nav2x.png') no-repeat center center / 100% 100%;
        .nav-title{
            color: #fff;
            margin-left: 40/75rem;
            font-size: 40/75rem;
        }
    }
</style>

