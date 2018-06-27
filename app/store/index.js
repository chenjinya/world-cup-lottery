import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    date: '',
    time: '',
    team: [],
    score: [],
    result: '',
    ratio: 0,
  },
  actions,
  mutations,
  modules: {

  },
  strict: debug,
})