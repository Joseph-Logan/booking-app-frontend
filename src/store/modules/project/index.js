import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  isLoading: false,
  message: null,
  status: 0,
  projects: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
