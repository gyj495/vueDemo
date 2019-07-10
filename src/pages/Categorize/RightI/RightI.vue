<template>
    <div class="cateList">
        <div class="hd">夏凉好物</div>
        <ul class="list">
            <li class="cateItem">
                <a>
                    <div class="cateImgWrapper">
                        <img src="https://yanxuan.nosdn.127.net/1141d9587c638b47c48467a1a3f50083.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg">
                    </div>
                    <div class="name">618必买</div>
                </a>
            </li>
        </ul>
     </div>

    
</template>

<script type="text/ecmascript-6">
 export default {
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins";
.cateList
   margin-bottom 16px
   .hd
        overflow hidden
        max-width 7.04rem
        padding-bottom 8px
        margin-bottom: 32px
        text-align left
        font-weight 700
        color #333
        border-bottom 1px solid #d9d9d9
    .list
        .cateItem
            display inline-block
            margin-right .45333rem
            width 1.92rem
            vertical-align top
            a
                .cateImgWrapper
                    width 144px
                    height 144px
                .name
                    height .96rem
                    font-size .32rem
                    color #333
                    text-align center
                    line-height .48rem
                    display block
                    overflow hidden
                    text-overflow ellipsis

</style>
