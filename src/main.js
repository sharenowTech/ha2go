import Vue from 'vue'
import App from '@/App'

import router from '@/router'
import store from '@/store' // vuex
import plugins from '@/plugins'

Vue.use(plugins)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
