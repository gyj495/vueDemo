// 引入ajax模块
import ajax from './ajax'
//const BASE = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
const BASE = '/api'
// 分类列表数据
export const reqMockCategory = () => ajax('/mock/category');    // 请求mock数据

// 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(BASE+'/topic/v1/find/recManual.json')

// 识物-推荐数据 上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
export const reqRecommendPull = (page, size, exceptIds = '11320,10801,11509,9437,11510,11507,8741,12267,8855,8777,7696,11586,11401,10930,11701,11524,9439,1215,3438,2082,6686,10378,10377,11324,9548,6965,11267,11106,9548') => ajax(BASE+'/topic/v1/find/recAuto.json', {page, size, exceptIds})

// 服务导航
export const reqServeNav = () => ajax('/mock/home');    // 请求mock数据
export const reqHandpick = () => ajax('/mock/home');    // 请求mock数据

// 搜索 关键字
export const reqInitSearch = () => ajax(BASE+'/xhr/search/init.json', 'POST')

// 获取搜索结果
export const reqSearchResult = (keywordPrefix) => ajax(BASE+'/xhr/search/searchAutoComplete.json', {keywordPrefix})

// 首页数据
export const reqMockHome = () => ajax('/mock/home');    // 请求mock数据

console.log('reqRecommendData',reqRecommendData)