<template>
    <div class= "welcome" :style="welcome">123</div>
</template>
<script>
export default {
    name : 'welcome',
    data() {
        return {
            welcome : {
                backgroundImage: "url(" + require("../assets/image/welcome/img.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto"
            }
        }
    }
}
</script>
<style scoped>

</style>


