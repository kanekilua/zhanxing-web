<template>
    <nav class="nav" :class="navClass"  v-touch:down="downNav" v-touch:up="upNav">
        <h2 class="nav-title" >{{navTitle}}</h2>
    </nav>
</template>

<script>
export default {
    computed : {
        'navClass' () {
            return this.isDown?'down-nav':'up-nav';
        }
    },
    data () {
        return{
            isDown: true
        }
    },
    props: ['navTitle'],
    methods: {
        downNav: function() {
           this.isDown = true;
        },
        upNav: function () {
            this.isDown = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .nav{
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
    .up-nav{
        transform: translateY()
    }
</style>

