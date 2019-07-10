<template>
  <div>
    <router-view/>
    <Footer v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './components/Footer/Footer'
import {reqRecommendData,reqRecommendPull} from './api'
import { GET_RECOMMEND_DATA } from './vuex/store/mutation-type';
export default {
  name:'App',
  async mounted(){
   const result=await reqRecommendData()
   if(result.code==='200'){
       const recommend=result.data
       this.$store.commit(GET_RECOMMEND_DATA,recommend)
    }
   const result1=await reqRecommendPull(1,5)
  },
  components:{
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
