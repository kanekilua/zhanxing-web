<template>
    <nav class="active-nav">
        <h2 class="nav-title">{{navTitle}}</h2>
    </nav>
</template>

<script>
export default {
    props: ['navTitle']
}
</script>

<style lang="less">
    .active-nav{
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

