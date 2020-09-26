import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://ragazzitech.caioragazzi.com:81/';
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(),
  router,
  render: (h) => h(App),
}).$mount('#app');
