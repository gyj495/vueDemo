// import Categorize from '../pages/Categorize/Categorize.vue'
// import Person from '../pages/Person/Person.vue'
// import Knowledge from '../pages/Knowledge/Knowledge.vue'
// import Recommend from '../pages/Knowledge/recommend/recommendMain.vue'
// import ShopCar from '../pages/Shopcar/Shopcar.vue'
// import Home from '../pages/Home/Home.vue'


// 按需加载
const Home = () => import('../pages/Home/Home.vue');
const Search = () => import('../components/Search/Search.vue');
const Categorize = () => import('../pages/Categorize/Categorize.vue');
const Recommend = () => import('../pages/Knowledge/recommend/recommendMain.vue');
const ShopCar = () => import('../pages/Shopcar/Shopcar.vue');
const Person = () => import('../pages/Person/Person.vue');
const Knowledge = () => import('../pages/Knowledge/Knowledge.vue');

 /* eslint-disable */
export default [
    {
      path: '/home',
      component: Home,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/categorize',
      component: Categorize,
      meta:{
        isShowFoot:true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta:{
        isShowFoot:true
      },
      children:[
        {
          path:'/knowledge/recommend',
          component:Recommend,
          meta:{
            isShowFoot:true
          }
        }
      ]
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
      component: Person,
      meta:{
        isShowFoot:false
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        isShowFoot:false
      }
    },
    { // 当访问根路径自动重定向到/shouye
      path: '/',
      redirect: '/home'
    }
  ]