// 管理msite相关状态数据的模块

import {
    reqSearchResult,
    reqInitSearch
} from '../../../api'

import {
    GET_SEARCH_RESULT,
    GET_SEARCH_DATA 
} from '../mutation-type'


const state={
    searchData: {},
    searchResult: []
}
const mutations={
    [GET_SEARCH_DATA] (state, {searchData}) {
        state.searchData = searchData    // mutation直接操作状态
      },
    [GET_SEARCH_RESULT] (state, {searchResult}) {
        state.searchResult = searchResult    // mutation直接操作状态
      }
}
const actions={
    async getSearchData ({commit}) {
        const result = await reqInitSearch();    // 发送ajax
        const searchData = result.data
        if(result.code === "200"){
          commit(GET_SEARCH_DATA, {searchData})    // 根据返回的数据调用 mutations 更改数据
        }
        console.log(searchData),
      },
    async getSearchResult ({commit}, keywordPrefix) {
        const result = await reqSearchResult(keywordPrefix);    // 发送ajax
        const searchResult = result.data
        if(result.code === "200"){
          commit(GET_SEARCH_RESULT, {searchResult})    // 根据返回的数据调用 mutations 更改数据
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