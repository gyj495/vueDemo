import Fenlei from '../pages/Fenlei/Fenlei.vue'
import Person from '../pages/Person/Person.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import ShopCar from '../pages/Shopcar/Shopcar.vue'
import Shouye from '../pages/Shouye/Shouye.vue'
 /* eslint-disable */
export default [
    {
      path: '/shouye',
      component: Shouye,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/fenlei',
      component: Fenlei,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/shopCar',
      component: ShopCar,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/person',
      component: Person
    },
    { // 当访问根路径自动重定向到/shouye
      path: '/',
      redirect: '/shouye'
    }
  ]