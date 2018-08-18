import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// Initial state
const state = {
  activeLocation: {},
  locations: [],
  vehicles: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
