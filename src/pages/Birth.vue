<template>
    <div class="birth">
        <v-active-header :navTitle="navTitle"></v-active-header>
        <div class="birth-form">
            <h2 class="form-title">生辰八字</h2>
            <input type="text" class="input-name" placeholder="请输入您的名字">
            <div class="gender">
                <div class="male">
                    <input type="radio" id="male" name='gender' checked>
                    <label for="male"></label>
                    <div class="gender-txt">男</div>
                </div>
                <div class="female">
                    <input type="radio" id="female" name='gender'>
                    <label for="female"></label>
                    <div  class="gender-txt">女</div>
                </div>
            </div>
            <input type="text" class="input-born" placeholder="请选择您的出生日期">
            <x-button :gradients="[gradientStart, gradientEnd]" id="save-confirm">确认保存</x-button>
        </div>
    </div>
</template>

<script>
import { Datetime } from 'vux'

export default {
    data () {
        return {
            navTitle: "生辰八字",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END
        }
    },
    components: {
        Datetime
    }
}
</script>

<style lang="less" scoped>
.birth{
    background: #fff;
    .birth-form{
        width: 640/75rem;
        height: 660/75rem;
        margin: 100/75rem auto 0 auto;
        box-sizing: border-box;
        padding: 50/75rem;
        .round(50/75rem);
        background: #fff;
        box-shadow: 0 10/75rem 10/75rem #eee;
    }
    .form-title{
        font-size: 32/75rem;
        margin-bottom: 57/75rem;
    }
    .input-name, .input-born{
        width: 100%;
        height: 65/75rem;
        line-height: 65/75rem;
        padding-left: 15/75rem;
        border: none;
        border-bottom: 1px solid #eee; 
        font-weight: 400;
        font-size: 34/75rem;
        font-weight:400;
        color:rgba(0,0,0,1);
        outline: none;
    }
    .input-born{
        margin-bottom: 80/75rem;
    }
    .gender{
        .flex-between();
        width: 80%;
        margin: 40/75rem;
        font-size: 34/75rem;
        .male,.female{
            .flex-start();
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 44/75rem;
            height: 44/75rem;
            .round(50%);
            margin-right: 40/75rem;
            border: 1px solid #eee;
        }
        input[id="male"]:checked  + label{
           background: url('../assets/image/birth/man.png') no-repeat center center / 100% 100%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        input[id="female"]:checked  + label{
           background: url('../assets/image/birth/woman.png') no-repeat center center / 100% 100%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        .gender-txt{
            color:rgba(0,0,0,1);
                opacity:0.2;
        }
    }
    #save-confirm{
        width: 504/75rem;
        height: 90/75rem;
        border-radius: 40/75rem;
        font-size: 28/75rem;
    }

}
</style>






