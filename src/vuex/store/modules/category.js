// 管理msite相关状态数据的模块

import {
    reqMockCategory
} from '../../../api'

import {
    GET_CATEGORY_DATA 
} from '../mutation-type'


const state={
    categoryData: []   //分类列表
}
const mutations={
    [GET_CATEGORY_DATA] (state, {categoryData}) {
        state.categoryData = categoryData    // mutation直接操作状态
    }
}
const actions={
    async getCategoryData ({commit}) {
        const result = await reqMockCategory();    // 发送ajax
      
        console.log('result',result)
        if (result.code === 0) {
          const categoryData = result.data.categoryL1List
          commit(GET_CATEGORY_DATA, {categoryData})    // 根据返回的数据调用 mutations 更改数据
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