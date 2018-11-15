<template>
    <div class="fortune-wrap">
       <div class="user-message-box">
           <img :src="avatar" alt="用户头像" class="avatar">
           <div class="user-message">
               <div class="user-message-top">
                   <div>名字：{{userName}}</div>
                   <div class="switchUser">
                       <div>切换用户</div><i></i>
                   </div>
               </div>
               <div class="user-message-bottom"> 生辰八字： {{birthday}}</div>
           </div>
       </div>
        <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in list" :key="index">
                <keep-alive>
                    <component :is="item"></component>
                </keep-alive>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import TodayFortune from './TodayFortune';
import MonthFortune from './MonthFortune';
import YearFortune from './YearFortune';

export default {
    components: {
        TodayFortune,
        MonthFortune,
        YearFortune
    },
    computed : {
        ...mapState ('fortune',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        }
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
    mounted() {
        if(this.navIndex != 0) {
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },
    data () {
        return {
            avatar: require('../assets/image/fortune/avatar@2x.png'),
            userName: "卿大海",
            birthday: "1887年11月9日凌晨1:00",
            navList: ["今日运程","本月运程","2019运程"],
            list: [TodayFortune,MonthFortune,YearFortune,],
            swiperOption : { initialSlide: this.navIndex }
        }
    },
    methods : {
        ...mapMutations('fortune',['updateNavIndex']),
    }
}
</script>

<style lang="less" scoped>
.fortune-wrap{
    padding: 40/75rem;
    .user-message-box{
        .flex-start();
        .avatar{
            width: 132/75rem;
            height: 132/75rem;
            .round(50%);
            margin-right: 41/75rem;
        }
        .user-message{
            width: 65%;
            .user-message-top{
                .flex-between();
                font-size: 26/75rem;
                margin-bottom: 18/75rem;
                .switchUser{
                    .flex-start();
                    & > i {
                        display: inline-block;
                        width: 43/75rem;
                        height: 44/75rem;
                        background: url('../assets/image/fortune/switch-user@2x.png') no-repeat center center / 100% 100%;
                        margin-left: 16/75rem;
                    }
                }
            }
            .user-message-bottom{
                    font-size: 26/75rem;
            }
        }
    }
}
</style>

