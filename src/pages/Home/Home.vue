<template>
  <div class="shouye">
    <div class="msite">
      <!--首页头部-->
      <header class="header">
        <div class="logo">
          <img  :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选"/>
        </div>
        <div class="search"  @click="toSearch">
          <img src=" http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span>搜索商品, 共25113款好物</span>
        </div>
        <button>登录</button>
      </header>
    </div>
    <div class="nav">
          <ul class="navI"> 
            <li class="item">
              <a href="javascript:;" class="item" :class="{active:navListItem[selIndex]===item}"  @click="toggleActive(index)"  v-for="(item,index) in navListItem" :key="index">{{item}}</a>
            </li>
          </ul>
    </div>
    <div class="more">
          <i class="iconfont icon-jiantou"></i>
    </div>
    <div class="center">
      <div class="contentCenter">
        
              <!-- <li ref="navItem" @click="toggleActive(index)" v-for="(item,index) in navListItem" :key="index" >
                <a href="javascript:;">{{item}}</a> -->

                <!-- <li :class="{active:categoryData[selIndex]===category}"
              v-for="(category, index) in categoryData" :key="index"
              @click="selectFL(index)">
            {{category.name}}
          </li> -->
              
              <!-- <li class="active"><a href="javascript:">推荐</a></li> -->
              <!-- <li><a href="javascript:">居家生活</a></li>
              <li><a href="javascript:">服饰鞋包</a></li>
              <li><a href="javascript:">美食酒水</a></li>
              <li><a href="javascript:">个户清洁</a></li>
              <li><a href="javascript:">母婴亲子</a></li>
              <li><a href="javascript:">运动旅行</a></li>
              <li><a href="javascript:">数码家电</a></li>
              <li><a href="javascript:">全球特色</a></li> -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" /></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" /></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination">
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
        <div class="serveII">
           <div class="sI">
              <div class="sUl">
                <a href="javascript:;" class="sLi" v-for="(serve, index) in serveNav" :key="index">
                  <div class="icon">
                    <img class="img" :src="serve.picUrl">
                  </div>
                  <div class="txt" style="color:#333333;">{{serve.text}}</div>
                </a>
              </div>
           </div>
        </div>
        <div class="contentMain">
          <div class="gifProm">
              <a style="display:block;background:url(https://yanxuan.nosdn.127.net/3001f5a34ec442ed14a4fa3cb8f780ce.gif?imageView&quality=75);background-size:100% 100%;"></a>
          </div>
          <div class="promOne">
            <a href="javasrcipt:;" style="background:url(https://yanxuan.nosdn.127.net/3a7b2184f3ba6be1d9cd738c501fea2d.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;">
                <div class="hotContent">
                  <div class="hotText">特价返场</div>
                  <div class="hotTextStyle">最高降1400</div>
                </div>
                <img src="http://yanxuan.nosdn.127.net/cd3ff27cf9e188a99721cb55ad69ba93.png?imageView&thumbnail=160x160&quality=75"/>
            </a>
            <a href="javasrcipt:;" style="background:url(https://yanxuan.nosdn.127.net/3a7b2184f3ba6be1d9cd738c501fea2d.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;">
                <div class="hotContent">
                  <div class="hotText">特价返场</div>
                  <div class="hotTextStyle">最高降1400</div>
                </div>
                <img src="http://yanxuan.nosdn.127.net/cd3ff27cf9e188a99721cb55ad69ba93.png?imageView&thumbnail=160x160&quality=75"/>
            </a>
            <a href="javasrcipt:;" style="background:url(https://yanxuan.nosdn.127.net/3a7b2184f3ba6be1d9cd738c501fea2d.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;">
                <div class="hotContent">
                  <div class="hotText">特价返场</div>
                  <div class="hotTextStyle">最高降1400</div>
                </div>
                <img src="http://yanxuan.nosdn.127.net/cd3ff27cf9e188a99721cb55ad69ba93.png?imageView&thumbnail=160x160&quality=75"/>
            </a>
          </div>
          <div class="promTitle">
            <a style="display:block; background:url(https://yanxuan.nosdn.127.net/2faa4315a4b09d7e8da6a8f451adf4b4.jpg?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"></a>
          </div>
          <!-- <div  class="goodsI" v-for="(pick,index) in handpick"  :key="index" v-if="pick.layout===0">
            <a v-if="p.itemCnt===1" v-for="(p,index) in pick.cells" :key="index"
             style="background:url(https://yanxuan.nosdn.127.net/d08060f7296d7172563bc88b48b41705.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
               <div class="iContent">
                  <div class="iText">{{p.title}}</div>
                  <div class="iTextStyle">{{p.subTitle}}</div>
                </div>
                <img :src="p.picUrl1"/>
            </a>
          </div> -->
          
          <ul class="ullist">
            <li class="liList">
              <a  v-for="(p,index) in handpick" :key="index"
             style="background:url(https://yanxuan.nosdn.127.net/d08060f7296d7172563bc88b48b41705.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
                <div class="iContent">
                  <div class="iText">{{p.title}}</div>
                  <div class="iTextStyle">{{p.subTitle}}</div>
                </div>
                <img :src="p.picUrl1"/>
              </a>
            </li>
          </ul>
          
        </div>
        <div class="newPerson">
          <div class="pTxtI">
            <span class="pTxt">新人专享礼</span>
          </div>
          <div class="left">
            <a href="javascript">
              <div class="pName">新人专享礼包</div>
              <div class="pcontent">
                <div class="pImg">
                  <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                </div>
                <div class="pSrc"></div>
              </div>
            </a>
          </div>
          <div class="right">
            <div class="rightI">
              <a href="javascript:;">
                <div class="pWrap">
                  <div class="pImgI">
                    <img src="http://yanxuan.nosdn.127.net/f961b628a67e5a95150b962a48963b6d.png?imageView&thumbnail=200x200&quality=75" style="display: inline;"/>
                  </div>
                  <div class="pQianI">
                    <div class="line1">¥69</div>
                    <div class="line2">¥79</div>
                    </div>
                </div>
                <div class="pZiI">
                  <div class="titleI">福利社</div>
                  <div class="titleII">今日特价</div>
                </div>
              </a>
            </div>
            <div class="rightII">
              <a href="javascript:;">
                <div class="pWrapI">
                  <div class="pImgII">
                    <img src="https://yanxuan.nosdn.127.net/b97687ef7db8fdbe7a77b200cb12bd28.png?imageView&thumbnail=200x200&quality=75" style="display: inline;"/>
                  </div>
                  <div class="pQianII">
                    <div class="line1">¥27.9</div>
                    <div class="line2">¥69</div>
                  </div>
                </div>
                <div class="pZiII">
                  <div class="titleI">新人拼团</div>
                  <div class="titleII">1元起包邮</div>
                </div>
              </a>
            </div>
          </div>
          
        </div>
        <div class="time-limited">
          <div class="moduleTitle">
            <div class="left">
              <span>人气推荐</span>
            </div>
            <a class="right">
              <span>更多</span>
              <i class="iconfont icon-arrow-right-copy-copy"></i>
            </a>
          </div>
          <a class="spItem">
            <div class="wraper">
              <div class="m-lazyload">
                <img class="swiper-lazy"  src="https://yanxuan.nosdn.127.net/2a3dd3df60b2e20eb02e9b9f8ba0f994.png?imageView&amp;quality=65&amp;thumbnail=280x280" style="display: inline;">
              </div>
            </div>
            <div>
              <div class="name">云由·真皮电动休闲椅</div>
              <div class="desc">双电机无线使用 自由移动</div>
              <div class="price">
                <span>¥</span>
                <span>4299</span>
              </div>
            </div>
          </a>
          <div class="mItem">
            <ul class="list">
              <li class="item">
                <a href="javascript:;" class="good">
                  <div class="m">
                    <div class="wrap">
                      <img src="https://yanxuan.nosdn.127.net/0f06898140d349b7e466cc5b41265685.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </div>
                  </div>
                  <div class="name">
                    <span>提花冰丝席三件套 可折叠凉...</span>
                    <span class="dynamicPrice">
                      <span>&nbsp;</span>
                      <span class="priceInner">
                          <span>¥</span>
                          <span>169</span>
                      </span>
                    </span>
                  </div>
                  <div class="tagWrap">
                    <p class="status">限时购</p>
                  </div>
                </a>
              </li>
              <li class="item"></li>
            </ul>
          </div>
        </div>
        <div class="time-limitedII">
          <div class="moduleTitle">
            <div class="left">
              <span>限时购</span>
              <div class="m-countdown ">
                <span class="hours a">00</span>
                <span class="colon">:</span>
                <span class="mins a">00</span>
                <span class="colon">:</span>
                <span class="secs a">00</span>
              </div>
            </div>
            <a class="right" href="/xxx">
              <span>更多</span>
              <i class="iconfont icon-arrow-right-copy-copy"></i>
            </a>
          </div>
          <div class="cnt">
            <a class="m-indexFlashSaleItem" href="javascript:void(0)">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/5459e22c904dd78e3cbecafb32e025b2.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img">
              </div>
              <div class="price">
                <span class="actualPrice">
                  <span>¥</span>
                  <span>103</span>
                </span>
                <span class="retailPrice">
                  <span>¥</span>
                  <span>119</span>
                </span>
              </div>
            </a>
          </div>
          
        </div>
        <div class="lunbo">
          <div class="lbCenter">
            <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/a4fd737946e228668152cbb7f0aba7c4.jpg?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"
                                   class="benner"></a>
            <div class="GD">
              <div class="itemGD">
                <div class="inner">
                  <ul class="list">
                    <li 
                    class="item swiper-slide swiper-slide-visible swiper-slide-active">
                      <a class="good" href="javascript:;">
                        <div class="hd">
                          <div class="wraper">
                            <div>
                              <img src="https://yanxuan.nosdn.127.net/3eb9bb12bd4a5af05801d7b0ff451c1d.png?imageView&quality=65&thumbnail=330x330" style="display: block;">
                            </div>
                          </div>
                        </div>
                        <div class="name">
                          <span>aaa</span>
                        </div>
                       
                        <div class="price">
                          <span class="priceInner">
                            <span class="xianshou">
                              <span>¥</span>
                              <span>30</span>
                            </span>
                            <span class="counterPrice">
                                <span >¥</span>
                                <span >199</span>
                            </span>
                          </span>
                        </div>
                        <div class="tagWraper">
                          <p class="status">毕业季特惠</p>
                        </div>
                        <span></span>
                        <div class="specification" >
                          <div>8</div>
                          <div>色</div>
                          <div>可</div>
                          <div>选</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="m-ftWrap">
          <div class="m-ft">
            <div class="bd">
              <a class="goApp">下载APP</a>
              <a class="goWeb">电脑版</a>
            </div>
            <p class="copyright">
              <span>网易公司版权所有 © 1997-</span>
              <span>2019</span>
              <br/>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper';
 import "swiper/dist/css/swiper.css";
 import BScroll from 'better-scroll'
 import {mapState} from 'vuex'
 /* eslint-disable */
 export default{
    name:'Home',
    data(){
      return{
        selIndex:0,
        navListItem:['推荐','居家生活','服饰鞋帽','美食酒水','个护清洁','母婴亲子','运动旅行','全球特色']
      }
    },
    async mounted(){
      console.log('handpick',this.handpick)
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

      new BScroll('.navI',{
              scrollX:true,
              click:true,
      })
      new BScroll('.center',{
              scrollY:true,
              click:true,
      })
      new BScroll('.GD',{
              scrollX:true,
              click:true,
      })

        await this.$store.dispatch("getServeNav")
        await this.$store.dispatch("getHandpic")
        await this.$store.dispatch("getHomeData")
        console.log(this.$store.dispatch("getHandpic"))
    },

    computed:{
      ...mapState({
        serveNav:state=>state.serveNav.serveNav,
        handpick:state=>state.handpick.handpick,
        homeData:state=>state.home.homeData,
         
      })
    },
    // methods: {
      // toggleActive (index) {
      //   const onIndex = this.$refs.navItem.length
      //   console.log(this.$refs.navList)
      //   for(let i = 0; i< onIndex; i++){
      //     this.$refs.navItem[i].className = ''
      //   }
      //   this.$refs.navItem[index].className = 'active'
      //   // this.index=index
      // },
    methods: {
      toggleActive (index) {
        this.selIndex = index
      },
      toSearch(){
        this.$router.push({path:'/search'})
      }
    // },
    }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .shouye
    width 100%
    .msite  
      width 100%
      .header
        width 100%
        height 1.17rem
        padding 0.21333rem 30px
        background #fff
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
          height 0.74667rem
          background: #eee;
          border-radius 10px
          text-align center
          line-height 0.74667rem
          img
            display inline-block
            vertical-align middle
            width .37333rem
            height .37333rem
            margin-right .13333rem
            margin-top -0.1rem
          span
              font-size 0.37333rem
              color #7E7E7E
        button
          display inline-block
          font-size 0.32rem
          color red
          border 2px solid #ff0000
          outline none
          border-radius 10px
          padding 6px
          background white
          width 1.04rem
    .nav
      width 100%
      height 72px
      background white
      border-bottom .01rem solid #d9d9d9
      box-sizing border-box
      overflow hidden
      position fixed
      top 82px
      left 0
      z-index 5
      .navI
        width 100%
        height 72px
        padding-bottom 18px
        white-space nowrap
        overflow-y hidden
        overflow-x auto
        .item 
          display inline-block
          height 72px
          font-family PingFangSC-Regular
          box-sizing border-box
          padding 0 .21333rem
          line-height .8rem
          font-size .37333rem
          color #211717b5
          text-align center
          font-weight 700 
          margin 0 20px
          vertical-align middle
          &.active
            color #B4282D
            border-bottom 6px solid #B4282D
    .more
      width 1.3rem
      height 72px
      position fixed
      top 82px
      right 0
      background white
      text-align center
      line-height 72px
      z-index:6
    .center
      width 750px
      height 1094px
      position absolute 
      top 154px
      left 0
      .contentCenter
        width 100%
        padding-bottom 5390px
        .swiper-container
          width 100%
          height 5rem
          position absolute
          top 0
          left 0
          .swiper-wrapper
            width 100%
            height 375px
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
          top 375px
          left 0
          width 100%
          .serverUl
            width 100%
            height 72px
            background #fff
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
        .serveII
          width 100%
          height 404px
          background #fff
          position absolute 
          top 447px
          left 0
          .sI
             width 100%
             height 372px
             padding-bottom 32px
             .sUl
                width 100%
                .sLi
                  display block
                  width 110px
                  height 156px
                  float left
                  margin 10px 20px 9px
                  .icon
                      img
                        width 110px
                        height 110px
                  .txt
                    margin-top 10px
                    text-align center
                    font-size 16px
                    line-height 24px
                    white-space nowrap
                    
        .contentMain
          width 100%
          height 1312px
          background #DC3900
          position absolute
          top 851px
          left 0
          .gifProm
            position absolute
            top 0
            left 0
            width 100%
            height 280px
            a
              width 759px
              height 280px
          .promOne
            width 710px
            height 220px
            margin-left 20px
            margin-bottom 10px
            position absolute
            top 280px
            left 0
            display flex
            a
              width 231px
              height 220px
              display inline-block
              float left
              justify-content space-around
              align-items center
              position relative
              margin-right 5px
              .hotContent
                text-align center
                font-weight 700
                overflow hidden
                white-space nowrap
                max-width 100%
                padding 0 .13333rem
                z-index 1
                line-height .6rem
                .hotText
                  font-size 24px
                  font-weight 700
                  color #4c4c4c
                .hotTextStyle
                  font-size 24px
                  transform: scale(0.8);
                  color #d4080d
              img 
                width 140px
                height 140px 
                position absolute
                left 50%
                bottom .05333rem
                transform translateX(-70px)
          .promTitle
            width 100%
            position absolute
            top 510px
            left 0
            a 
              width 710px
              height 80px
              margin-left 20px
          .ullist
              width 710px
              height 220px
              position absolute
              top 590px
              left 0
              display flex
              margin-left 20px
              margin-bottom 5px
              
              .liList
                
                a
                  width 171.98px
                  height 220px
                  display inline-block
                  float left
                  justify-content space-around
                  align-items center
                  position relative
                  margin-right 5px
                  margin-top 10px
                  .iContent
                    text-align center
                    font-weight 700
                    overflow hidden
                    white-space nowrap
                    max-width 100%
                    padding 0 .13333rem
                    z-index 1
                    line-height .6rem
                    .iText
                      font-size 24px
                      font-weight 700
                      color #d4080d
                    .iTextStyle
                      font-size 24px
                      transform: scale(0.8);
                      color #d4080d
                  img 
                    width 140px
                    height 140px 
                    position absolute
                    left 50%
                    bottom .05333rem
                    transform translateX(-70px)
          .goodsII
              width 710px
              height 220px
              position absolute
              top 820px
              left 0
              display flex
              margin-left 20px
              margin-bottom 5px
              a
                width 171.98px
                height 220px
                display inline-block
                float left
                justify-content space-around
                align-items center
                position relative
                margin-right 5px
                .iContent
                  text-align center
                  font-weight 700
                  overflow hidden
                  white-space nowrap
                  max-width 100%
                  padding 0 .13333rem
                  z-index 1
                  line-height .6rem
                  .iText
                    font-size 24px
                    font-weight 700
                    color #d4080d
                  .iTextStyle
                    font-size 24px
                    transform: scale(0.8);
                    color #d4080d
                img 
                  width 140px
                  height 140px 
                  position absolute
                  left 50%
                  bottom .05333rem
                  transform translateX(-70px)
          .goodsIII
              width 710px
              height 220px
              position absolute
              top 1050px
              left 0
              display flex
              margin-left 20px
              margin-bottom 5px
              a
                width 171.98px
                height 220px
                display inline-block
                float left
                justify-content space-around
                align-items center
                position relative
                margin-right 5px
                .iContent
                  text-align center
                  font-weight 700
                  overflow hidden
                  white-space nowrap
                  max-width 100%
                  padding 0 .13333rem
                  z-index 1
                  line-height .6rem
                  .iText
                    font-size 24px
                    font-weight 700
                    color #d4080d
                  .iTextStyle
                    font-size 24px
                    transform: scale(0.8);
                    color #d4080d
                img 
                  width 140px
                  height 140px 
                  position absolute
                  left 50%
                  bottom .05333rem
                  transform translateX(-70px)
        .newPerson
          width 100%
          height 554px
          background #fff
          position absolute
          top 2163px
          left 0
          margin 20px 0
          padding-bottom 30px
          .pTxtI
            height 1.2rem
            width 100%
            line-height 1.2rem
            text-align center
            font-family PingFangSC-Regular
            font-size .42667rem
            .pTxt::before
              content ''
              position absolute
              top .6rem
              left 3.3rem
              width 25px
              height 4px
              background #333
            .pTxt::after
              content ''
              position absolute
              top .6rem
              right 3.3rem
              width 25px
              height 4px
              background #333
          .left
            padding-left .4rem
            a
              display block
              width 4.57333rem
              height 5.78667rem
              background #F9E9CF
              border-radius .05333rem
              margin-right .05333rem
              float left
              color #333
              .pName
                font-family PingFangSC-Medium
                font-size .42667rem
                padding .4rem 0 0 .4rem
              .pcontent
                margin .49333rem auto
                width 3.44rem
                height 3.42667rem
                position relative
                .pImg
                  img
                    width 3.44rem
                    height 3.42667rem
                .pSrc
                  position absolute
                  width .4rem
                  height .26667rem
                  bottom .24rem
                  right .86667rem
                  background url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png) no-repeat
                  background-size 100% 100%
          .right
            float left
            .rightI
              background #FBE2D3
              border-radius 4px
              width 4.57333rem
              height 2.86667rem
              margin-bottom .05333rem
              a
                display block
                color #333
                width 4.57333rem
                height 2.93333rem
                float left
                border-radius .05333rem
                margin 0 .05333rem .05333rem 0
                font-size .32rem
                padding .26667rem 0 0 .4rem
                .pWrap
                  position absolute
                  right 40px
                  top 120px
                  .pImgI
                    width 200px
                    height 200px
                    img
                      width 100%
                      height auto
                  .pQianI
                    position absolute
                    top -0.25rem
                    right .45333rem
                    width 80px
                    height 65px
                    opacity .8
                    background #F59524
                    border-radius 50%
                    padding-top .13333rem
                    color #fff
                    text-align center
                    .line1
                      font-size .32rem
                    .line2
                      font-size .32rem
                      transform: scale(0.8);
                      margin-top -.09333rem
                      text-decoration line-through
                      line-height 50px
                  .pZiI
                    font-size .42667rem
                    .titleI
                      font-family PingFangSC-Medium
                      font-size .42667rem
                      font-weight soild
                    .titleII
                      color #7F7F7F
            .rightII
              background #FBE2D3
              border-radius 4px
              width 4.57333rem
              height 2.86667rem
              margin-bottom .05333rem
              a
                display block
                color #333
                width 4.57333rem
                height 2.93333rem
                float left
                border-radius .05333rem
                margin 0 .05333rem .05333rem 0
                font-size .32rem
                padding .26667rem 0 0 .4rem
                .pWrapI
                  position absolute
                  right 40px
                  top 4.6rem
                  .pImgII
                    width 200px
                    height 200px
                    img
                      width 100%
                      height auto
                  .pQianII
                    position absolute
                    top -0.25rem
                    right .45333rem
                    width 80px
                    height 65px
                    opacity .8
                    background #F59524
                    border-radius 50%
                    padding-top .13333rem
                    color #fff
                    text-align center
                    .line1
                      font-size .32rem
                    .line2
                      font-size .32rem
                      transform: scale(0.8);
                      margin-top -.09333rem
                      text-decoration line-through
                      line-height 50px
                  .pZiII
                    font-size .42667rem
                    .titleI
                      font-family PingFangSC-Medium
                      font-size .42667rem
                      font-weight soild
                    .titleII
                      color #7F7F7F
        .time-limited
          width 100%
          height 783.92px
          margin-bottom .26667rem
          padding-bottom .4rem
          position absolute 
          top 2787px
          left 0
          background #fff
          .moduleTitle
            width 100%
            height 99.89px
            line-height 99.89px
            padding 0 30px
            background #fff
            overflow hidden
            box-sizing border-box
            .left
              float left
              font-size 32px
              font-family PingFangSC-Regular
            .right 
              display block
              font-size 28px
              float right
              color #333
              line-height 99.89px
              i 
                display inline-block
                vertical-align middle
                margin -.06667rem 0 0 .10667rem
          .spItem
            color #333
            width 690px
            height 279.98px
            display flex
            align-items center
            background #FEF0DF
            border-radius .05333rem
            margin 0 30px 20px
            .wraper
              width 279.98px
              height 279.98px
              margin-right .4rem
              .m-lazyload
                width 279.98px
                height 279.98px
                img
                  width 279.98px
                  height 279.98px
            div
              width 350px
              .name
                font-family PingFangSC-Regular
                font-size 28px
                width 350px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                line-height 41px
              .desc
                font-size 24px
                color #7F7F7F
                width 350px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                line-height 36px
              .price
                font-size .37333rem
                color #b4282d
                line-height 41px
          .mItem
            width 100%
            box-sizing border-box
            padding-left .1333rem
            height 353.95px
            .list
               display flex
               flex-wrap wrap
               height 353.95px
               .item
                  float left
                  position relative
                  overflow hidden
                  background-color #fff
                  padding-bottom 13px
                  margin-left 20px
                  width 216px
                  .good
                    width 216px
                    height 336.98px
                    .m
                      width 216px
                      height 216px
                      box-sizing border-box
                      .wrap
                        background-color #f5f5f5
                        margin-bottom 2px
                        img
                          background-color #f5f5f5
                          top 0
                          left 0
                          width 216px
                          height 216px
                    .name
                      margin-top 20px
                      margin-bottom .05333rem
                      padding 0
                      font-size .32rem
                      overflow visible
                      white-space normal
                      line-height .48rem
                      color #000
                      font-family PingFangSC-Medium
                      .dynamicPrice
                        color red
                    .tagWrap
                      width 100%
                      z-index 1
                      margin 0 0 .05333rem -.16rem
                      height .44rem
                      overflow hidden
                      padding-left 0
                      .status
                        margin-bottom .06667rem
                        padding 0 .32rem
                        line-height .42667rem
                        height .42667rem
                        text-align center
                        color #CE2424
                        background rgba(255,255,255,.9)
                        border 2px solid #CE2424
                        font-size 40px
                        transform scale(0.5)
                        border-radius .18667rem
                        display inline-block
                        vertical-align middle
        .time-limitedII
          width 100%
          height 698px
          background #fff
          margin-bottom 30px
          position absolute
          top 3621px
          left 0
          .moduleTitle
            width 100%
            height 1.33333rem
            line-height 1.33333rem
            padding 0 .4rem
            background #fff
            overflow hidden
            box-sizing border-box
            .left
              float left
              font-size .42667rem
              font-family PingFangSC-Regular
              .m-countdown
                display inline-block
                vertical-align middle
                margin -.08rem 0 0 .16rem
                .a
                  display inline-block
                  font-size .32rem
                  line-height .48rem
                  width .48rem
                  height .48rem
                  text-align center
                  background-color #333
                  border-radius .05333rem
                  color #fff
                  margin 0 .13333rem
                  font-family PingFangSC-Medium
            .right 
              display block
              font-size .37333rem
              float right
              color #333
              line-height 1.33333rem
              i
                display inline-block
                vertical-align middle
                margin -.06667rem 0 0 .10667rem
          .cnt
            overflow hidden
            padding 0 0.13333rem 0 .4rem
            .m-indexFlashSaleItem 
              display block
              color #333
              float left
              margin-right .26667rem
              padding-bottom .4rem
              .imgWrap
                width 2.88rem
                height 2.88rem
                background #F5F5F5
                border-radius 4px
                margin-bottom .16rem
                img
                  width 2.88rem
                  height 2.88rem
              .price
                padding-left .26667rem
                .actualPrice
                  font-size .37333rem
                  color #b4282d
                  margin-right .16rem
                .retailPrice
                  font-size .32rem
                  color #7F7F7F
                  text-decoration line-through
        .lunbo
          background #fff
          width 750px
          height 781px
          position absolute
          top 4341px
          left 0
          .lbCenter
            margin-bottom 30px
            .benner
              display block
              width 100%
              height 4.93333rem
              margin-bottom .26667rem
            .GD
              width 750px
              height 391px
              .itemGD
                background #fff
                .inner
                  padding 0 .4rem .4rem
                  .list
                    width 690px
                    height 361px
                    .item
                      width 200px
                      height 361px
                      margin-right 20px
                      display inline-block
                      .good
                        display block
                        .hd
                          background-color #f4f4f4
                          .wraper
                            margin-bottom .16rem
                            div
                              img
                                width 200px
                                height 200px
                        .name
                          font-size .32rem
                          line-height .48rem
                          overflow hidden
                          text-overflow ellipsis
                          white-space normal
                          width 200px
                          height 72px
                        .price
                          margin-bottom .05333rem
                          padding-left 0
                          font-size .32rem
                          line-height .48rem
                          .priceInner
                            display flex
                            align-items center
                            .xianshou
                              color red
                              margin-right 20px
                            .counterPrice
                              margin-left .10667rem
                              font-size .32rem
                              line-height .48rem
                              color #999
                              text-decoration line-through
                              font-family PingFangSC-Light
                        .tagWraper
                          width 100%
                          z-index 1
                          margin 0 0 .05333rem
                          height .54rem
                          overflow hidden
                          padding-left 0 
                          text-align left
                          .status
                            margin-bottom .06667rem
                            padding 0 .16rem
                            line-height .42667rem
                            height .42667rem
                            text-align center
                            color #CE2424
                            background rgba(255,255,255,.9)
                            border 2px solid #CE2424
                            font-size .26667rem
                            border-radius .18667rem
                            display inline-block
                            vertical-align middle
                        .specification
                          position absolute
                          border-width .5px
                          border-radius .02667rem
                          border-style solid
                          border-color #b4a078
                          width .42667rem
                          top 0
                          margin-top .13333rem
                          margin-left .13333rem
                          padding .16rem 0
                          color #b4a078
                          background-color #f4f4f4
                          display flex
                          flex-direction column
                          justify-content center
                          >div
                            font-size .26667rem
                            text-align center
                            line-height 1
        .m-ftWrap
          border-top 2px solid rgba(0,0,0,.15)
          background-color #414141
          width 100%
          height 245px
          position absolute
          top 5122px
          left 0
          margin-top 20px
          .m-ft
            text-align center
            padding .72rem .26667rem .37333rem
            width 10rem
            margin-right auto
            margin-left auto
            .bd
              margin-bottom .48rem
              width 710px
              height 62px
              
              .goApp
                width 172px
                height 62px
                margin-right 50px
                font-size 24px
                color #fff
                line-height 62px
                border 2px solid #999
                display inline-block
                vertical-align middle
                text-align center
                border-radius 4px
                overflow hidden
                background-color #414141
              .goWeb
                width 172px
                height 62px
                font-size 24px
                color #fff
                line-height 62px
                border 2px solid #999
                display inline-block
                vertical-align middle
                text-align center
                border-radius 4px
                overflow hidden
                background-color #414141
            .copyright
              font-size .32rem
              line-height .42667rem
              color #999
                  

              
          
          
                                     




             

                  
               



 

</style>   