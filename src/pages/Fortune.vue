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

      
        <v-nav></v-nav>
        <v-swiper></v-swiper>
    </div>
</template>

<script>


export default {
    data () {
        return {
            avatar: require('../assets/image/fortune/avatar@2x.png'),
            userName: "卿大海",
            birthday: "1887年11月9日凌晨1:00",
            navList: [
                {title: "今日运程"},
                {title: "本月运程"},
                {title: "2019运程"}
            ]
        }
    },
    methods: {

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

