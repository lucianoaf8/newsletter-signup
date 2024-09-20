// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('./views/Home.vue')
const Subscribe = () => import('./views/Subscribe.vue')
const Unsubscribe = () => import('./views/Unsubscribe.vue')
const SubmitError = () => import('./views/SubmitError.vue')
const SubmitRequest = () => import('./views/SubmitRequest.vue')
const EditPreferences = () => import('./views/EditPreferences.vue')
const SubscribeSuccess = () => import('./views/SubscribeSuccess.vue')
const UnsubscribeSuccess = () => import('./views/UnsubscribeSuccess.vue')
const SuccessPage = () => import('./views/SuccessPage.vue')
const NotFound = () => import('./views/NotFound.vue') // Import NotFound.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: Subscribe,
    meta: { title: 'Subscribe' }
  },
  {
    path: '/unsubscribe',
    name: 'Unsubscribe',
    component: Unsubscribe,
    meta: { title: 'Unsubscribe' }
  },
  {
    path: '/submit-error',
    name: 'SubmitError',
    component: SubmitError,
    meta: { title: 'Submission Error' }
  },
  {
    path: '/submit-request',
    name: 'SubmitRequest',
    component: SubmitRequest,
    meta: { title: 'Submit Request' }
  },
  {
    path: '/edit-preferences',
    name: 'EditPreferences',
    component: EditPreferences,
    meta: { title: 'Edit Preferences' }
  },
  {
    path: '/subscribe-success',
    name: 'SubscribeSuccess',
    component: SubscribeSuccess,
    meta: { title: 'Subscription Successful' }
  },
  {
    path: '/unsubscribe-success',
    name: 'UnsubscribeSuccess',
    component: UnsubscribeSuccess,
    meta: { title: 'Unsubscription Successful' }
  },
  {
    path: '/success-page',
    name: 'SuccessPage',
    component: SuccessPage,
    meta: { title: 'Success' }
  },
  // 404 Not Found Route
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

// Optional: Navigation Guard to Set Document Title
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Luca Newsletter Signup'
  document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle
  next()
})

export default router
