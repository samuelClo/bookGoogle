import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

import { store } from './store.js'



Vue.use(Ionic);

Vue.config.productionTip = false

Vue.prototype.$store = 'ehhehehe'

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
