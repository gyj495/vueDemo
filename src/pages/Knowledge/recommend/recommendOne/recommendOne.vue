<template>

    <div class="item">
        <a href="javascript:;">
            <div class="i-name">
                <span class="i-img">
                    <img :src="topic.avatar" alt="" width="100%" height="100%">
                </span>
                <span>{{topic.nickname}}</span>
            </div>
            <div class="title">{{topic.title}}</div>
            <div class="i-pic">
                <!-- <img :src="v-lazy='topic.picUrl'" alt="" width="100%" height="100%"> -->
                <img v-lazy="topic.picUrl" alt="" width="100%" height="100%">
            </div>
            <div class="i-rcount">
                <i class="iconfont icon-liulan"></i>
                <span>{{topic.readCount}}人看过</span>
            </div>
        </a>
    </div>


</template>

<script type="text/ecmascript-6">
 export default {
    name: 'recommendOne',
    props: {
      topic: Object
    }
  }
 
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../../common/stylus/mixins";
.item
    width 100%
    background #fff
    margin 20px 0
    box-sizing border-box
    padding 36px 30px
    a
        .i-name
            font-size 28px
            color #333
            line-height .36rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-bottom 24px
            .i-img
                width 54px
                height 54px
                overflow hidden
                border-radius 50%
                box-sizing border-box
                border .01rem solid #d9d9d9
                margin-right 4px
            span
                display inline-block
                vertical-align middle
        .title
            font-size 36px
            color #333
            line-height .52rem
            margin-bottom 16px 
            overflow hidden
            text-overflow ellipsis
            font-family PingFangSC-Regular
        .i-pic
            width 690px
            height 376px
            position relative
            margin-bottom 18px
            overflow hidden
            border-radius .16rem
        .rcount
            font-size .22rem
            color #999
            line-height .32rem
            margin-top .18rem
            i
                display inline-block
                width .28rem
                height .2rem
                vertical-align middle
                margin-right 10px
            span
                display inline-block
                vertical-align middle

           


</style>
