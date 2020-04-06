import Vue from 'vue';
import HorizontalMenu from '../admin/components/HorizontalMenu';
import Topbar from '../admin/components/Topbar';
import Aside from '../admin/components/Aside';
import Content from '../admin/components/Content';
import Footer from '../admin/components/Footer';
import sideBar from '../admin/components/sideBar';
import Header from '../admin/components/Header';
import Dashboard from '../admin/components/Dashboard';
import Language from '../admin/components/language';
import Layout from '../Layout';
import StateColors from '../admin/components/StateColors';
import Typography from '../admin/components/Typography';
import VTable from '../admin/components/Table';
import VTableRow from '../admin/components/TableRow';
// import TreeView from '../admin/components/Tree';
import TreeView from '../admin/components/TreeView';
import VModal from '../admin/components/Modal';
import Paginate from 'vuejs-paginate';
import FormField from '../admin/components/FormFields';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import VSlides from '../admin/components/Slides';
import VTabs from '../admin/components/Tabs';
import Registerprofile from '../admin/components/Profile/register-profile';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


Vue.component('horizontal-header',HorizontalMenu);
Vue.component('VueCtkDateTimePicker',VueCtkDateTimePicker);
Vue.component('v-topbar',Topbar);
Vue.component('v-aside',Aside);
Vue.component('v-slides',VSlides);
Vue.component('v-tabs',VTabs);
Vue.component('v-content',Content);
Vue.component('register-profile',Registerprofile);
Vue.component('v-footer',Footer);
Vue.component('v-sideBar',sideBar);
Vue.component('v-header',Header);
Vue.component('TreeView',TreeView);
Vue.component('v-dashboard',Dashboard);
Vue.component('v-state',StateColors);
Vue.component('v-layout',Layout);
Vue.component('v-typography',Typography);
Vue.component('v-language',Language);
Vue.component('v-table',VTable);
Vue.component('table-row',VTableRow);
Vue.component('v-modal',VModal);
Vue.component('paginate', Paginate)
Vue.component('FormField', FormField)




