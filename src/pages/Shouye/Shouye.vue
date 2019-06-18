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
          <nav class="navWrap" >
            <ul class="navList" >
              <li ref="navItem"  @click="toggleActive(index)" v-for="(item,index) in navListItem" :key="index" >
                <a href="javascript:;">{{item}}</a>
              </li>
              <!-- <li class="active"><a href="javascript:">推荐</a></li> -->
              <!-- <li><a href="javascript:">居家生活</a></li>
              <li><a href="javascript:">服饰鞋包</a></li>
              <li><a href="javascript:">美食酒水</a></li>
              <li><a href="javascript:">个户清洁</a></li>
              <li><a href="javascript:">母婴亲子</a></li>
              <li><a href="javascript:">运动旅行</a></li>
              <li><a href="javascript:">数码家电</a></li>
              <li><a href="javascript:">全球特色</a></li> -->
             
            </ul>
          </nav>
        </div>
        <div class="more">
          <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" /></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" /></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div> 
        <div class="server">
          <ul class="serverUl">
            <li class="serverItem">
              <a>
                <i class="serverI" style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>
                <span class="text">网易自营品牌</span>
              </a>
            </li>
            <li class="serverItem">
              <a>
                <i class="serverI" style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>
                <span class="text" >30天无忧退货</span>
              </a>
            </li>
            <li class="serverItem" >
              <a>
                <i class="serverI" style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>
                <span class="text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- <div class="fuwu">
          <div class="fuwuI">
            <a href="javascript:;" class="fuwuItem" v-for="(item,index) in ">
              <div>
                <img src="https://yanxuan.nosdn.127.net/c23ccef5456009797a659b9603122a4f.png" alt="">
              </div>
            </a>
          </div>
        </div> -->
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper';
 import "swiper/dist/css/swiper.css";
 import BScroll from 'better-scroll'
 /* eslint-disable */
 export default{
    name:'BetterScroll',
    data(){
      return{
        // scrollX:0,
        // index:0,
        navListItem:['推荐','居家生活','服饰鞋帽','美食酒水','个护清洁','母婴亲子','北京','运动旅行','全球特色']
      }
    },
    mounted(){
		    var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay:false,
            paginationClickable: '.swiper-pagination-bullet', //焦点按钮可点击
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        })

       new BScroll('.navWrap',{
              scrollX:true,
              click:true,
            })
    },
    methods: {
      toggleActive (index) {
        const onIndex = this.$refs.navItem.length
        console.log(this.$refs.navList)
        for(let i = 0; i< onIndex; i++){
          this.$refs.navItem[i].className = ''
        }
        this.$refs.navItem[index].className = 'active'
        // this.index=index
      },
    }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .msite  
    width 100%
    .header
      width 100%
      height 1.17rem
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
      width 100%
      height: 0.8rem;
      position relative
      margin-top 1.17rem
      background pink
      .navWrap
        width 100%
        overflow hidden
        .navList
          float left
          padding-right 1.3rem
          display flex
          li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0.2rem 0.1rem
            text-align center
            width 2.1rem
            a
              color #333
              font-size 16px
              line-height .4rem
              font-family PingFangSC-Light,helvetica,'Heiti SC'
            &.active
              color red
              a
                color red
                padding-bottom 0.1rem
                border-bottom 2px solid #ff0000
    .more
      width 1.3rem
      height 0.8rem
      position absolute
      top 1.17rem
      right 0
      background white
      text-align center
      line-height 0.8rem
    .swiper-container
      width 100%
      height 5rem
      position absolute
      top 1.97rem
      left 0
      .swiper-wrapper
        width 100%
        height 5rem
        .swiper-slide
            img  
              width 100%
              height  100%
      .swiper-pagination
        bottom: .4rem;
        width: 100%;
        .swiper-pagination-bullet
          width .5rem
          height .1rem
          display inline-block
          background #fff
          opacity .5
          border-radius 0
          &.swiper-pagination-bullet-active
            opacity 1
    .server
      position absolute
      top 6.97rem
      left 0
      width 100%
      .serverUl
        width 100%
        height .96rem
        background pink
        display flex
        justify-content space-around
        align-content center
       
        .serverItem
          float left 
          padding 0.2rem 0
          a
            display inline-block
            vertical-align middle
            height .42667rem
            .serverI
              display inline-block
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 100%
              width .42667rem
              height .42667rem
            .text
              font-size .32rem
              color #333
              margin-left .10667rem
              line-height .42667rem
              display inline-block
              vertical-align middle

</style>