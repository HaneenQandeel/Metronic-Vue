import Vue from 'vue'
import App from './App.vue'
import './admin/component'
import i18n from './admin/i18n'
import Vuex from 'vuex'
import router from './admin/router/index'
import VModal from 'vue-js-modal'
import Paginate from 'vuejs-paginate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import swal from 'sweetalert';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Paginate);
Vue.use(VModal,{ dialog: true })
Vue.config.productionTip = false




new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
