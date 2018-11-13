<template>
  <div class="nav">
    <ul class="nav-list">
      <li class="item" v-for="(item,index) in navList" :key="index" :class="{'active': nowIndex===index}" @click="tabClick(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
 <script type="text/ecmascript-6">
  import VueRouter from 'vue-router';
   export default {
    data() {
      return {
        navList: [
          {name: '今日运程'},
          {name: '本月运程'},
          {name: '2019运程'}
        ],
        nowIndex: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        // 初始化，保证刷新页面后内容区和导航键一致
        this.initPage();
      });
      // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      this.$root.eventHub.$on('slideTab', this.slideTab);
    },
    methods: {
      initPage() {
        this.nowIndex = this.$route.path === 'main/fortune/todayFortune' ? 0 : this.$route.path === 'main/fortune/monthFortune' ? 1 : this.$route.path === 'main/fortune/yearFortune' ? 2 : 0
      },
      tabClick(index) {
        this.nowIndex = index;
        // 点击导航按钮时向swiper组件发射index
        this.$root.eventHub.$emit('changeTab', index);
      },
      slideTab(index) {
        this.nowIndex = index;
        let router = new VueRouter();
        let href = index === 0 ? 'main/fortune/todayFortune' : index === 1 ? 'main/fortune/monthFortune' : index === 2 ? 'main/fortune/yearFortune' : '/';
        // 利用路由的push方法更新路径地址
        router.push(href);
      }
    }
  }
</script>
 <style lang="less" scoped>
  .nav{
    margin-bottom: 20/75rem;
    .nav-list{
      width: 100%;
      overflow: hidden;
      .item{
        width: 20%;
        display: inline-block;
        text-align: center;
        height: 70/75rem;
        line-height: 70/75rem;
        margin-top: 20/75rem;
        font-size: 28/75rem;
        font-weight:400;
        opacity: 0.8;
        &.active{
            opacity: 1;
          border-bottom: 5/75rem solid #4333BF;
        }
      }
        
    }
  }
</style>