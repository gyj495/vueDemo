<template>
    <div>
        <img :src="item.wapBannerUrl" alt="logo">
        <div>{{item.name}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
 export default {
     name:'Right',
     props:{
         item:{}
     }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins";
div
    img
        width 144px
        height 144px
    div
        width 144px
        height 72px
        text-align center
 
</style>
