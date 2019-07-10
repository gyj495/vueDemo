<template>
 <div class="search">
    <div class="m-topBar">
         <div class="bd">
            <div class="row">
                <form class="m-searchIptWrap" role="search" action="/search">
                    <div class="m-ipt">
                        <img src=" http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="" >
                        <input @keyup="toSearch" v-model="userInput" type="text" class="ipt" placeholder="赋活原液 精准护肤" value="" maxlength="" style="outline:none; background-color:#F4F4F4"/>
                        <i class="iconfont icon-guanbi"  v-if="userInput" @click="userInput=''"></i>
                    </div>
                </form>
                <span class="cancel" @click="$router.back()">取消</span>
            </div>
        </div>
    </div>
    <ul class="m-list"  v-if="userInput">
        <li class="item"  v-for="(item, index) in searchResult" :key="index">
            <div class="m-listItem">
                <div class="inner">
                    <span>{{item}}</span>
                </div>
            </div>
        </li>
    </ul>
    <div class="m-searchSuggestionsViews">
        <div class="m-searchSuggestions">
            <header class="hd">
                <h3 class="tit">热门搜索</h3>
            </header>
            <nav class="list" v-for="(keyWord, index) in keywords" :key="index">
                <a class="item highlight" :class="{active: curIndex===index-11}">{{keyWord}}</a>
            </nav>
        </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
 import {mapState} from "vuex" 
 export default {
     name:'search',
     data(){
         return {
             curIndex:11,
             userInput:"",
             timeId:-1
         }
     },
     
     computed: {
      ...mapState({
        // searchData: state=>state.searchData.searchData,
        searchResult: state=>state.searchResult.searchResult
      }),
      
    //   keywords(){
    //       let arrs=[]
    //       console.log(this);
          
    //       if(this.searchData.hotKeywordVOList){
    //           arrs=this.searchData.hotKeywordVOList.reduce((arr,index)=>{
    //               const word=next.keyword;
    //               arr.push&&arr.push(word)
    //               return arr
    //           },[])
    //       }
    //       return arrs
    //   }
     },
     
     methods: {
      toSearch () {
        clearTimeout(this.timerId)
        this.timerId = setTimeout(async ()=>{
          await this.$store.dispatch('getSearchResult', this.userInput)
        }, 300)
      }
    },
    mounted () {
      this.$store.dispatch("getSearchData")
    }
     
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 491px
    .m-topBar
        width 100%
        height 87px
        z-index 1
        position relative
        .bd
           background-color #fff
          
           .row
                width 10rem
                margin auto
                overflow hidden
                position relative
                padding 0 30px
                height 88px
                display flex
                align-items center
                justify-content space-between
                box-sizing border-box
                .m-searchIptWrap
                   width 604px
                   height 56px
                   .m-ipt
                        padding-top 0
                        padding-bottom 0
                        background-color #f4f4f4
                        height 56px
                        border-radius 4px
                        padding 0 20px
                        display flex
                        align-items center
                        justify-content space-between
                        >img 
                            width 28px
                            height 28px
                            margin-right 16px
                        .ipt
                            line-height .53333rem
                            padding-left .02667rem
                            font-size .37333rem
                            width 520px
                            height 39px
                        i   
                            display inline-block
                            width 50px
                            height 50px
                            vertical-align middle
                            color #ccc
                            text-align center
                            padding-top 15px
                .cancel
                    margin-left .4rem
                    font-size .37333rem
    .m-list
        display block
        padding-left .4rem
        background-color #fff
        width 750px
        height 180px
        position absolute
        top 87px
        left 0
        .item
            height 90px
            font-size 28px
            .m-listItem
                width 720px
                height 104px
                display flex
                flex-flow row nowrap
                align-items center
                position relative
                min-height 1.38667rem
                .inner
                    width 720px
                    height 41px
    .m-searchSuggestionsViews
        width 750px
        height 325px
        position absolute
        top 87px
        left 0
        background #fff
        .m-searchSuggestions
            width 750px
            height 325px
            margin-bottom .26667rem
            padding 0 .4rem .4rem
            background-color #fff
            overflow hidden
            box-sizing border-box
            .hd
                width 690px
                height 90px
                font-size 28px 
                color #999
                display flex
                align-items center
            .list 
                width 720px
                height 237px
                margin-right -.4rem
                margin-bottom -.42667rem
                zoom 1
                .item
                    float left
                    padding 0 .2rem
                    margin-right .42667rem
                    margin-bottom .42667rem
                    line-height .61333rem
                    border 2px solid #999
                    border-radius 4px
                    color #333
                    &.highlight
                        border-color #b4282d
                        color #b4282d
</style>
