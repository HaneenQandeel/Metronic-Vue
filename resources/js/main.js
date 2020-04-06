import Vue from 'vue'
import App from './App.vue'
import './admin/component'
import i18n from './admin/i18n'
import router from './admin/router/index'
import VModal from 'vue-js-modal'
import Paginate from 'vuejs-paginate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import swal from 'sweetalert';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import vuetify from './admin/plugins/vuetify' // path to vuetify export
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import * as Tabs from 'vue-slim-tabs'
 
Vue.use(Tabs)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Paginate);
Vue.use(VModal,{ dialog: true })
Vue.config.productionTip = false




new Vue({
  i18n,
  router,vuetify,
  render: h => h(App),
}).$mount('#app')
