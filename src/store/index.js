// Core
import Vue from 'vue'
import Vuex from 'vuex'

// Import namespaced modules
import fleet from '@/store/modules/fleet'

const modules = {
  fleet
}

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules
})
