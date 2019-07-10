// 管理msite相关状态数据的模块

import {
    reqMockHome
} from '../../../api'

import {
    GET_HOME_DATA 
} from '../mutation-type'


const state={
    homeData: []   //分类列表
}
const mutations={
    [GET_HOME_DATA] (state, {homeData}) {
        state.homeData = homeData    // mutation直接操作状态
    }
}
const actions={
    async getHomeData ({commit}) {
        const result = await reqMockHome();    // 发送ajax
      
        console.log('result',result)
        if (result.code === 0) {
          const homeData = result.data
          commit(GET_HOME_DATA, {homeData})    // 根据返回的数据调用 mutations 更改数据
        }
      }
}
const getters={}



export default{
    state,
    mutations,
    actions,
    getters
}