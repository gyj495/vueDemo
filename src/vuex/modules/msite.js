// // 管理msite相关状态数据的模块

// import {
//     reqAddress,
//     reqCategorys,
//     reqShops,
// } from '../../api'

// import {
//     RECEIVE_ADDRESS,
//     RECEIVE_CATEGORYS,
//     RECEIVE_SHOPS,  
// } from '../mutation-types'


// const state={
//     latitude: 40.10038, // 纬度
//     longitude: 116.36867, // 经度
//     address: {}, // 地址信息对象   null不可以点
//     categorys: [], // 商品分类数组
//     shops: [], //商家数组
// }
// const mutations={
//     [RECEIVE_ADDRESS](state,address){
//         state.address=address
//     },
//     [RECEIVE_CATEGORYS](state,categorys){
//         state.categorys=categorys
//     },
//     [RECEIVE_SHOPS](state,shops){
//         state.shops=shops
//     },
// }
// const actions={
//     // 获取地址的异步action
//     async getAddress({commit,state}){
//         const {longitude,latitude}=state
//         //  第一步执行异步操作  发送ajax请求获取数据
//         const result=await reqAddress(longitude,latitude)
//         console.log('result1',result)
//         //成功后有了结果提交mutation 更新状态数据
//         if(result.code===0){
//             const address=result.data
//             commit(RECEIVE_ADDRESS,address)
//         }
//     },

//      // 获取商品分类列表的异步action
//      async getCategorys({commit}){
//         //  第一步执行异步操作  发送ajax请求获取数据
//         const result=await reqCategorys()
//         console.log('result2',result)
//         //成功后有了结果提交mutation 更新状态数据
//         if(result.code===0){
//             const categorys=result.data
//             commit(RECEIVE_CATEGORYS,categorys)
//         }
//     },

//      // 获取商家的异步action
//      async getShops({commit,state}){
        
//         const {longitude,latitude}=state
//         //  第一步执行异步操作  发送ajax请求获取数据
//         const result=await reqShops(longitude,latitude)
//         console.log('result3',result)
//         //成功后有了结果提交mutation 更新状态数据
//         if(result.code===0){
//             const shops=result.data
//             commit(RECEIVE_SHOPS,shops)
//         }
//     },
//     // xxx ({commit, state}) { // state是总state
//     //     console.log('msite action xxx()')
//     //     commit('yyy')
//     //   }
// }
// const getters={}



// export default{
//     state,
//     mutations,
//     actions,
//     getters
// }