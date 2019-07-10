<template>
 <div>
  <footer class="foot border-1px">
    <a href="javascript:;" class="foot_item"  :class="{on:'/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/categorize'===$route.path}" @click="goTo('/categorize')">
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/knowledge'===$route.path}" @click="goTo('/knowledge')">
      <span class="item_icon">
        <i class="iconfont icon-faxian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/shopcar'===$route.path}" @click="goTo('/shopcar')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/person'===$route.path}" @click="goTo('/person')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
     name:'Footer',
     methods:{
         goTo(path){
             this.$router.replace(path)
         }
     }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .foot 
      top-border-1px(#e4e4e4)
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 100px
      display flex
      .foot_item
          display flex
          flex 1
          text-align center
          flex-direction column
          align-items center
          margin 10px
          color #999999
          &.on
              color red
          span
              font-size 24px
              margin-top 4px
              margin-bottom 4px
              .iconfont
                  font-size 44px
  
 
</style>
