// 管理msite相关状态数据的模块

import {
    reqServeNav
} from '../../../api'

import {
    GET_SERVE_NAV 
} from '../mutation-type'


const state={
    serveNav: {}  
}
const mutations={
    [GET_SERVE_NAV] (state, {serveNav}) {
        state.serveNav = serveNav    // mutation直接操作状态
    }
}
const actions={
    async getServeNav ({commit}) {
        const result = await reqServeNav();    // 发送ajax
      
        console.log('result',result)
        if (result.code === 0) {
          const serveNav = result.data.serveNav
          commit(GET_SERVE_NAV, {serveNav})    // 根据返回的数据调用 mutations 更改数据
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