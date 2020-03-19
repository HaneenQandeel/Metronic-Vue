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


Vue.component('horizontal-header',HorizontalMenu);
Vue.component('v-topbar',Topbar);
Vue.component('v-aside',Aside);
Vue.component('v-content',Content);
Vue.component('v-footer',Footer);
Vue.component('v-sideBar',sideBar);
Vue.component('v-header',Header);
Vue.component('v-dashboard',Dashboard);
Vue.component('v-state',StateColors);
Vue.component('v-layout',Layout);
Vue.component('v-typography',Typography);
Vue.component('v-language',Language);



