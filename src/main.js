import Vue  from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';



// Vue.use(MintUI);

Vue.config.productionTip = false

// 注册全局组件
// Vue.component()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,   //配置路由器
})
