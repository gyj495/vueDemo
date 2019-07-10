<template>
  <div class="recommend">
    <div class="recommendContent">
      <ul v-for="(recommend, index) in recommendData" :key="index">
        <li v-for="(topic, index) in recommend.topics" :key="index">
          <RecommendOne v-if="topic.style===1" :topic="topic"></RecommendOne>
          <RecommendTwo v-if="topic.style===2" :topic="topic"></RecommendTwo>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import RecommendOne from './recommendOne/recommendOne'
  import RecommendTwo from './recommendTwo/recommendTwo'
  
  import {mapState} from 'vuex'
  // import BScroll from 'better-scroll'
  
  export default {
    name: 'Recommend',
    components: {
      RecommendOne,
      RecommendTwo
    },
    // data () {
    //   return {
    //     recommendPull: 1
    //   }
    // },
    computed: {
      ...mapState({
        recommendData: state=>state.find.recommendData,
    //     recommendPull: state=>state.find.recommendPull
      })
    },
    async mounted () {
      console.log(this.$route.query.id)
      await this.$store.dispatch("getRecommendData")
    //   await this.$store.dispatch("getRecommendPull", {page: 1, size: 5})
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .recommend
    width 100%
    overflow hidden
    box-sizing border-box
    padding-top 120px
    font-size 28px
    .recommendContent
      width 100%
    
</style>
