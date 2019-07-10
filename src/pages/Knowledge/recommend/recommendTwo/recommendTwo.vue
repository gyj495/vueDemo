<template>
    <div class="itemII">
        <a href="javascript:;" class="itemImg">
            <div class="info">
                <div class="i-name">
                    <span class="i-ava">
                        <img :src="topic.avatar" alt="" width="100%" height="100%">
                    </span>
                    <span>{{topic.nickname}}</span>
                </div>
                <div class="title">{{topic.title}}</div>
                <div class="desc">{{topic.subTitle}}</div>
                <div class="i-rcount">
                    <i class="iconfont icon-liulan"></i>
                    <!-- <span>{{Math.floor((topic.readCount)/10000)}}w人看过</span> -->
                    <span>{{topic.readCount}}人看过</span>
                </div>
            </div>
            <div class="i-pic">
                <img :src="topic.picUrl" alt="" width="100%" height="100%">
            </div>
        </a>
    </div>
</template>

<script type="text/ecmascript-6">
 export default {
    name: 'recommendTwo',
    props: {
        topic: Object
    }
  }
 
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../../common/stylus/mixins";
.itemII
    width 100%
    background #fff
    margin 20px 0
    box-sizing border-box
    padding 32px 30px
    .itemImg
        display flex
        flex-wrap wrap
        justify-content space-between
        .info
           width 400px
           .i-name
                font-size 28px
                color #333
                line-height 36px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                .i-ava
                    width 56px
                    height 56px
                    overflow hidden
                    border-radius 50%
                    box-sizing border-box
                    border 2px solid #d9d9d9
                    margin-right 12px
                span  
                    display inline-block
                    vertical-align middle
            .title 
                width 100%
                font-size 36px
                color #333
                line-height 44px
                overflow hidden
                text-overflow ellipsis
                padding-top 32px
                font-family PingFangSC-Regular
            .desc
                width 100%
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                font-size 28px
                line-height 40px
                padding-top 8px
                color #7f7f7f
            .i-rcount
                font-size 22px
                color #999
                line-height 32px
                margin-top 18px
                .ico 
                    display inline-block
                    width 28px
                    height 20px
                    vertical-align middle
                    margin-right 16px
                span  
                    display inline-block
                    vertical-align middle
        .i-pic
            width 272px
            height 272px
            position relative
            overflow hidden
            border-radius 16px

            


</style>
