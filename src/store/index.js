/*
  Import all modules that vuex handle state in our application
*/
import Vue from 'vue'
import Vuex from 'vuex'

/** Modules */
import AuthModule from './modules/authenticate'
import CategoryModule from './modules/category'

/** End Modules */

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: AuthModule,
    category: CategoryModule
  }
})
