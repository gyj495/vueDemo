// /*
// 路由器对象模块
// */
import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './routes'

Vue.use(VueRouter)
 /* eslint-disable */
export default new VueRouter({
  // 应用中所有路由
  routes
})