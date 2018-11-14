<template>
    <div class="tab-bar">
        <div class="tab-bar-list">
            <div class="tab-bar-item" v-for="(tab,index) in tabs" :key="index" @click="$jump(tab.route);replaceIco(tab.name)">
                <img :src="isSelect === tab.name ? tab.icoUrlActive : tab.icoUrl" class="ico master-ico" :class="setClass(index)">
                <div class="tab-title">{{tab.name}}</div>    
            </div>        
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            isSelect: "首页",
            tabs: [
                {
                    icoUrl: require("../../assets/image/tab-bar/home-ico@2x.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/home-ico-active@2x.png"),
                    name: "首页",
                    route: "/main/home"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/master-ico@2x.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/master-ico-active@2x.png"),
                    name: "大师",
                    route: "/main/master"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/fortune-ico@2x.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/fortune-ico@2x.png"),
                    name: "运势",
                    route: "/main/fortune"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/predict-ico-@2x.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/predict-ico-active@2x.png"),
                    name: "测算",
                    route: "/main/predict"
                },
                {
                    icoUrl:  require("../../assets/image/tab-bar/mine-ico@2x.png"),
                    icoUrlActive: require("../../assets/image/tab-bar/mine-ico-active@2x.png"),
                    name: "我的",
                    route: "/main/mine"                    
                }
            ]
        }
    },
    methods: {
        // 动态赋值class,目的是为每个ico设置具体的样式
        setClass(index) {
            let obj = {tabIco: true}
            obj[`tabIco${index+1}`] = true
            return obj
        },
        replaceIco: function(name) {
            this.isSelect = name
            this.$emit("listenToChildEvent",this.isSelect)
        }
    }
}
</script>

<style lang="less">
    .tab-bar{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99;
        background: #fff;
        .tab-bar-list{
            width: 100%;
            height: 110/75rem;
            .flex-around();
            .tab-bar-item{
                .flex(1);
                .flex-col();
                .tabIco1,.tabIco2,.tabIco4,.tabIco5{
                    width: 44/75rem;
                    height: 44/75rem;
                    margin-bottom: 10/75rem;
                }
                .tabIco3{
                    width: 88/75rem;
                    height: 88/75rem;
                    margin-bottom: 10/75rem;
                }
            }
            .tab-bar-item:nth-child(3){
                .translate(0,-20/75rem)               
            }
        }
    }
</style>
