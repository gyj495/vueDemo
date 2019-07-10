// 管理msite相关状态数据的模块

import {
    reqHandpick
} from '../../../api'

import {
    GET_HANDPICK_DATA 
} from '../mutation-type'


const state={
    handpick: []
}
const mutations={
    [GET_HANDPICK_DATA] (state, {a}) {
        state.handpick = a    // mutation直接操作状态
        console.log(state.handpick)
    }
    
}
const actions={
    async getHandpic ({commit}) {
        const result = await reqHandpick();    // 发送ajax
      
        console.log('result',result)
        if (result.code === 0) {
          const handpick = result.data.handpick
          let a = []
          for (let i = 0; i < handpick.length; i++) {
           a = a.concat(handpick[i].cells)
          }
          
        //   handpick.map((item,index)=>{
        //         return item.cells.map((item,index)=>{
        //            return data.push(item)
        //             console.log(data)
        //         })
        //   })
        //     console.log(handpick)
        //     var arr=[];
        //     handpick
          commit(GET_HANDPICK_DATA, {a})    // 根据返回的数据调用 mutations 更改数据
          console.log({a})
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