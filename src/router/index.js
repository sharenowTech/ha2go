// Core libs and plugins
import Vue from 'vue'
import Router from 'vue-router'

// Components
import Fleet from '@/components/namespaced/fleet/Fleet'

// Install plugins
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/docs',
      beforeEnter () {
        window.location = 'https://swagger.car2go.io/?url=https://sims.car2go.com/doc/#/'
      }
    },
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
