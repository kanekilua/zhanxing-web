<template>
    <div class="swiper-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                    <keep-alive>
                        <component :is="item.component"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TodayFortune from '../../pages/TodayFortune';
import MonthFortune from '../../pages/MonthFortune';
import YearFortune from '../../pages/YearFortune';
import Swiper from '../../../static/js/swiper.min';
import '../../../static/css/swiper.min.css';
import {mapState,mapMutations  } from 'vuex';

export default {
    computed : {
        ...mapState('nav',[
            'nowIndex'
        ])
    },
    components: {
        TodayFortune,
        MonthFortune,
        YearFortune,
    },
    data() {
        return {
            list: [
                {path: '/todayFortune', component: TodayFortune},
                {path: '/monthFortune', component: MonthFortune},
                {path: '/yearFortune', component: YearFortune},
            ]
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            // 设定初始化时slide的索引
            initialSlide: this.nowIndex     
        });
        mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
            // 左右滑动时将当前slide的索引发送到nav组件
            this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
            // let index = mySwiper.activeIndex;
            // this.udpateNowIndex(index,this);
            // let href = index === 0 ? 'todayFortune' : index === 1 ? 'monthFortune' : index === 2 ? 'yearFortune' : '';
            // this.$router.push(href);
        });
        // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
        this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
            mySwiper.slideTo(index, 0, false);
        });
    },
    methods: {
        ...mapMutations('nav',['udpateNowIndex']),
    }
}
</script>

