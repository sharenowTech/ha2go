import Vue from 'vue'
import * as types from './mutation-types'

const BASE_URL = 'https://sims.car2go.com'

const fetchLocations = ({ commit }) => {
  return Vue.http.get(`${BASE_URL}/locations/`)
    .then(response => {
      const locations = response.body
      commit(types.RECEIVE_LOCATIONS, locations)
    })
    .catch(e => {
      console.error(e)
    })
}

const fetchVehicles = ({ commit }, id) => {
  return id && Vue.http.get(`${BASE_URL}/cars/${id}`)
    .then(response => {
      const vehicles = response.body
      commit(types.RECEIVE_VEHICLES, vehicles)
    })
    .catch(e => {
      console.error(e)
    })
}

// Manually pick location
const pickLocation = ({ commit }, payload) => {
  commit(types.PICK_LOCATION, payload)
}

// Loads locations and then picks one by alias
const autoPickLocation = ({ getters, commit }, alias) => {
  let locationId
  fetchLocations({ commit })
    .then(() => {
      locationId = getters.locationByAlias(alias).location_id
      pickLocation({ commit }, locationId)
    })
    .then(() => {
      fetchVehicles({ commit }, locationId)
    })
    .catch(e => {
      console.error(e)
    })
}

export default {
  fetchLocations,
  pickLocation,
  autoPickLocation,
  fetchVehicles
}
