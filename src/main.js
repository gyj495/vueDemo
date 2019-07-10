import Vue  from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'  //适配
import store from './vuex/store'
import './mockData/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

// 注册全局组件
// Vue.component()
// Vue.store=store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',   //渲染到页面上
  router,   //配置路由器
  store
})
 