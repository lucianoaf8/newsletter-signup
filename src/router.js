import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Subscribe from './views/Subscribe.vue'
import Unsubscribe from './views/Unsubscribe.vue'
import SubmitError from './views/SubmitError.vue'
import SubmitRequest from './views/SubmitRequest.vue'
import EditPreferences from './views/EditPreferences.vue'
import SubscribeSuccess from './views/SubscribeSuccess.vue'
import UnsubscribeSuccess from './views/UnsubscribeSuccess.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/subscribe', component: Subscribe },
  { path: '/unsubscribe', component: Unsubscribe },
  { path: '/submit-error', component: SubmitError },
  { path: '/submit-request', component: SubmitRequest },
  { path: '/edit-preferences', component: EditPreferences },
  { path: '/subscribe-success', component: SubscribeSuccess },
  { path: '/unsubscribe-success', component: UnsubscribeSuccess },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router