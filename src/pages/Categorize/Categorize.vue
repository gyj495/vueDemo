<template>
 <div class="fenlei">
  <div class="msite">
    <!--首页头部-->
    <header class="header">
      <div class="search" @click="goSearch">
        <img src=" http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品, 共25113款好物</span>
      </div>
    </header>
  </div>
   <div class="flcontent">
     <div class="center">
      <div class="leftItem">
        <ul>
           <li :class="{active:categoryData[selIndex]===category}"
              v-for="(category, index) in categoryData" :key="index"
              @click="selectFL(index)">
            {{category.name}}
          </li>
        </ul>
      </div>
      <div class="rightItem" v-if="categoryData[selIndex]">
        <img :src="categoryData[selIndex].wapBannerUrl" alt="WapBanner">
        <ul>
          <li v-for="(item, index) in categoryData[selIndex].subCateList" :key="index">
            <Right v-if="item.type===3" :item="item"/>
            <!-- <RightI v-if="item.type===0" :item="item"/> -->
          </li>
        </ul>
      </div>
     </div>
    </div>
   
 </div>
</template>

<script type="text/ecmascript-6">
// import RightI from './RightI/RightI'
import Right from './Right/Right'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default{
 
    name: 'Category',
    data () {
      return {
        selIndex: 0
      }
    },
    components:{
      // RightI,
      Right
    },

    async mounted () {
      await this.$store.dispatch("getCategoryData")
    },

    computed: {
      ...mapState({
        categoryData: state=>state.category.categoryData
      })
    },

    methods: {
      selectFL (index) {
        this.selIndex = index
      },
      goSearch(){
        this.$router.push('/search')
      }
    },
    
    watch: {
      categoryData: {
        deep: true,
        handler () {
          console.log(this)
          this.$nextTick(()=>{
            if(this.BScroll){
              this.BScroll.refresh()
            }else{
              this.BScroll = new BScroll(".leftItem", {
                click: true,
                scrollY: true
              })
            }
          })
        }
      }
    },
     
    
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .fenlei
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
        border-bottom 2px solid #8080805c
        z-index 5 
        .search
          width 8rem
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
    .flcontent
      width 100%
      height 1148px
      font-size 28px
      padding-bottom 50px
      padding-top 50px
      background #fff
      .center
        width 100%
        .leftItem
          position fixed
          top 88px
          left 0
          width 162px
          max-height 1144px
          border-right 1px solid #eee
          padding -5rem 0
          ul
            width 100%
            li
              width 100%
              height 80px
              margin-top 40px
              line-height 80px
              text-align center
              font-size 28px
              color #7e8c8d
              &:first-child
                margin-top 20px
              &.active
                color red
                border-left 6px solid red
        .rightItem
          float right
          width 588px
          box-sizing border-box
          padding 110px 30px 100px
          font-size 28px
          img
            width 528px
            height 192px
            background-color: #fff
          ul
            width 528px
            margin-top 20px
            display flex
            flex-wrap wrap
            li
              width 144px
              height 216px
              margin-right 32px
              
         
        
</style>
