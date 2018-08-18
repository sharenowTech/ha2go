// Get all vehicles
const vehicles = state => state.vehicles

// Get all locations
const locations = state => state.locations

// Get location by id
const locationById = (state, get) => id => {
  // Array.prototype.find not supported in IE
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  return get.locations.find(l => l.location_id === id) || {}
}

// Get location object by alias
const locationByAlias = (state, get) => alias => {
  // Array.prototype.find not supported in IE
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  return get.locations.find(l => l.city_name.toLowerCase() === alias) || {}
}

// Get active location
const activeLocation = (state, get) => {
  return get.locationById(state.activeLocation)
}

export default {
  locations,
  locationById,
  locationByAlias,
  activeLocation,
  vehicles
}
