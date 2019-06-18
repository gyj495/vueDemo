// // 管理user相关状态数据的模块

// import {
//     reqLogout,
// } from '../../api'

// import {
//     RECEIVE_USER,
//     RESET_USER,
// } from '../mutation-types'

// const state={
//     user:{} ,   //当前登录用户
// }
// const mutations={
//     [RECEIVE_USER](state,user){
//         state.user=user
//     },
//     [RESET_USER](state){
//         state.user={}
//     },
// }
// const actions={
//     // 退出登录的异步action
//     async logout({commit}){
//         // 发送退出登录的ajax的请求
//         const result=await reqLogout()
//         // 成功后重置user数据
//         if(result.code===0){
//             commit(RESET_USER)
//         }
//     },
// }
// const getters={}



// export default{
//     state,
//     mutations,
//     actions,
//     getters
// }