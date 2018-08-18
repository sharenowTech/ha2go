import * as types from './mutation-types'

const mutations = {
  [types.RECEIVE_LOCATIONS] (state, payload) {
    state.locations = payload
  },

  [types.PICK_LOCATION] (state, payload) {
    state.activeLocation = payload
  },

  [types.RECEIVE_VEHICLES] (state, payload) {
    state.vehicles = payload
  }
}

export default mutations
