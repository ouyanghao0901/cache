import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './Actions'
import * as getters from './Getters'
import * as mutations from './Mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: '',
    currentUser: null,
    isLogin: false
  },
  getters,
  mutations,
  actions
})
