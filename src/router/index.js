import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import HomeRoutes from '../modules/Home/_routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: HomeRoutes
    },
  ]
})
