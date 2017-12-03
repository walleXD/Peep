import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Meta from 'vue-meta'
import { VueRedux as Redux } from 'vue2-redux'

import App from './containers/App.vue'
import routes from './lib/routes'
import getStore from './lib/store'

const store = getStore()

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(Meta)
Vue.use(Redux(store))

new Vue({
  components: { App },
  router: new Router({ routes }),
  render: h => h(App)
}).$mount('#app')
