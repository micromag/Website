import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b2f56db = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _b2163112 = () => interopDefault(import('../pages/Issue7.vue' /* webpackChunkName: "pages/Issue7" */))
const _b1fa0210 = () => interopDefault(import('../pages/Issue8.vue' /* webpackChunkName: "pages/Issue8" */))
const _c6640d14 = () => interopDefault(import('../pages/Magazines.vue' /* webpackChunkName: "pages/Magazines" */))
const _6b8ea109 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _69d7ffc1 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Blog",
    component: _1b2f56db,
    name: "Blog"
  }, {
    path: "/Issue7",
    component: _b2163112,
    name: "Issue7"
  }, {
    path: "/Issue8",
    component: _b1fa0210,
    name: "Issue8"
  }, {
    path: "/Magazines",
    component: _c6640d14,
    name: "Magazines"
  }, {
    path: "/",
    component: _6b8ea109,
    name: "index"
  }, {
    path: "/:slug",
    component: _69d7ffc1,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
