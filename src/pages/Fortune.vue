<template>
    <div class="fortune-wrap">
       <div class="user-message-box">
           <img :src="avatar" alt="用户头像" class="avatar">
           <div class="user-message">
               <div class="user-message-top">
                   <div>名字：{{userName}}</div>
                   <div class="switchUser">
                       <div>切换用户</div>
                       <i></i>
                   </div>
               </div>
               <div class="user-message-bottom">
                   生辰八字： {{birthday}}
               </div>
           </div>
       </div>

       <!-- <div class="fortune-nav">
           <router-link :to="{ path:'/main/fortune/todayFortune'}" tag="div" class="fortune-nav-item" active-class="navActive">今日运程</router-link>
           <router-link :to="{ path:'/main/fortune/monthFortune'}" tag="div" class="fortune-nav-item" active-class="navActive">本月运程</router-link>
           <router-link :to="{ path:'/main/fortune/yearFortune'}" tag="div" class="fortune-nav-item" active-class="navActive">2019运程</router-link>
       </div>
       <div v-touch:left ="slideForward"  v-touch:right ="slideBack">
            <transition :name="transitionName">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>              
            </transition>   
        </div>  -->
        <div class="nav-fortune">
            <div class="nav-item" v-for="(navItem, index) in navList" :key="index" :class="navActive">{{navItem.title}}</div>
        </div>
         <swiper height=600px :show-dots=false  @on-index-change="onSwiperItemIndexChange">
            <swiper-item class="black"><today-fortune></today-fortune></swiper-item>
            <swiper-item class="black"><month-fortune></month-fortune></swiper-item>
            <swiper-item class="black"><year-fortune></year-fortune></swiper-item>
        </swiper>
    </div>
</template>

<script>
import { Swiper } from 'vux'
import TodayFortune from './TodayFortune'
import MonthFortune from './MonthFortune'
import YearFortune from './YearFortune'
export default {
    components: {
        Swiper,
        "today-fortune": TodayFortune,
        "month-fortune": MonthFortune,
        "year-fortune": YearFortune
    },
    data () {
        return {
            avatar: require('../assets/image/fortune/avatar@2x.png'),
            userName: "卿大海",
            birthday: "1887年11月9日凌晨1:00",
            navList: [
                {title: "今日运程"},
                {title: "本月运程"},
                {title: "2019运程"}
            ],
            navActive: true 
        }
    },
    methods: {
         onSwiperItemIndexChange (index) {
            console.log(index)
            },
    }

    // watch: {  
    //     $route (to, from) {
    //         const arr = ['/main/fortune/todayFortune', '/main/fortune/monthFortune', '/main/fortune/yearFortune']
    //         const compare = arr.indexOf(to.path) > arr.indexOf(from.path)
    //         this.transitionName = compare ? 'slide-forward' : 'slide-back'
    //     }
    // },
    // methods: {
    //     slideForward: function() {
    //         console.log("左滑")
    //         this.transitionName = 'slide-forward'
    //     },
    //     slideBack: function() {
    //         console.log("右滑")
    //         this.transitionName = 'slide-back'
    //     }
    // }
    
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
    .nav-fortune{
        .flex-around();
    }
   

}

// router过度动画
// 前进
.slide-forward-enter {
  transform: translate(100%);
}
.slide-forward-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-forward-leave-active {
  transform: translate(-100%);
  transition: all  0.5s ease-in-out;
}

// 后退
.slide-back-enter {
  transform: translate(-100%);
}
.slide-back-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-back-leave-active {
  transform: translate(100%);
  transition: all  0.5s ease-in-out;
}



</style>

