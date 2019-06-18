// // 管理shop相关状态数据的模块

// import Vue from 'vue'

// import {
//     reqInfo,
//     reqGoods,
//     reqRatings
// } from '../../api'

// import {
//     RECEIVE_INFO,
//     RECEIVE_GOODS,
//     RECEIVE_RATINGS,
//     REDUCE_FOOD_COUNT,
//     ADD_FOOD_COUNT
// } from '../mutation-types'

// const state={
//     goods: [], // 商品列表
//     ratings: [], // 商家评价列表
//     info: {}, // 商家信息
//     cartFoods: [], // 购物车的food数组
// }
// const mutations={
//     [RECEIVE_INFO](state, {info}) {
//         state.info = info
//     },
    
//     [RECEIVE_RATINGS](state, {ratings}) {
//         state.ratings = ratings
//     },
    
//     [RECEIVE_GOODS](state, {goods}) {
//         state.goods = goods
//     },

//     [REDUCE_FOOD_COUNT](state,{food}) {
//         if(food.count>0){
//             food.count--
//             // 一旦food没有了 从购物车中移出
//             if(food.count===0){
//                 state.cartFoods.splice(state.cartFoods.indexOf,1)
//             }
//         }
//     },

//     [ADD_FOOD_COUNT](state,{food}) {
//         if (!food.count) {
//             // food.count=1
//             // 属性名是字符串
//             Vue.set(food, 'count', 1)
//             // 将food添加到购物车
//             state.cartFoods.push(food)
//         } else {
//             food.count++
//         }
//     },
    
// }
// const actions={
//     // 获取商家信息的异步action
//     async getInfo ({commit}) {
       
//         // 发送异步ajax请求
//         const result = await reqInfo()
//         // 成功后,提交mutation去更新状态数据
//         if (result.code===0) {
//           const info = result.data
//           commit(RECEIVE_INFO, {info})
//         }
//       },

//     // 获取商品信息的异步action
//     async getGoods({commit}){
//         // 发送异步ajax请求
//         const result=await reqGoods()
//         // 成功后，提交mutation去更新状态数据
//         if(result.code===0){
//             const goods=result.data
//             commit(RECEIVE_GOODS,{goods})
//         }
//     },

//     // 获取评价列表的异步action
//     async getRatings({commit}){
//         // 发送异步ajax请求
//         const result=await reqRatings()
//         // 成功后，提交mutation去更新状态数据
//         if(result.code===0){
//             const ratings=result.data
//             commit(RECEIVE_RATINGS,{ratings})
//         }
//     },

//     // 更新指定food的数量的action
//    updateFoodCount({commit},{isAdd,food}){
//         if(isAdd){
//             commit(ADD_FOOD_COUNT,{food})
//         }else{
//             commit(REDUCE_FOOD_COUNT,{food})
//         }
//     }
// }
// const getters={
//     // 购物车中的food列表
//     // 不用计算属性 ，自己去收集数据
//     // carFoods(state){
//     //     const arr=[]
//     //     state.goods.forEach(good => {
//     //         good.foods.forEach(food=>{
//     //             if(food.count>0){
//     //                 arr.push(food)
//     //             }
//     //         })
//     //     });
//     //     return arr
//     // },

//     // 总数量
//     totalCount(state){
//         return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
//     },

//     // 总价格
//     totalPrice(state){
//         return state.cartFoods.reduce((pre,food)=>pre+food.count*food.price,0)
//     },

//     ratingsTotalCount(state){
//         return state.ratings.length
//     },

//     positiveRatingsCount(state){
//         return state.ratings.reduce((pre,rating)=>pre+(rating.rateType===0?1:0),0)
//     }
// }



// export default{
//     state,
//     mutations,
//     actions,
//     getters
// }