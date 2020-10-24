import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ConfigSax from './config/vuesax'
import ConfigVuetify from './config/vuetify'

import 'boxicons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ConfigSax,
  ConfigVuetify,
  render: h => h(App)
}).$mount('#app')
