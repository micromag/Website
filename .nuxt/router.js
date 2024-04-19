import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a6bbb66 = () => interopDefault(import('../pages/Contribute.vue' /* webpackChunkName: "pages/Contribute" */))
const _d5653908 = () => interopDefault(import('../pages/Guidelines.vue' /* webpackChunkName: "pages/Guidelines" */))
const _b2bf4b1e = () => interopDefault(import('../pages/Issue1.vue' /* webpackChunkName: "pages/Issue1" */))
const _b2a31c1c = () => interopDefault(import('../pages/Issue2.vue' /* webpackChunkName: "pages/Issue2" */))
const _b286ed1a = () => interopDefault(import('../pages/Issue3.vue' /* webpackChunkName: "pages/Issue3" */))
const _b26abe18 = () => interopDefault(import('../pages/Issue4.vue' /* webpackChunkName: "pages/Issue4" */))
const _b24e8f16 = () => interopDefault(import('../pages/Issue5.vue' /* webpackChunkName: "pages/Issue5" */))
const _b2326014 = () => interopDefault(import('../pages/Issue6.vue' /* webpackChunkName: "pages/Issue6" */))
const _b2163112 = () => interopDefault(import('../pages/Issue7.vue' /* webpackChunkName: "pages/Issue7" */))
const _b1fa0210 = () => interopDefault(import('../pages/Issue8.vue' /* webpackChunkName: "pages/Issue8" */))
const _c6640d14 = () => interopDefault(import('../pages/Magazines.vue' /* webpackChunkName: "pages/Magazines" */))
const _49628e04 = () => interopDefault(import('../pages/Submissions.vue' /* webpackChunkName: "pages/Submissions" */))
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
    path: "/Contribute",
    component: _4a6bbb66,
    name: "Contribute"
  }, {
    path: "/Guidelines",
    component: _d5653908,
    name: "Guidelines"
  }, {
    path: "/Issue1",
    component: _b2bf4b1e,
    name: "Issue1"
  }, {
    path: "/Issue2",
    component: _b2a31c1c,
    name: "Issue2"
  }, {
    path: "/Issue3",
    component: _b286ed1a,
    name: "Issue3"
  }, {
    path: "/Issue4",
    component: _b26abe18,
    name: "Issue4"
  }, {
    path: "/Issue5",
    component: _b24e8f16,
    name: "Issue5"
  }, {
    path: "/Issue6",
    component: _b2326014,
    name: "Issue6"
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
    path: "/Submissions",
    component: _49628e04,
    name: "Submissions"
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
