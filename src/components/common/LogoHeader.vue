<template>
    <div class="topImg">
        <div class="logoImg"></div>
    </div>
</template>
<script>
export default {
    name : "LogoHeader"
}
</script>
<style lang="less" scoped>
.topImg {
    width: 100%;
    height: 443/75rem;
    background: url('../../assets/image/logo-header/top@2x.png') no-repeat center center / 100% 100%;
    position:relative
}
.logoImg{
    width: 225/75rem;
    height: 225/75rem;
    background: url('../../assets/image/logo-header/logo.png') no-repeat center center / 100% 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 203/75rem;
}
</style>


