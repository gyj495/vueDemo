import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import serveNav from "./modules/serveNav"
import category from "./modules/category"
import find from "./modules/find"
import handpick from './modules/handpick'
import home from './modules/home'


Vue.use(Vuex);
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
   category,
   find,
   serveNav,
   handpick,
   home
  }
})
