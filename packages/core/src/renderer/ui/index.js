import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Meta from 'vue-meta'

import App from './containers/App.vue'
import routes from './lib/routes'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(Meta)

new Vue({
  components: { App },
  router: new Router({ routes }),
  render: h => h(App)
}).$mount('#app')
