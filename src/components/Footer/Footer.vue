<template>
 <div>
  <footer class="foot border-1px">
    <a href="javascript:;" class="foot_item"  :class="{on:'/shouye'===$route.path}" @click="goTo('/shouye')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/fenlei'===$route.path}" @click="goTo('/fenlei')">
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:'/shiwu'===$route.path}" @click="goTo('/shiwu')">
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
        height 50px
        display flex
        .foot_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color red
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
  
 
</style>
