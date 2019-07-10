<template>
 <div class="person">
    <div class="msite">
      <!--首页头部-->
      <header class="header">
        <div class="left">
          <a href="/home" class="home">
            <i class="iconfont icon-home1"></i>
          </a>
        </div>
        <div class="logo">
          <img  :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选"/>
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
    <div class="loginWay">
      <div class="loginway">
        <div class="cont">
          <div class="logoWrap" >
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
          </div>
          <div class="btnWrap">
            <div class="w-button">
              <i class="u-icon"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button" >
              <i class="u-icon" ></i>
              <span>邮箱帐号登录</span>
            </div>
            <div class="btn">
              <span >手机号快捷注册</span>
              <i class="u-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .person
    width 100%
    .msite  
      width 100%
      height 100px
      box-sizing border-box
      .header
        z-index 1
        width 100%
        overflow hidden
        position relative
        padding 0 16px 0 24px
        height 100px
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        .left
          display block
          float left
          width 48px
          height 44px
          .home
            color inherit
            i
              font-size 0.65rem
              color #4E4E4E
        .logo
          img
            width 2rem
            height 0.7rem
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            margin auto
            display inline-block
            vertical-align middle
        .right 
          float right
          margin-left auto
          .search
            margin-right .3rem
            display inline-block
            i  
              font-size 50px
          .shopCar
            float right
            margin-right .3rem
            display inline-block
            i  
              font-size 50px
    .loginWay
      width 100%
      height 1246px
      .loginway
        position relative
        height 100%
        background #F2F5F4
        .cont
          width 100%
          height 752px
          .logoWrap
            width 100%
            text-align center
            padding 160px 0
            img 
              width 268px
              height 90px
          .btnWrap
            width 100%
            height 290px
            margin-bottom 205px
            padding 0 40px
            box-sizing border-box   
            .w-button
              width 670px
              height 94px
              margin-bottom 32px
              vertical-align middle
              text-align center
              font-size .37333rem
              color #fff
              border 1px solid #b4282d 
              background-color #b4282d
              overflow hidden
</style>
