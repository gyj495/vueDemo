// 管理msite相关状态数据的模块

import {
    reqRecommendData,
    reqRecommendPull
} from '../../../api'

import {
    GET_RECOMMEND_DATA,
    GET_RECOMMEND_PULL 
} from '../mutation-type'


const state={
    recommendData: [],   //所有数据
    recommendPull: {   //下拉更新
        hasMore: true,
        result: []
      },
}
const mutations={
    [GET_RECOMMEND_DATA] (state, {recommendData}) {
        state.recommendData = recommendData   
      },
    [GET_RECOMMEND_PULL] (state, {recommendPull}) {
        if (!state.recommendPull.hasMore) {
            state.recommendPull = recommendPull    // 如果 autoRecommendData 还没有数据
        } else if (state.recommendPull.hasMore) {
            state.recommendPull.result.push(...recommendPull.result)    // 如果有数据向其中追加
        }
    },
}
const actions={
    async getRecommendData ({commit}) {
        const result = await reqRecommendData();    // 发送ajax
      
        console.log('result',result)
        if (result.code === '200') {
          const recommendData = result.data
          commit(GET_RECOMMEND_DATA, {recommendData})   
        }
    },
    async getRecommendPull ({commit},{page, size}) {    // 推荐 - 上拉加载数据
        const result = await reqRecommendPull(page, size);    // 发送ajax
        const recommendPull = result.data
        
        if (result.code === "200") {
          commit(GET_RECOMMEND_PULL, {recommendPull})    
        }
    },
}
const getters={}



export default{
    state,
    mutations,
    actions,
    getters
}