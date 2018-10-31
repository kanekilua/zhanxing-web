<template>
    <div style="position:relative">
        <img :src="topImg" alt="logoBackground" class="img">
        <img :src="logoImg" alt="logo" class="logo">
    </div>
</template>
<script>
export default {
    name : "LogoHeader",
    data() {
        return {
            topImg : require("../../assets/image/login/top@3x.png"),
            logoImg : require("../../assets/image/login/logo.png")
        }
    }
}
</script>
<style scoped>
.img{
    width: 100vw;
    position: absolute;
}
.logo{
    width: 35vw;
    position: absolute;
    left: 33vw;
    top: 22vw;
}
</style>


