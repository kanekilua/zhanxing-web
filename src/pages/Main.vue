<template>
    <div class="main">
        <v-active-header :navTitle="navTitle"></v-active-header>
        <router-view></router-view>
        <v-tab-bar></v-tab-bar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            navTitle: "首页"
        }
    }
}
</script>

<style>

</style>
