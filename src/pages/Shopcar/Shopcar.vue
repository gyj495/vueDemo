<template>
 <div class="shopCar">
     <div class="msite">
      <!--首页头部-->
      <header class="header">
        <span class="logo">购物车</span>
        
        <div class="right">
          <div class="cart">
            <span class="txt">领券</span>
          </div>
        </div>
      </header>
    </div>
    <div class="nav">
      <ul class="list">
        <li class="item">
          <i class="circle"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="circle"></i>
          <span class="text">48小时快速退款</span>
        </li>
        <li class="item">
          <i class="circle"></i>
          <span class="text">满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="m-defaultPage m-defaultPage-noCart" >
      <div class="container">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        <div class="txt">
          <div class="noCart-login" >
            <div class="noCart-title" >去添加点什么吧</div>
            <div class="noCart-btn" @click="toLogin">登录</div>
          </div>
        </div>
      </div>
    </div>
    
    
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods:{
    toLogin(){
      this.$router.push({path:'/person'})
    }
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .shopCar
    width 100%
    .msite  
      width 100%
      height 88px
      .header
        height 1.17333rem
        padding 0 .4rem
        line-height 1.17333rem
        text-align center
        background-color #fff
        position relative
        .logo
          float left
          font-size .48rem
        .right
          width 90px
          height 88px
          float right
          .cart
            display inline-block
            position relative
            height .50667rem
            line-height .50667rem
            color #B4282D
            vertical-align top
            margin-top .33333rem
            margin-right .4rem
            .txt
               font-size  30px
    .nav
      width 100%
      height 70px
      .list  
        position relative
        z-index 1
        height .93333rem
        padding 0 .4rem
        background #f4f4f4
        display flex
        flex-flow row nowrap
        align-items center
        justify-content space-between
        .item
          display flex
          align-items center
          font-size .32rem
          color #666
          .circle
            margin-right .08rem
            position relative
            top -1px
            display inline-block
            vertical-align middle
            width 10px
            height 10px
            border 4px solid #443d3d61
            border-radius 50%
            background #f4f4f4
    .m-defaultPage
      position fixed
      top 88px
      left 0
      bottom 0
      z-index 0
      width 100%
      background-color #f4f4f4
      text-align center
      .container
        position absolute
        top -.66667rem
        right 0
        bottom 0
        left 0
        height 4rem
        margin auto
        img   
          display inline-block
          vertical-align middle
          width 3.30667rem
          height 3.30667rem
          margin-bottom .10667rem
          
      .txt
        font-size 28px
        line-height 1
        color #7f7f7f
        .noCart-login
          margin-top -20px
          .noCart-title
            margin-bottom .66667rem
            line-height 1
            font-size .37333rem
            color #999
          .noCart-btn
            margin auto
            width 6.4rem
            height 1.22667rem
            font-size .4rem
            line-height 1.22667rem
            color #fff
            background-color #b4282d
            border-radius .04rem

            

</style>
