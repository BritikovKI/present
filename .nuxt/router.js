import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ea7271d = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _4f7a2f3a = () => interopDefault(import('../pages/me.vue' /* webpackChunkName: "pages/me" */))
const _3d37d320 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6ea7271d,
    name: "admin___fr"
  }, {
    path: "/me",
    component: _4f7a2f3a,
    name: "me___fr"
  }, {
    path: "/ru",
    component: _3d37d320,
    name: "index___ru"
  }, {
    path: "/ru/admin",
    component: _6ea7271d,
    name: "admin___ru"
  }, {
    path: "/ru/me",
    component: _4f7a2f3a,
    name: "me___ru"
  }, {
    path: "/",
    component: _3d37d320,
    name: "index___fr"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
