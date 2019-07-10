<template>
  <div class="shiwu">
    <div class="msite">
      <!--首页头部-->
      <header class="header">
        <div class="left">
          <a href="/" class="home">
            <i class="iconfont icon-home1"></i>
          </a>
        </div>
        <div class="center">
          <a href="/xxx" class="item active">发现</a>
          <a href="/xxx" class="item">甄选家</a>
        </div>
        <div class="right">
          <a href="/xxx" class="shopCar">
            <i class="iconfont icon-shopcart"></i>
          </a>
          <a href="/xxx" class="search">
            <i class="iconfont icon-xiazai17"></i>
          </a> 
        </div>
      </header>
    </div>
    <div class="nav">
      <ul class="navI"> 
        <li class="item">
          <a href="javascript:;" class="item" :class="{active:navListItem[selIndex]===item}"  @click="toggleActive(index,item.path)"  v-for="(item,index) in navListItem" :key="index">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <Recommend/>
  </div>
</template>

<script type="text/ecmascript-6">
import Recommend from "./recommend/recommendMain";
import BScroll from 'better-scroll'
export default{
  name:'Knowledge',
  data(){
    return{
      selIndex:0,
      // navListItem:['推荐','618年终盛典','好货内部价','回购单','晒单','开发者日记','达人','HOME']
      navListItem:[
        {
          path:'/knowledge/recommend',
          name:'推荐',
          Id:'0'
        },
        {
          path:'/knowledge/recommend',
          name:'618年终盛典',
          Id:'1'
        },
         {
          path:'/knowledge/recommend',
          name:'好货内部价',
          Id:'2'
        },
         {
          path:'/knowledge/recommend',
          name:'回购单',
          Id:'3'
        },
         {
          path:'/knowledge/recommend',
          name:'晒单',
          Id:'4'
        },
         {
          path:'/knowledge/recommend',
          name:'开发者日记',
          Id:'5'
        },
         {
          path:'/knowledge/recommend',
          name:'达人',
          Id:'6'
        },
         {
          path:'/knowledge/recommend',
          name:'HOME',
          Id:'7'
        },

      ]
    }
  },
  components:{
    Recommend
  },
  mounted(){
    new BScroll('.navI',{
            scrollX:true,
            click:true,
          })
    // new BScroll('.center',{
    //         scrollY:true,
    //         click:true,
    //       })
  },
  methods: {
      toggleActive (index,path) {
        this.selIndex = index
        //跳转二级路由
        this.$router.push(path)
      }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .shiwu
    width 100%
    background #F4F4F4
    .msite  
      width 100%
      height 50px
      
      .header
        border-botom 4px solid #f4f4f4
        width 100%
        height 100px
        padding 0 26px 0 24px
        background #FAFAFA
        display flex
        justify-content space-around
        align-items center
        position fixed
        top 0
        left 0
        box-sizing border-box
        z-index 5
        border-bottom 2px solid #8080805c
        .left
          display block
          float left
          .home
            color inherit
            i
              font-size 0.65rem
              color #4E4E4E
        .center 
          position absolute
          width 3.2rem
          height 100%
          line-height 1rem
          text-align center
          left 50%
          top 50%
          margin-left -1.6rem
          margin-top -50px
          font-size .28rem
          color #7F7F7F
          z-index 1
          .item
            padding 0 .16rem
            vertical-align middle
            display inline-block
            font-size 28px
            margin-top   12px
            &.active
              color #b4282d
              font-weight bold
              font-size 40px
        .right 
          float right
          margin-left 6.666667rem
          .search
            margin-right .3rem
            display inline-block
            i  
              font-size 48px
          .shopCar
            float right
            margin-right .3rem
            display inline-block
            i  
              font-size 48px
    .nav
      width 100%
      height 72px
      background #fafafa
      border-bottom .01rem solid #d9d9d9
      box-sizing border-box
      overflow hidden
      position fixed
      top 100px
      left 0
      z-index 20
      .navI
        width 100%
        height 72px
        padding-bottom 20px
        white-space nowrap
        overflow-y hidden
        overflow-x auto
        .item 
          display inline-block
          height 72px
          line-height 72px
          box-sizing border-box
          font-size 28px
          color #7F7F7F
          padding 0 8px
          margin 0 20px
          vertical-align middle
          &.active
            color #B4282D
            border-bottom 5px solid #B4282D
  </style>
