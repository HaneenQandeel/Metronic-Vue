import Vue from 'vue'
import App from './App.vue'
import './admin/component'
import i18n from './admin/i18n'
import router from './admin/router/index'

// import Vuex from 'vuex'

// Vue.use(Vuex)
Vue.config.productionTip = false




new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
