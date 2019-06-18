/*使用mockjs（纯前台的操作  ，提供的数据是动态的随机的）提供mock数据接口 */

import Mock from 'mockjs'

import data from './data.json'  ///data是js对象 


// 提供mock接口
Mock.mock('/goods',{code:0,data:data.goods})


Mock.mock('/ratings',{code:0,data:data.ratings})

Mock.mock('/info',{code:0,data:data.info})

console.log('mock-serve...')