<template>
  <div>
      <section class="msite">
        <!--首页头部-->
        <header class="header">
          <div class="logo">
           <img  :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选">
          </div>
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共25113款好物</span>
          </div>
          <button>登录</button>
        </header>
        <div class="slideBar">
          <nav class="navWrap">
            <ul class="navList" ref="navList">
              <li class="active" @click="selectItem(index)" v-for="(item,index) in navListItem" :key="index" >
                <a href="javascript:;">{{item}}</a>
              </li>
             
            </ul>
          </nav>
        </div>
        <div class="more">
          <i class="iconfont icon-jiantou"></i>
        </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 /* eslint-disable */
 export default{
    name:'BetterScroll',
    data(){
      return{
        scrollX:0,
        index:0,
        navListItem:['推荐','居家生活','服饰鞋帽','美食酒水','个护清洁','母婴亲子','北京','运动旅行','全球特色']
      }
    },
    mounted(){
      this.selectItem()
    },
    methods:{
      selectItem(){
            this.scroll=new BScroll('.navWrap',{
              scrollX:true,
              click:true,
            })
        
          
        }
    }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .msite  
    width 100%
    .header
      width 100%
      height 40px
      padding 0.21333rem 0.4rem
      background gold
      display flex
      justify-content space-around
      align-items center
      position fixed
      top 0
      left 0
      box-sizing border-box
      z-index 5
      .logo
        img
          width 1.84rem
          height 0.53rem
      .search
        width 5.893rem
        height 0.746rem
        background: #eee;
        border-radius 5px
        text-align center
        line-height 0.746rem
        i
          .iconfont
              font-size 0.373rem
        span
            font-size 0.373rem
            color #7E7E7E
      button
        display inline-block
        font-size 0.32rem
        color red
        border 1px solid #ff0000
        outline none
        border-radius 5px
        padding 3px
        background white
        width 1.04rem
    .slideBar
      overflow hidden
      position fixed
      top 40px
      left 0
      background pink
      .navWrap
        width 100%
        box-sizing border-box
        height 30px
        .navList
          white-space nowrap
          float left
          overflow hidden
          font-size 0
          li
            font-size 16px
            display inline-block
            height 30px
            padding 0 16px
            line-height 30px
            a
              color #020202
            &.active
              color red
              a
                color red
                padding-bottom 2px
                border-bottom 2px solid #ff0000
    .more
      width 50px
      height 30px
      position absolute
      top 40px
      right 0
      background white
      text-align center
      line-height 30px
  
</style>