// Core libs and plugins
import Vue from 'vue'
import Router from 'vue-router'

// Components
import Fleet from '@/components/namespaced/fleet/Fleet'

// Install plugins
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fleet',
      component: Fleet,
      props: true,
      children: [
        {
          name: 'fleet-of-city',
          path: ':locationAlias'
        }
      ]
    }
  ]
})
