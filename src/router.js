import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UDN from './views/UDN.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/udn',
      name: 'udn',
      component: UDN
    },
    {
      path: '/sshs',
      name: 'sshs',
      component: () => import('./views/SSHS.vue')
    }
  ]
})
